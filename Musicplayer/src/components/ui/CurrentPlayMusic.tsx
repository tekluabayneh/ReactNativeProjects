import { Image } from 'expo-image'
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react-native'
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const CurrentPlayMusic = () => {
  const [pause, setPause] = useState(false)
  return (
    <View className='flex-1 m-6 border-2 bg-white/10 border-white/10 rounded-sm'>
      <View className='wi-[350px] h-[70px] flex-row items-center justify-between p-5'>
        <Image
          className='w-16 h-16 rounded-md'
          source={require("../../../assets/screen.png")} />

        {/* stitch_fluid_morph_music_player.zip */}
        {/* // title and artist name */}
        <View className='flex-col gap-1'>
          <Text className='text-white font-bold'>Gomez</Text>
          <Text className='text-gray-300 text-sm'>do you love</Text>
        </View>

        {/* // controller buttons */}
        <View className='flex-row items-center justify-center gap-4'>
          <SkipForward color="#fff" size={24} />
          <View className='bg-gray-200 p-2 rounded-full'>
            {pause ?
              <TouchableOpacity
                onPress={() => setPause(false)}
              >
                <Play color="#000" size={24} />
              </TouchableOpacity> :

              <TouchableOpacity
                onPress={() => setPause(true)}
              >
                <Pause color="#000" size={24} />
              </TouchableOpacity>
            }
          </View>
          <SkipBack color="#fff" size={24} />
        </View>
      </View>
      <View>
      </View>
    </View>
  )
}


