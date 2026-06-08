import { View, Text, FlatList, Image, TouchableOpacity, StatusBar, Pressable, Alert } from 'react-native';
import { CloudSnow, MoreHorizontal } from 'lucide-react-native';
import { Link } from 'expo-router';
import { useMusic } from '../context/Music';



const formatDuration = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const MusicPlayList = ({ item, index }) => {
  const { setShowPlayer, PlayMusic, shooseMusicToPlay } = useMusic()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='flex-row items-center mx-4 my-1 px-4 py-3 rounded-2xl bg-white/5 border border-white/[0.07]'

    >
      {/* Track Number */}
      <Text className='w-6 text-white/25 text-xs font-semibold text-center mr-3'>
        {String(index + 1).padStart(2, '0')}
      </Text>
      <TouchableOpacity onPress={() => {
        setShowPlayer()
        shooseMusicToPlay(index)
      }
      }
      >
        {/* Album Art */}
        <Image
          source={{ uri: item.artwork }}
          className='w-13 h-13 rounded-xl mr-4'
        />

      </TouchableOpacity>
      {/* Song Info */}
      <View className='flex-1 mr-3'>
        <Text numberOfLines={1} className='text-white text-[15px] font-semibold tracking-wide mb-1'>
          {item.title_short}
        </Text>
        <Text numberOfLines={1} className='text-white/40 text-xs tracking-wide'>
          {item.artist.name}
        </Text>
      </View>

      {/* Duration + dots */}
      <View className='items-end gap-1'>
        <Text className='text-white/50 text-xs font-medium tracking-widest'>
          {formatDuration(item.duration)}
        </Text>
        <MoreHorizontal color="#fff" size={20} />
      </View>
    </TouchableOpacity>

  );
};

const ListHeader = () => (
  <View className='px-5 pt-6 pb-4'>
    <Text className='text-orange-400 text-[11px] font-bold tracking-[2px] uppercase mb-1.5'>
      Trending Now
    </Text>
    <View className='flex-row items-end justify-between'>
      <Text className='text-white text-3xl font-extrabold tracking-tight'>
        Top Tracks
      </Text>
      <TouchableOpacity>
        <Text className='text-orange-400 text-[13px] font-semibold tracking-wide pb-0.5'>
          See All →
        </Text>
      </TouchableOpacity>
    </View>
    <View className='h-px bg-white/[0.07] mt-4' />
  </View>
);

export default function ArtistsList() {
  const { Songs, Loading } = useMusic()
  return (
    <View className='flex-1 bg-[#0D0D0F]'>
      <StatusBar barStyle='light-content' />
      {Loading ? (
        <View className='flex-1 items-center justify-center'>
          <Text className='text-white/30 text-sm'>Loading tracks…</Text>
        </View>
      ) : (
        <FlatList
          data={Songs}
          keyExtractor={(item) => String(item.id)}
          contentContainerClassName='pb-10'
          ListHeaderComponent={<ListHeader />}
          renderItem={({ item, index }) => (
            <MusicPlayList item={item} index={index} />
          )}
        />
      )}
    </View>

  );
}
