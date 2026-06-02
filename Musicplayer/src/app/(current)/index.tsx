import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronDown, MoreHorizontal, Music2, Music4, Pause, Play, Shuffle, SkipBack, SkipForward, SlidersHorizontal, MonitorSmartphone } from "lucide-react-native";
export default function ArtistScreen({ pause, setPause }) {
  return (
    <>
      <View className="flex-1">
        <LinearGradient
          colors={['#1a1f3c', '#0f1117']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1 w-full h-full"
        >
          <View className="flex-1 mt-10">
            <View className="w-full flex-row items-center justify-between p-2">

              <View className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/10">
                <ChevronDown size={24} color="#fff" />
              </View>

              <View className="flex items-center justify-between mt-3">
                <Text className="text-white/50">NOW PLAYING </Text>
                <Text className="text-2xl text-white">Lumina Era</Text>
              </View>

              <View className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/10">
                <MoreHorizontal size={24} color="#fff" />
              </View>

            </View>


            <View className="w-[330px] h-[300px] rounded-[26px] bg-white mx-auto mt-10">
              {/* image goes here */}
            </View>

            <View className="flex items-center justify-center mt-10">
              <Text className="text-white text-4xl"> Starlight </Text>
              <Text className="text-white/50 text-2xl"> Lumina </Text>
            </View>

            <View className="flex items-center justify-center mt-10 relative mx-5 gap-1">
              <View className="w-full bg-white h-1 absolute top-0 left-0 right-0 rounded-md"> </View>
              <View className="w-[50%] bg-black/50 h-1 absolute top-0 left-0 right-0 rounded-md "> </View>

              <View className="flex-row items-center justify-between gap-70 mt-2">
                <Text className="text-white/50 "> 1:23</Text>
                <Text className="text-white/50"> -2:34</Text>
              </View>
            </View>



            {/* Controls */}
            <View className="flex-row items-center justify-center gap-5 shrink-0 mt-10">
              <TouchableOpacity
                className="w-[50px] h-[50px] rounded-full bg-white/[0.06] items-center justify-center"
                activeOpacity={0.7}
              >
                <SlidersHorizontal color="rgba(255,255,255,0.7)" size={15} fill="rgba(255,255,255,0.7)" />
              </TouchableOpacity>


              <TouchableOpacity
                className="w-[50px] h-[50px] rounded-full bg-white/[0.06] items-center justify-center"
                activeOpacity={0.7}
              >
                <SkipBack color="rgba(255,255,255,0.7)" size={15} fill="rgba(255,255,255,0.7)" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setPause(!pause)}
                className="w-[80px] h-[80px] rounded-full bg-white items-center justify-center"
                activeOpacity={0.85}
              >
                {pause
                  ? <Play color="#000" size={30} fill="#000" />
                  : <Pause color="#000" size={30} fill="#000" />
                }
              </TouchableOpacity>

              <TouchableOpacity
                className="w-[50px] h-[50px] rounded-full bg-white/[0.06] items-center justify-center"
                activeOpacity={0.7}
              >
                <SkipForward color="rgba(255,255,255,0.7)" size={15} fill="rgba(255,255,255,0.7)" />
              </TouchableOpacity>

              <TouchableOpacity
                className="w-[50px] h-[50px] rounded-full bg-white/[0.06] items-center justify-center"
                activeOpacity={0.7}
              >
                <Shuffle color="rgba(255,255,255,0.7)" size={15} fill="rgba(255,255,255,0.7)" />
              </TouchableOpacity>


            </View>



            <View className="flex-row items-center justify-between mx-3  shrink-0 mt-20">
              <View className="flex items-center">
                <TouchableOpacity
                  className="w-[50px] h-[50px] rounded-full bg-white/[0.06] items-center justify-center"
                  activeOpacity={0.7}
                >
                  <Music4 size={24} color="#fff" />
                </TouchableOpacity>
                <Text className="text-white/50">Lyrics </Text>
              </View>


              <View className="flex items-center">
                <TouchableOpacity
                  className="w-[50px] h-[50px] rounded-full bg-white/[0.06] items-center justify-center"
                  activeOpacity={0.7}
                >
                  <MonitorSmartphone size={24} color="#fff" />
                </TouchableOpacity>
                <Text className="text-white/50"> AirPlay </Text>
              </View>



              <View className="flex items-center">
                <TouchableOpacity
                  className="w-[50px] h-[50px] rounded-full bg-white/[0.06] items-center justify-center"
                  activeOpacity={0.7}
                >
                  <Music2 size={24} color="#fff" />
                </TouchableOpacity>
                <Text className="text-white/50"> Queue </Text>
              </View>



            </View>

          </View>
        </LinearGradient >
      </View >
    </>
  );
}

