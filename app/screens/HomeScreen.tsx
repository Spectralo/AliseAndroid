import * as React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';


export default function HomeScreen() {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Alise" />
      </Appbar.Header>
    </View>
  );
}
