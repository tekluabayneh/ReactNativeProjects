import { Text, View, TouchableOpacity } from "react-native"
import { Search, Menu } from 'lucide-react-native';
import { Image } from "expo-image";

export const NavigationBar = () => {
  return (
    <View className="bg-[#0E0F17] border-b border-white/[0.08]">
      <View className="flex-row items-center justify-between px-[18px] h-[60px]">

        {/* Left — menu + wordmark */}
        <View className="flex-row items-center gap-3.5">
          <TouchableOpacity
            className="w-9 h-9 rounded-[10px] bg-white/[0.06] border border-white/10 items-center justify-center"
            activeOpacity={0.7}
          >
            <Menu color="rgba(255,255,255,0.7)" size={16} strokeWidth={2.5} />
          </TouchableOpacity>

          <View className="flex-row items-end gap-[3px]">
            <Text className="text-white text-[20px] font-extrabold tracking-[2px] uppercase">
              Aura
            </Text>
            {/* accent dot */}
            <View className="w-[5px] h-[5px] rounded-full bg-violet-400 mb-[4px]" />
          </View>
        </View>

        {/* Right — search + avatar */}
        <View className="flex-row items-center gap-2.5">
          <TouchableOpacity
            className="w-9 h-9 rounded-[10px] bg-white/[0.06] border border-white/10 items-center justify-center"
            activeOpacity={0.7}
          >
            <Search color="rgba(255,255,255,0.7)" size={16} strokeWidth={2.5} />
          </TouchableOpacity>

          {/* Avatar with online dot */}
          <View className="relative">
            <View className="w-[34px] h-[34px] rounded-full bg-violet-500 items-center justify-center border-2 border-violet-400/40">
              <Text className="text-white text-xs font-bold">L</Text>
            </View>
            {/* Online indicator */}
            <View className="absolute bottom-0 right-0 w-[9px] h-[9px] rounded-full bg-green-400 border-[1.5px] border-[#0E0F17]" />
          </View>
        </View>

      </View>
    </View>
  );
};
