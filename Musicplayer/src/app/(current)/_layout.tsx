import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="current"
        options={{
          title: "Settings",
          animation: 'slide_from_bottom',
          animationDuration: 6000,
        }}
      />
    </Stack>
  );
}
