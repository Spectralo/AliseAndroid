import { View } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "start",
        marginHorizontal: 50,
      }}
    >
      <Text variant="headlineLarge">Hi 👋</Text>
      <Text variant="headlineMedium">
        To use Alise, you need to login into your ENT Account.
      </Text>
      <Button
        style={{ alignItems: "end", marginTop: 20 }}
        mode="elevated"
        onPress={() => navigation.navigate("webview")}
      >
        Login
      </Button>
    </View>
  );
}
