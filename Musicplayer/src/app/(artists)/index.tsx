import { View } from "react-native";
import { NavigationBar } from "@/components/ui/NavigationBar";
import ArtistVewingPlayScreen from "@/components/ui/CurrentlyVewingArtists";
import ArtistsList from "@/components/ui/ArsistList";

// TODO 
// musing playing functinlity must be using context as it allow us flexblity when sharing props
export default function ArtistScreen({ pause, setPause }) {
  return (
    <>
      <View className="flex-1 mt-6">
        <NavigationBar />
        <ArtistVewingPlayScreen pause={pause} setPause={setPause} />
        <ArtistsList />
      </View>
    </>
  );
}

