import { ScrollView, Text, View } from "react-native"
import { NavigationBar } from "@/components/ui/NavigationBar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecentlyPlayedMusics } from "@/components/RecentlyPlayedMusics";
import { TopMixes } from "@/components/ui/TopMixes";
import { CurrentPlayMusic } from "@/components/ui/CurrentPlayMusic";

export default function HomeScreen() {
  let date = new Date()
  return (
    <SafeAreaView className="bg-[#050505] flex-1">
      <ScrollView>
        <NavigationBar />
        <View className="flex flex-col gap-4 m-5">
          <Text className="text-white text-[31px] capitalize font-serif">
            {date.getHours() < 3 ? "Good Morning" : date.getHours() > 3 && date.getHours() < 8 ? "Good Day" : "Good night"}
          </Text>
          <Text className="text-[#C4C7C7] text-[16px] w-full">
            Curated for your nocturnal focus.
          </Text>
        </View>


        <View className="w-full flex-row justify-between items-center">
          <Text className="text-white text-[24px] capitalize p-4">
            Recently Played.
          </Text>

          <Text className="text-[#C9C6C5] text-[20px] capitalize p-4">
            View All
          </Text>
        </View>
        <RecentlyPlayedMusics />

        <Text className="p-4 text-white text-[31px] capitalize font-serif">
          Your Top Mixes
        </Text>

        <TopMixes />

        <CurrentPlayMusic />
      </ScrollView>
    </SafeAreaView>)

}
