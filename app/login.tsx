import { View } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";

export default function Index() {
  const theme = useTheme();
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
        onPress={() => console.log("Pressed")}
      >
        Login
      </Button>
    </View>
  );
}
