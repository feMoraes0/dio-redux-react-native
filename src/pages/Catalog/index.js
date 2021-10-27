import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Catalog = () => (
  <View style={styles.container}>
    <Text>Catalog</Text>
    <StatusBar />
  </View>
);

export default {
  name: 'Catalog',
  component: Catalog,
};
