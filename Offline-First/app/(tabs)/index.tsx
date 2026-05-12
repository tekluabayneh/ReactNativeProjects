import { View } from '@/components/Themed';
import { BlurView, BlurTargetView } from 'expo-blur';
import { Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabOneScreen() {
  return (
    <BlurView
      intensity={60}
      tint="dark"
      className="p-2 rounded-2xl overflow-hidden border border-slate-500/30 flex-1"
      style={[{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }]}
    >
      <SafeAreaView>
        <View className='border border-white/50 rounded-xl w-22 bg-transparent h-15 flex flex-row  items-center justify-around p-2 '>
          <Ionicons name='search' size={24} color="#ffff" />
          <TextInput placeholder='Search your vault...' className='w-80 placeholder:text-2xl' />
          <Ionicons name='menu-outline' size={24} color="#8995fd" />
        </View>
        <View className='my-2'>
          <Text className='text-indigo-200 font-light text-4xl capitalize'>Active Workers </Text>
          <Text className='text-6xl text-white'>Encrepted Notes</Text>
        </View>

        {/* Notes  */}
        <View className='border border-indigo-200 rounded-xl p-2 bg-slate-500 my-5'>
          <View className='flex-row items-center justify-around'>
            <Ionicons name='pin' size={24} color="#8995fd" />
            <Text className='text-white text-2xl font-bold'>Authentication Protocole</Text>
            <Ionicons name='ellipsis-vertical' color="#ffff" size={24} />
          </View>
          <View>

            <Text className='text-white font-bold p-5'>
              well, i guess i am doing well man this is been the good tiem i have with react native since i started it to use it i have been sissue all the time i run it man why is that
            </Text>

          </View>
          <View className='p-2 flex-row gap-5'>
            <Text className='capitalize font-bold text-2xl bg-slate-500  text-indigo-200 rounded-full p-1 px-4'>
              Security
            </Text>

            <Text className='capitalize font-bold text-2xl bg-slate-500  text-indigo-200 rounded-full p-1 px-4'>
              updated 2dy ago
            </Text>


          </View>
        </View>
      </SafeAreaView>
    </BlurView>
  );
}

