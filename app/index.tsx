import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

import * as NavigationBar from "expo-navigation-bar";

import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
const Tab = createMaterialBottomTabNavigator();
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

//Secure Store
import * as SecureStore from "expo-secure-store";

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    return null;
  }
}

export default function Index() {
  const userToken = getValueFor("alisetoken");
  const userSite = getValueFor("alisesite");

  const theme = useTheme();

  return (
    <Tab.Navigator initialRouteName="screens/HomeScreen">
      <Tab.Screen
        name="screens/HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="screens/SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
