import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, TouchableOpacity, TextInputChangeEvent } from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddNoteModal from '@/components/AddNoteModal';
import { ManageNonte } from '@/hooks/AddNotes';
import { type Note } from "../../hooks/AddNotes.js"
import NoteActionMenu from "@/components/Dropdown";
import { UseDebounce } from '@/hooks/SearchNote';


export default function TabOneScreen() {
  const [DropDownIsModalOpen, setDropDownIsModalOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notes, setNotes] = useState<Array<Note>>([])
  const [ActiveItem, SetActiveItem] = useState(0);
  const [value, setValue] = useState("")
  const debounceSearch = UseDebounce(value, 500)

  useEffect(() => {
    if (debounceSearch) {
      console.log("serching for....", debounceSearch)
      ManageNonte.GetSingleNoteByTitleName(debounceSearch)
    }
  }, [debounceSearch])

  const SetItemActive = (id: number) => {
    SetActiveItem(id)
  }

  useEffect(() => {
    const FetchAllNotes = async () => {
      const AllNotes = await ManageNonte.GetAllNote()
      setNotes(AllNotes == undefined ? [] : AllNotes)
    }
    FetchAllNotes()
  }, [])



  return (
    <View className="flex-1 bg-[#0f0f0f]">
      {/* Background Decorative Accents for Blur Depth */}
      <View className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[#5b59f3]/20" />
      <View className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-[#8995fd]/10" />

      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >

          {/* Search Bar */}
          <View className="flex-row items-center bg-[#1f1f1f] border border-[#2e2e2e] rounded-2xl px-4 py-3 mb-6">
            <Ionicons name="search" size={20} color="#a1a1a1" />
            <TextInput
              value={value}
              onChangeText={(val) => setValue(val)}
              placeholder="Search your vault..."
              placeholderTextColor="#737373"
              className="flex-1 ml-3 text-white text-base"
            />
            <Ionicons name="options-outline" size={20} color="#8995fd" />

          </View>

          {/* Header Section */}
          <View className="mb-6">
            <Text className="text-zinc-500 uppercase tracking-[2px] text-[10px] font-bold mb-1">
              Active Workspace
            </Text>
            <Text className="text-white text-4xl font-bold">Encrypted Notes</Text>
          </View>

          {/* Note Card Component */}
          {notes.length > 0 ? notes.map((item, idx) => (
            <View key={idx} className="mb-5 rounded-3xl border border-[#2e2e2e]">
              <BlurView
                intensity={90}
                tint="dark"
                className="bg-[#1a1a1a]/60"
              >
                <View className="p-5">
                  {/* Card Header */}
                  <View className="flex-row items-center justify-between mb-3">
                    <View className="flex-row items-center">
                      <Ionicons name="pin" size={18} color="#8c8aff" />
                      <Text className="text-white text-lg font-semibold ml-2">{item.title}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setDropDownIsModalOpen((val) => !val)
                        SetItemActive(idx)
                      }}
                    >
                      <Ionicons
                        name="ellipsis-vertical" color="#a1a1a1" size={20} />
                    </TouchableOpacity>
                    {DropDownIsModalOpen && ActiveItem == idx ? (
                      <NoteActionMenu setDropDownIsModalOpen={setDropDownIsModalOpen} />
                    ) : ""}
                  </View>

                  {/* Card Body */}
                  <Text className="text-zinc-400 text-sm leading-5 mb-4">
                    {item.note}
                  </Text>

                  {/* Card Footer / Tags */}
                  <View className="flex-row gap-2">
                    <View className="bg-[#322e4d] px-3 py-1 rounded-lg">
                      <Text className="text-[#8c8aff] text-[10px] font-bold uppercase">{item.tag1}</Text>
                    </View>
                    <View className="bg-[#242424] px-3 py-1 rounded-lg">
                      <Text className="text-zinc-500 text-[10px] font-bold uppercase">{item.tag2}</Text>
                    </View>
                  </View>
                </View>
              </BlurView>

            </View>

          )) :
            <Text className='text-3xl text-white text-center mt-10'> you don't have any notes</Text>
          }

        </ScrollView>
      </SafeAreaView>

      {
        isModalOpen ? <AddNoteModal setIsModalOpen={setIsModalOpen} /> : ""
      }

      {/* Floating Action Button */}
      <View className="absolute bottom-10 right-8">
        <Pressable

          onPress={() => setIsModalOpen(true)}
          className="w-16 h-16 bg-[#5b59f3] rounded-full items-center justify-center shadow-lg shadow-indigo-500/50"
        >
          <Ionicons name="add" color="white" size={32} />
        </Pressable>

      </View>
    </View>
  );
}
