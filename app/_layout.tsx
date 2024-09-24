// Material You <3
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';

// Navigation <3
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
const Tab = createMaterialBottomTabNavigator();
import HomeScreen from './screens/HomeScreen.tsx';
import SettingsScreen from './screens/SettingsScreen.tsx';
import login from './login.tsx';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import * as NavigationBar from "expo-navigation-bar";

NavigationBar.setPositionAsync("absolute");
NavigationBar.setBackgroundColorAsync("#ffffff01");


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const isLogIn = false

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider theme={paperTheme}>
      <Tab.Navigator
        initialRouteName="screens/HomeScreen"
      >
        { isLogIn == true ? (
          <>
          <Tab.Screen 
            name="screens/HomeScreen"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
            name="screens/SettingsScreen"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} />
              ),
            }}
          />
          </>
        ) : (
          <>
            <Tab.Screen
              name="login"
              component={login}
              options={{
                tabBarLabel:'Getting Started',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="key" color={color} size={26} />
                )
              }}
            />
          </>
        )}
      </Tab.Navigator>
    </PaperProvider>
  );
}
