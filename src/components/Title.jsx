import React from 'react';
import { Text as RNText, StyleSheet, View } from 'react-native';
import Colors from '@constants/Colors';

const Title = ({ children, style = {} }) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Beaufort-Medium',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: Colors.gold[100],
  },
});
