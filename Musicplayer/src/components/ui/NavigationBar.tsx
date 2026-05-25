import { Text, View } from "react-native"
import { UserRound, Search, Menu } from 'lucide-react-native';
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
          <UserRound color="#fff" size={20} strokeWidth={3} />
        </View>
      </View>
    </View>
  )
}

