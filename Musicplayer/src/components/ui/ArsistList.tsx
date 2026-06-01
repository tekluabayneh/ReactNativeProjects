import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from "axios"
import { FileJson, MoreHorizontal } from 'lucide-react-native';

export default function ArtistsList() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    const FetchSongs = async () => {
      try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const targetUrl = encodeURIComponent("https://api.deezer.com/search?q=eminem");
        const res = await axios.get(`${proxyUrl}${targetUrl}`)
        const parsedData = JSON.parse(res.data.contents)
        setSongs(parsedData.data)
        console.log(parsedData.data)
      } catch (error) {
        console.log("error", error)
      }
    }
    FetchSongs()
  }, [])


  const MusicPlayList = ({ item }) => {
    return (
      <>
        <View className='flex gap-5 items-center justify-between'>
          <View className='rounded-md flex-row items-center justify-between '>
            <Text>{item.id}</Text>
            <Text>{item.picture_small}</Text>
            <View className='flex-col gap-1'>
              <Text>{item.title}</Text>
              <Text>{item.title_short}</Text>
            </View>
            <Text> {item.duration} </Text>
            <MoreHorizontal color="#fff" size={24} />
          </View>
        </View>
      </>
    )
  }

  return (
    <View>
      <Text className='text-white'>Top Trackers</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperClassName="justify-between"
        contentContainerClassName="px-4 pb-4 gap-3"
        ListHeaderComponent={
          <View className='w-full flex-row items-center justify-around'>
            <Text className='text-4xl'>Top Trackers</Text>
            <Text>See All</Text>
          </View>

        }

        renderItem={({ item }) => <MusicPlayList item={item} />}

      />
    </View >
  );
}

