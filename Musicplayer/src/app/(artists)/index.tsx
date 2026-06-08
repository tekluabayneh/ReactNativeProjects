import { Modal, View } from "react-native";
import { NavigationBar } from "@/components/ui/NavigationBar";
import ArtistVewingPlayScreen from "@/components/ui/CurrentlyVewingArtists";
import ArtistsList from "@/components/ui/ArsistList";
import ArtistScreen2 from "./CurrentlyPlayingScreen";
import { useMusic } from "@/components/context/Music";

// TODO 
// musing playing functinlity must be using context as it allow us flexblity when sharing props
export default function ArtistScreen() {
  const { showPlayer, setShowPlayer } = useMusic()
  return (
    <>
      <View className="flex-1 mt-6">
        <NavigationBar />
        <ArtistVewingPlayScreen />
        <ArtistsList />

        <Modal
          visible={showPlayer}
          animationType="slide"        // ← this gives you the smooth bottom-to-top animation
          presentationStyle="fullScreen"
          onRequestClose={() => setShowPlayer(false)}
        >
          <ArtistScreen2 onClose={() => setShowPlayer(false)} />
        </Modal>
      </View>
    </>
  );
}

