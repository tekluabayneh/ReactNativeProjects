import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
const ContextMenu = createContext<any>(null);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [nextSong, SetnextSong] = useState(1);
  const [Songs, SetSongs] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentPlayingMusic, SetcurrentPlayingMusic] = useState("")
  const [CurrentsongBackground, SetCurrentsongBackground] = useState([])
  const player = useAudioPlayer(currentPlayingMusic)
  const [currentTime, setCurrentTime] = useState({
    current: 0,
    duration: 0,
  });

  const status = useAudioPlayerStatus(player);
  useEffect(() => {
    if (!status?.isLoaded) return;

    const current = Math.floor(status.currentTime);
    const duration = Math.floor(status.duration);

    setCurrentTime({
      current,
      duration,
    });

  }, [status?.currentTime, status?.duration]);

  useEffect(() => {
    if (currentPlayingMusic && isPlaying) {
      player.play()
    }
  }, [currentPlayingMusic])


  const FetchMusic = async () => {
    useEffect(() => {
      const fetchSongs = async () => {
        try {
          const res = await axios.get('http://localhost:8081/songs.json');
          SetSongs(res.data);
        } catch (error) {
          console.log('Fetch error:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchSongs();
    }, []);

  }

  FetchMusic();

  const Localsongs: Record<number, string | any> = {
    1: require("../../../assets/music/1.mp3"),
    2: require("../../../assets/music/2.mp3"),
    3: require("../../../assets/music/3.mp3"),
    4: require("../../../assets/music/4.mp3"),
    5: require("../../../assets/music/5.mp3"),
    6: require("../../../assets/music/6.mp3"),
    7: require("../../../assets/music/7.mp3"),
    8: require("../../../assets/music/8.mp3"),
    9: require("../../../assets/music/9.mp3"),
    10: require("../../../assets/music/10.mp3"),
    11: require("../../../assets/music/11.mp3"),
  };



  const shooseMusicToPlay = (id: number) => {
    let song = Localsongs[id + 1]
    SetCurrentsongBackground(Songs[id]?.artwork)
    SetcurrentPlayingMusic(song)
    setIsPlaying(false)
  }

  // console.log("sing song list", Currentsong)
  const PlayMusic = () => {
    player.play()
    setIsPlaying(true);
  };

  const PauseMusic = () => {
    player.pause()
    setIsPlaying(false);
  };


  // check if there is song to play 
  //
  const Next = () => {
    setIsPlaying(false);
    if (nextSong > 11) {
      console.log("no next music found")
      return
    }

    SetCurrentsongBackground(Songs[nextSong]?.artwork)
    SetnextSong((prev => prev + 1))
    const song = Localsongs[nextSong];
    SetcurrentPlayingMusic(song)
    setIsPlaying(true);
    player.play()
    console.log("current playing music", currentPlayingMusic)
    console.log("Next track");
  };

  const Previous = () => {
    if (nextSong < 1) {
      console.log("no previose music found")
      return
    }

    SetCurrentsongBackground(Songs[nextSong]?.artwork)
    SetnextSong((prev => prev - 1))
    setIsPlaying(false);
    const song = Localsongs[nextSong];
    SetcurrentPlayingMusic(song)
    setIsPlaying(true);
    player.play()
    console.log("Previous track");
    console.log("current playing music", currentPlayingMusic)
  };

  // 3. Pass everything into the Provider's value object
  return (
    <ContextMenu.Provider value={{ currentTime, isPlaying, shooseMusicToPlay, CurrentsongBackground, PauseMusic, PlayMusic, Next, Previous, Songs, SetSongs, Loading, showPlayer, setShowPlayer }}>
      {children}
    </ContextMenu.Provider>
  );
};



export const useMusic = () => {
  const context = useContext(ContextMenu);

  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }

  return context;
};
