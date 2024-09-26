import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import * as SecureStore from "expo-secure-store";

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

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://google.com/" }}
        style={{ flex: 1 }}
        setSupportMultipleWindows={false}
        onShouldStartLoadWithRequest={(request) => {
          if (request["url"].includes("token")) {
            const urlObj = new URL(request["url"]);
            save("alisetoken", urlObj.searchParams.get("token"));
            save("alisesite", urlObj.searchParams.get("site"));
            return true;
          } else {
            return true;
          }
        }}
      />
    </SafeAreaView>
  );
}
