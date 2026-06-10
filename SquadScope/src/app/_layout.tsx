import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { FireExtinguisherIcon, Flame, Search, BarChart2, Users } from "lucide-react-native"
import { Colors } from '@/constants/theme';
import "../../global.css"

export default function TabLayout() {
  const scheme = useColorScheme();
  const colorScheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NativeTabs
        backgroundColor={colors.background}
        indicatorColor={colors.backgroundElement}
        labelStyle={{ selected: { color: colors.text } }}>


        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Live</NativeTabs.Trigger.Label>
          {/* <NativeTabs.Trigger.Icon */}
          {/*   src={require('@/assets/images/tabIcons/home.png')} */}
          {/*   renderingMode="template" */}
          {/* /> */}
          <Flame size={24} color="#999077" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="mystatus">
          <NativeTabs.Trigger.Label>My Status</NativeTabs.Trigger.Label>
          <Flame size={24} color="#999077" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="teammates">
          <NativeTabs.Trigger.Label>teammates</NativeTabs.Trigger.Label>
          <Flame size={24} color="#999077" />
        </NativeTabs.Trigger>



        <NativeTabs.Trigger name="search">
          <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
          <Flame size={24} color="#999077" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider >
  );
}
