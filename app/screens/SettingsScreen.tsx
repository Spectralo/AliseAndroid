import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();
  let theme = "hey";
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.jumpTo("screens/HomeScreen");
          }}
        />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <View
        style={{
          marginTop: 20,
          alignItems: "start",
          marginHorizontal: 20,
        }}
      >
        <Text variant="titleLarge">Token : {test}</Text>
      </View>
    </View>
  );
}
