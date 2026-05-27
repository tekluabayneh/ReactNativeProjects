import { Text, View } from "react-native"
import { UserRound, Search, Menu } from 'lucide-react-native';
import { Image } from "expo-image";
export const NavigationBar = () => {
  return (
    <View className="bg-[#12131A]  h-16.25 p-5 border border-b-white/10 ">
      <View className="flex-row  justify-between items-center">
        <View className="flex-row gap-5">
          <Menu color="#C9C6C5" size={20} strokeWidth={3} />
          <Text className="text-white text-2xl uppercase">Aura</Text>
        </View>
        <View className="flex-row gap-5">
          <Search color="#C4C7C7" size={20} strokeWidth={3} />
          <Image
            className="w-32 h-32 rounded-full"
            source={{
              uri: "https://images.uizard.io/a6d06d4e-6e8d-4e9e-8e8e-8e8e8e8e8e8e/Lumina.png"
            }} />

          {/* <UserRound color="#fff" size={20} strokeWidth={3} /> */}
        </View>
      </View>
    </View>
  )
}

