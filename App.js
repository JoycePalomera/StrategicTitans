import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HelloWorld from './Components/HelloWorld';
import UserName from './Components/UserName';
import Counter from './Components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HelloWorld/>
      <UserName/>
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
