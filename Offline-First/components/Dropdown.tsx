import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function NoteActionMenu({ setDropDownIsModalOpen }) {
  const handleAction = (id: number, item: any = {}) => {

  };
  return (
    <View className='absolute top-6 right-0 w-48 h-48 bg-surface/10 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl z-10'>
      <View className='flex-col justify-center items-center w-full gap-5 pt-10'>
        {/* Edit Option */}
        <TouchableOpacity
          onPress={() => setDropDownIsModalOpen(false)} >

          <View className='w-full justify-center items-center flex flex-row gap-2'>
            <Ionicons name='create' color="#fff" size={20} />
            <Text className='items-center font-bold text-white text-2xl'>Edit</Text>
          </View>
        </TouchableOpacity>

        {/* Delete Option */}
        <TouchableOpacity
          onPress={() => setDropDownIsModalOpen(false)} >


          <View className='w-full justify-center items-center flex flex-row gap-2'>

            <Ionicons onPress={() => setDropDownIsModalOpen(false)}
              name='create' color="#fff" size={20} />

            <Text className='items-center font-bold text-white text-2xl'>Delete</Text>
          </View>
        </TouchableOpacity>
        {/* Update Option */}
        <TouchableOpacity
          onPress={() => setDropDownIsModalOpen(false)} >



          <View className='w-full justify-center items-center flex flex-row gap-2'>

            <Ionicons onPress={() => setDropDownIsModalOpen(false)}
              name='refresh' color="#fff" size={20} />
            <Text className='items-center font-bold text-white text-[18px]'>Update</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>);
}

