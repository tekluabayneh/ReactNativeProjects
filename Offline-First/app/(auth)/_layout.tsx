import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect, router, Stack } from 'expo-router';
export default function AuthLayout() {

  const IsuserLoggedIn = AsyncStorage.getItem("userLoggedIn")
  if (!IsuserLoggedIn) {
    // router.replace("/(auth)")
    <Redirect href="/(auth)" />;
  } else {
    // router.replace("/(tabs)")
    <Redirect href="/(tabs)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
