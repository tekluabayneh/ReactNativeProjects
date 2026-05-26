import { FlatList, Image, Text, View } from "react-native"
const MusicList =
  [
    {
      "id": "1",
      "title": "Midnight Chill",
      "subtitle": "Deep lo-fi beats for coding",
      "imageUrl": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop"
    },
    {
      "id": "2",
      "title": "Dreamy Echoes",
      "subtitle": "Ambient synth waves resonance",
      "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop"
    },
    {
      "id": "3",
      "title": "Lunar Vibes",
      "subtitle": "Minimalist downtempo crescent",
      "imageUrl": "https://images.unsplash.com/photo-1532798369041-b33eb576ef16?q=80&w=400&auto=format&fit=crop"
    },
    {
      "id": "4",
      "title": "Sleepwake Flow",
      "subtitle": "Fluid textures twilight state",
      "imageUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
    }
  ]

export const RecentlyPlayedMusics = (props: {}) => {
  return (

    <View className="w-full">
      <FlatList
        data={MusicList}
        extraData={(item) => item.id}
        numColumns={2}
        columnWrapperClassName="justify-between"
        contentContainerClassName="p-2 gap-2"
        renderItem={({ item }) => (
          <View className="w-[48%] flex-col items-center p-2  gap-4">
            <Image
              source={{ uri: item.imageUrl }}
              className="w-full h-44 rounded-lg bg-white/10 border border-white/10"
              resizeMode="cover"
            />
            <View className="flex-col gap-2">
              <Text className="text-white font-bold text-2xl">{item.title}</Text>
              <Text className="text-[#C9C6C5]">{item.subtitle}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}
