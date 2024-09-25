import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <WebView
      source={{ uri: "https://google.com/" }}
      style={{ flex: 1 }}
      setSupportMultipleWindows={false}
      onShouldStartLoadWithRequest={(request) => {
        console.log(request);
        return true;
      }}
    />
  );
}
