import { WebView } from "react-native-webview";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import React from "react";

export default function Index() {
  const navigation = useNavigation()
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView style={{flex:1}}>
    <WebView
      source={{ uri: "https://google.com/" }}
      style={{ flex: 1 }}
      setSupportMultipleWindows={false}
      onShouldStartLoadWithRequest={(request) => {
        if (request["url"].includes("token")) {
          console.log(request.url)
          return true;
        } else {
          return true;
        }
      }}
    />
    </SafeAreaView>
  );
}
