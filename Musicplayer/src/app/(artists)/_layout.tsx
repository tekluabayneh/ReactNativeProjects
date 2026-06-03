
import { Stack } from 'expo-router';


export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="chat-settings"
        options={{
          title: "Settings",
          // This forces the slide-up on open, and slide-down on back/close
          animation: 'slide_from_bottom',
          animationDuration: 600,
          // Optional: Makes it look like a futuristic native card modal on iOS
          presentation: 'modal'
        }}

      />
    </Stack>
  );
}
