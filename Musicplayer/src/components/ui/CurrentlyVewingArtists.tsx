import { Pause, Play, Heart, MoreHorizontal } from "lucide-react-native";
import { ImageBackground, Text, TouchableOpacity, View, Animated, Easing, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { useMusic } from "../context/Music";
function WaveBar({ delay }) {

  const anim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 1,
          duration: 400 + Math.random() * 400,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
          delay,
        }),
        Animated.timing(anim, {
          toValue: 0.3,
          duration: 400 + Math.random() * 400,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: 3,
        height: 20 + Math.random() * 14,
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.55)",
        transform: [{ scaleY: anim }],
      }}
    />
  );
}

export default function ArtistViewingPlayScreen() {
  const { isPlaying, PlayMusic, PauseMusic } = useMusic()
  const BARS = 32;

  return (
    <View style={{ width: "100%", height: 480, borderRadius: 20, overflow: "hidden" }}>

      <ImageBackground
        style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIGapB1JTZTwiMWt1VLoavMf1_uUV3wBqtAv1-jDQQ8kK5WimICBoczn6Zytju4HeSwxPPIUTKM34xAZXbRFKQ9TzTfSIP-cyR3guuC9IbNcoer79ho6QiGm8yZqOzyPjrDal3vaKdhacx5auL13ktc6I20AydeXvX3X10g9_oYM83Q_nmbZocUzqyCMbauxL7wIWcusIgmx4nsRZrQ6lPCCfrPEpV7wjTbjBh3mBc5OtxFupris_odkzZ3sKyv27Ai44ZnjGzneoK",
        }}
        imageStyle={{ resizeMode: "cover" }}
      >
        {/* Top row: badges */}
        <View
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            right: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              backgroundColor: "rgba(255,255,255,0.12)",
              borderWidth: 0.5,
              borderColor: "rgba(255,255,255,0.25)",
              borderRadius: 100,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
          >
            <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#4ade80", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "#fff", fontSize: 9, fontWeight: "800" }}>✓</Text>
            </View>
            <Text style={{ color: "#fff", fontSize: 11, fontWeight: "700", letterSpacing: 0.5, textTransform: "uppercase" }}>
              Verified Artist
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderWidth: 0.5,
              borderColor: "rgba(255,255,255,0.2)",
              borderRadius: 100,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
          >
            <Text style={{ color: "rgba(255,255,255,0.85)", fontSize: 11, fontWeight: "500" }}>🎵 Now Playing</Text>
          </View>
        </View>

        {/* Gradient */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.15)", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.96)"]}
          locations={[0, 0.4, 0.7, 1]}
          style={{ position: "absolute", inset: 0, top: 0, left: 0, right: 0, bottom: 0 }}
        />

        {/* Waveform */}
        <View
          style={{
            position: "absolute",
            bottom: 164,
            left: 20,
            right: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            opacity: isPlaying ? 0.35 : 0.7,
          }}
        >
          {Array.from({ length: BARS }).map((_, i) => (
            <WaveBar key={i} delay={(i / BARS) * 800} />
          ))}
        </View>

        {/* Bottom content */}
        <View style={{ padding: 20, paddingBottom: 28, gap: 14, zIndex: 10 }}>
          {/* Artist name & stats */}
          <View>
            <Text style={{ fontSize: 44, fontWeight: "800", color: "#fff", letterSpacing: -1.5, lineHeight: 46 }}>
              Lumina
            </Text>
            <View style={{ flexDirection: "row", alignItems: "baseline", gap: 6, marginTop: 4 }}>
              <Text style={{ fontSize: 22, fontWeight: "700", color: "#fff" }}>2,482,109</Text>
              <Text style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: "400" }}>monthly listeners</Text>
            </View>
          </View>

          {/* Progress bar */}
          <View>
            <View style={{ height: 2, backgroundColor: "rgba(255,255,255,0.12)", borderRadius: 2, overflow: "hidden" }}>
              <View style={{ width: "38%", height: "100%", backgroundColor: "rgba(255,255,255,0.75)", borderRadius: 2 }} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
              <Text style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>1:24</Text>
              <Text style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>3:45</Text>
            </View>
          </View>

          {/* Controls */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            {/* Play/Pause */}
            <TouchableOpacity
              onPress={() => PauseMusic()}
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isPlaying ? (
                <Play color="#000" size={20} fill="#000" />
              ) : (
                <Pause color="#000" size={20} fill="#000" />
              )}
            </TouchableOpacity>

            {/* Follow */}
            <TouchableOpacity
              style={{
                flex: 1,
                height: 46,
                borderRadius: 100,
                backgroundColor: "rgba(255,255,255,0.12)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.3)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15, fontWeight: "700", letterSpacing: 0.3 }}>Follow</Text>
            </TouchableOpacity>

            {/* Heart */}
            <TouchableOpacity
              style={{
                width: 46,
                height: 46,
                borderRadius: 23,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.2)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Heart color="rgba(255,255,255,0.75)" size={18} />
            </TouchableOpacity>

            {/* More */}
            <TouchableOpacity
              style={{
                width: 46,
                height: 46,
                borderRadius: 23,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.2)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MoreHorizontal color="rgba(255,255,255,0.75)" size={18} />
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
}
