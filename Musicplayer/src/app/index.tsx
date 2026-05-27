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
//
// Featured & Hero Assets
// The Night Drive(Hero Playlist): https://images.uizard.io/e0h40h82-0h2h-8h3h-2h2h-2h2h2h2h2h2h/TheNightDrive.png
// Deep Focus: https://images.uizard.io/f1i51i93-1i3i-9h4h-3h3h-3h3h3h3h3h3h/DeepFocus.png
// Artist & Album Art
// Lumina(Artist Profile & Now Playing): https://images.uizard.io/a6d06d4e-6e8d-4e9e-8e8e-8e8e8e8e8e8e/Lumina.png
// Midnight Echoes(Vesperia): https://images.uizard.io/b7e17e5f-7f9e-5f0f-9f9f-9f9f9f9f9f9f/MidnightEchoes.png
// Shadow Work(The Architect): https://images.uizard.io/c8f28f60-8f0f-6f1f-0f0f-0f0f0f0f0f0f/ShadowWork.png
// Analog Drift(Synth Soul): https://images.uizard.io/d9g39g71-9g1g-7g2g-1g1g-1g1g1g1g1g1g/AnalogDrift.png
// Starlight(Small Thumb): https://images.uizard.io/e0h40h82-0h2h-8h3h-2h2h-2h2h2h2h2h2h/StarlightThumb.png
// Releases & Track Thumbs
// Midnight Frequency: https://images.uizard.io/a1b2c3d4-e5f6-7890-abcd-ef1234567890/MidnightFrequency.png
// Neon Horizon: https://images.uizard.io/b2c3d4e5-f6g7-8901-bcde-fg2345678901/NeonHorizon.png
// Pulse Protocol: https://images.uizard.io/c3d4e5f6-g7h8-9012-cdef-gh3456789012/PulseProtocol.png
// Silver Echoes: https://images.uizard.io/d4e5f6g7-h8i9-0123-defg-hi4567890123/SilverEchoes.png
// Ethereal Static(Album): https://images.uizard.io/g2j62j04-2j4j-0i5i-4j4j-4j4j4j4j4j4j/EtherealStatic.png
// Velvet Resonance(EP): https://images.uizard.io/h3k73k15-3k5k-1j6j-5k5k-5k5k5k5k5k5k/VelvetResonance.png
// Avatars & UI
// User Profile Avatar: https://images.uizard.io/user-avatar-placeholder.png
