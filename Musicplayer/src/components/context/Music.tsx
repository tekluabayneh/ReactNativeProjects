import { createContext, useContext, useState } from "react";

const ContextMenu = createContext<any>(null);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const PlayMusic = () => {
    setIsPlaying(true);
    console.log("Playing...");
  };

  const PauseMusic = () => {
    setIsPlaying(false);
    console.log("Paused.");
  };

  const Next = () => {
    console.log("Next track");
  };

  const Previous = () => {
    console.log("Previous track");
  };

  // 3. Pass everything into the Provider's value object
  return (
    <ContextMenu.Provider value={{ isPlaying, PauseMusic, PlayMusic, Next, Previous }}>
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
