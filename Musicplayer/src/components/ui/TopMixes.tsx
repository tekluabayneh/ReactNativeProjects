import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';

const MixCard = ({ image, tag, title, description }) => (
  <View className="w-[348px] h-[220px] rounded-2xl overflow-hidden">
    <ImageBackground
      className="flex-1"
      source={{ uri: image }}
      resizeMode="cover"
    >
      {/* Gradient overlay */}
      <View className="flex-1 bg-gradient-to-t from-black/95 via-black/40 to-black/5">

        {/* Tag badge — top left */}
        <View className="absolute top-3.5 left-4">
          <View className="bg-white/10 border border-white/15 rounded-full px-2.5 py-1">
            <Text className="text-white/50 text-[10px] font-bold tracking-[1.5px] uppercase">
              {tag}
            </Text>
          </View>
        </View>

        {/* Text + play button — bottom */}
        <View className="absolute bottom-0 left-0 right-0 flex-row items-end justify-between p-4">
          <View className="flex-1 pr-4">
            <Text
              className="text-white text-2xl font-extrabold tracking-tight leading-tight"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-white/50 text-xs mt-1.5 leading-relaxed"
              numberOfLines={2}
            >
              {description}
            </Text>
          </View>

          <TouchableOpacity
            className="w-9 h-9 rounded-full bg-white items-center justify-center shrink-0"
            activeOpacity={0.85}
          >
            <Play color="#000" size={14} fill="#000" />
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  </View>
);

export const TopMixes = () => {
  return (
    <View className="flex-1 items-center gap-3 px-5">

      <View className="w-full flex-row items-center justify-between mb-1">
        <Text className="text-white text-lg font-bold">Top Mixes</Text>
        <Text className="text-white/40 text-xs font-medium tracking-wide uppercase">See all</Text>
      </View>

      <MixCard
        image="https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=500&auto=format&fit=crop&q=60"
        tag="Personalized"
        title="The Night Drive"
        description="Synthwave, Dark Ambient, and late-night jazz for the road ahead."
      />

      <MixCard
        image="https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?w=500&auto=format&fit=crop&q=60"
        tag="Deep Focus"
        title="Lofi & Minimal"
        description="Soft beats and ambient textures to keep you locked in."
      />

    </View>
  );
};
