import { Image } from 'expo-image'
import { Pause, Play, SkipBack, SkipForward, Heart } from 'lucide-react-native'
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const CurrentPlayMusic = () => {
  const [pause, setPause] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <View className="mx-5 mt-2 rounded-2xl bg-white/[0.07] border border-white/[0.08] overflow-hidden">

      {/* Progress bar */}
      <View className="h-[3px] bg-white/[0.06]">
        <View className="h-full w-[38%] bg-violet-400 rounded-r-full" />
      </View>

      {/* Main row */}
      <View className="flex-row items-center justify-between px-3.5 py-3 gap-3">

        {/* Album art + track info */}
        <View className="flex-row items-center gap-3 flex-1 min-w-0">
          <Image
            className="w-[46px] h-[46px] rounded-[10px]"
            source={require("../../../assets/screen.png")}
            contentFit="cover"
          />
          <View className="flex-1 min-w-0">
            <Text
              className="text-white text-sm font-bold"
              numberOfLines={1}
            >
              Gomez
            </Text>
            <Text
              className="text-white/45 text-xs mt-0.5"
              numberOfLines={1}
            >
              do you love
            </Text>
          </View>
        </View>

        {/* Controls */}
        <View className="flex-row items-center gap-1.5 shrink-0">
          <TouchableOpacity
            className="w-[34px] h-[34px] rounded-full bg-white/[0.06] items-center justify-center"
            activeOpacity={0.7}
          >
            <SkipBack color="rgba(255,255,255,0.7)" size={15} fill="rgba(255,255,255,0.7)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPause(!pause)}
            className="w-[42px] h-[42px] rounded-full bg-white items-center justify-center"
            activeOpacity={0.85}
          >
            {pause
              ? <Play color="#000" size={18} fill="#000" />
              : <Pause color="#000" size={18} fill="#000" />
            }
          </TouchableOpacity>

          <TouchableOpacity
            className="w-[34px] h-[34px] rounded-full bg-white/[0.06] items-center justify-center"
            activeOpacity={0.7}
          >
            <SkipForward color="rgba(255,255,255,0.7)" size={15} fill="rgba(255,255,255,0.7)" />
          </TouchableOpacity>
        </View>

        {/* Like */}
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          className="w-8 h-8 rounded-full items-center justify-center shrink-0"
          activeOpacity={0.7}
        >
          <Heart
            size={16}
            color={liked ? "#f472b6" : "rgba(255,255,255,0.35)"}
            fill={liked ? "#f472b6" : "none"}
          />
        </TouchableOpacity>

      </View>
    </View>
  )
}
