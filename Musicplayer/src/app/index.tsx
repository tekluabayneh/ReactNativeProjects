import { Text, } from "react-native"
import { NavigationBar } from "@/components/ui/NavigationBar";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <NavigationBar />
      {/* <Sparkles color="#6366f1" size={48} strokeWidth={1.5} /> */}
      <Text className="text-red-200 text-2xl">this work i guess</Text>
    </SafeAreaView>)

}
