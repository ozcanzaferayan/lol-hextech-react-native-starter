import React from 'react';
import { Text as RNText, StyleSheet, View } from 'react-native';
import Colors from '@constants/Colors';

const Text = ({ children, style = {} }) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Spiegel-Regular',
    color: Colors.gold[100],
  },
});
