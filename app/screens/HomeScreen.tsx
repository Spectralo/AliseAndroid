import * as React from 'react';
import { Text, View } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';


export default function HomeScreen() {
  const theme = useTheme()

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Alise" />
      </Appbar.Header>
    </View>
  );
}
