import { View, ImageBackground, Text } from 'react-native';

export const TopMixes = () => {
  return (
    // Added a gap-4 here just to separate your two cards nicely!
    <View className="flex-1 items-center gap-4">

      {/* CARD 1 */}
      {/* Added overflow-hidden right here 👇 */}
      <View className="w-[348px] h-[254px] rounded-md overflow-hidden">
        <ImageBackground
          className="flex-1 content-stretch border border-white/10"
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
          }}
        >
          <View className='w-full h-full bg-linear-to-t from-black'>
            <View className='flex flex-col gap-5 items-start p-5 mt-24 justify-baseline'>
              <Text className='text-[#C4C7C7]'>PERSONALIZED</Text>
              <Text className='text-4xl text-white'>The Night Drive</Text>
              <Text className='text-white'>
                Synthwave, Dark Ambient, and late-night jazz for the road ahead.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* CARD 2 */}
      {/* Added overflow-hidden right here 👇 */}
      <View className="w-[348px] h-[254px] rounded-md overflow-hidden">
        <ImageBackground
          className="flex-1 content-stretch border border-white/10"
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
          }}
        >
          <View className='w-full h-full bg-linear-to-t from-black'>
            <View className='flex flex-col gap-5 items-start p-5 mt-24 justify-baseline'>
              <Text className='text-[#C4C7C7]'>Deep Focus</Text>
              <Text className='text-4xl text-white'>Lofi & Minimal</Text>
              <Text className='text-white'>
                Synthwave, Dark Ambient, and late-night jazz for the road ahead.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

    </View>
  );
};
