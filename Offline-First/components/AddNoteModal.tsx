import { Alert, Pressable, Text, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { ManageNonte } from '@/hooks/AddNotes';
export default function AddNoteModal({ setIsModalOpen }) {
  const [note, setNote] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [tags, settags] = useState({
    tag1: "Security",
    tag2: "Personality"
  })

  const handleAddNote = () => {
    const not = { title: title, note: note, tag1: tags.tag1, tag2: tags.tag2 }
    ManageNonte.AddNote(not)
  }

  return (
    /* Overlay background to make the modal pop */
    <View className="absolute top-32 left-12 bg-black/60 flex-1 justify-center items-center px-5 z-50">

      {/* Modal Container */}
      <View className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-3xl p-6 shadow-2xl shadow-black">

        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <View className="w-2 h-8 bg-[#5b59f3] rounded-full mr-3" />
            <Text className="text-white text-2xl font-bold">New Note</Text>
          </View>
          <Pressable
            onPress={() => setIsModalOpen(false)}
          >
            <Ionicons name="close-circle-outline" size={28} color="#737373" />
          </Pressable>
        </View>

        {/* Form Fields */}
        <View className="gap-y-4">
          <View>
            <Text className="text-[#8c8aff] text-[10px] font-bold uppercase mb-2 ml-1">Title</Text>
            <TextInput
              value={title}
              onChangeText={(val) => setTitle(val)}
              placeholder="Authentication Protocol..."
              placeholderTextColor="#525252"
              className="bg-[#0f0f0f] border border-[#2e2e2e] rounded-xl px-4 py-3 text-white text-base focus:border-[#5b59f3]"
            />
          </View>

          <View>
            <Text className="text-[#8c8aff] text-[10px] font-bold uppercase mb-2 ml-1">Content</Text>
            <TextInput
              value={note}
              onChangeText={(val) => setNote(val)}
              placeholder="I have to take care of..."
              placeholderTextColor="#525252"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              className="bg-[#0f0f0f] border border-[#2e2e2e] rounded-xl px-4 py-4 text-white text-base min-h-[100px] focus:border-[#5b59f3]"
            />
          </View>
        </View>

        {/* Action Button */}
        <View className="mt-8 flex-row justify-end items-center gap-x-4">
          <Pressable className="px-6 py-3"
            onPress={() => setIsModalOpen(false)}
          >
            <Text className="text-zinc-500 font-bold uppercase text-xs">Cancel</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              handleAddNote()
              setIsModalOpen(false)
            }
            }
            className="bg-[#5b59f3] px-8 py-4 rounded-2xl flex-row items-center shadow-lg shadow-indigo-500/40"
          >
            <Ionicons name="checkmark-circle" size={20} color="white" />
            <Text className="text-white font-bold uppercase ml-2 tracking-wider">Save Note</Text>
          </Pressable>
        </View>

      </View>
    </View>
  )
}
