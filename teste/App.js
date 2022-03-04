import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Watch MarketPlace!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#ffffff"
  }
});
