import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store"; // Make sure you import this
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useColorScheme } from "react-native";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Navigation <3
import login from "./login";
import index from "./index";
import webview from "./webview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// NavBar transparent
import * as NavigationBar from "expo-navigation-bar";
NavigationBar.setPositionAsync("absolute");
NavigationBar.setBackgroundColorAsync("#ffffff01");

// Secure Store
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

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Check if "alisetoken" is set in SecureStore
    const checkToken = async () => {
      const token = await getValueFor("alisetoken");
      if (token !== null) {
        setIsLoggedIn(true);
      }
      setLoading(false); // Stop loading once the check is complete
    };

    checkToken();
  }, []);

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  if (loading) {
    // Optionally show a loading screen
    return null; // Or render a loader/spinner
  }

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer independent={true} theme={paperTheme}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <Stack.Navigator>
            {isLoggedIn == null ? (
              <>
                <Stack.Screen
                  name="login"
                  component={login}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="webview"
                  component={webview}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="index"
                  component={index}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
