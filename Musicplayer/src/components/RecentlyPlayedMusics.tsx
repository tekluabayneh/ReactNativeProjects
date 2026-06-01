import { FlatList, Text, View, TouchableOpacity } from "react-native"
import { Image } from "expo-image"
import { Play } from "lucide-react-native"

const MusicList = [
  {
    id: "1",
    title: "Midnight Chill",
    subtitle: "Deep lo-fi beats for coding",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Dreamy Echoes",
    subtitle: "Ambient synth waves resonance",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Lunar Vibes",
    subtitle: "Minimalist downtempo crescent",
    imageUrl: "https://images.unsplash.com/photo-1532798369041-b33eb576ef16?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Sleepwake Flow",
    subtitle: "Fluid textures twilight state",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
  }
]

const MusicCard = ({ item }) => (
  <TouchableOpacity
    className="w-[48%] rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08]"
    activeOpacity={0.8}
  >
    {/* Image with gradient overlay */}
    <View className="w-full aspect-square relative">
      <Image
        source={{ uri: item.imageUrl }}
        className="w-full h-full"
        contentFit="cover"
      />
      {/* Gradient scrim */}
      <View className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Play button — bottom right of image */}
      <View className="absolute bottom-2.5 right-2.5">
        <View className="w-8 h-8 rounded-full bg-white/90 items-center justify-center">
          <Play color="#000" size={12} fill="#000" />
        </View>
      </View>
    </View>

    {/* Track info */}
    <View className="px-3 pt-2.5 pb-3 gap-1">
      <Text
        className="text-white text-sm font-bold tracking-tight"
        numberOfLines={1}
      >
        {item.title}
      </Text>
      <Text
        className="text-white/40 text-xs leading-relaxed"
        numberOfLines={1}
      >
        {item.subtitle}
      </Text>
    </View>
  </TouchableOpacity>
)

export const RecentlyPlayedMusics = () => {
  return (
    <View className="w-full">
      <FlatList
        data={MusicList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperClassName="justify-between"
        contentContainerClassName="px-4 pb-4 gap-3"

        ListHeaderComponent={
          <View className="flex-row items-center justify-between mb-1 pt-1">
            <Text className="text-white text-[17px] font-extrabold tracking-tight">
              Recently Played
            </Text>
            <Text className="text-white/35 text-[11px] font-semibold tracking-widest uppercase">
              See all
            </Text>
          </View>
        }
        renderItem={({ item }) => <MusicCard item={item} />}
      />
    </View>
  )
}
