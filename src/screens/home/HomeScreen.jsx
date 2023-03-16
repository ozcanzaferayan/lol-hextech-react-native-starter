import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '@components/Text';
import Title from '@components/Title';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>Welcome to Wild Rift</Title>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000066',
  },
  title: {
    fontSize: 48,
  },
});
