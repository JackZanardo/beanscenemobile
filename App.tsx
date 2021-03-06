import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Navigation} from "./navigation/navigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
          <Navigation/>
          <StatusBar style="auto" />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
