import * as React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation()

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {navigation.jumpTo('screens/HomeScreen')}} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
    </View>
  );
}
