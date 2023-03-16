import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Reference = () => {
  return (
    <Image
      source={require('@assets/app/ui/reference.png')}
      style={styles.image}
    />
  );
};

export default Reference;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    resizeMode: 'contain',

    width: '100%',
    height: '100%',
    opacity: 0.8,
    zIndex: -1,
  },
});
