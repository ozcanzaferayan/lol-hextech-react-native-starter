import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontProvider from './FontProvider';

const Providers = ({ children }) => {
  return <FontProvider>{children}</FontProvider>;
};

export default Providers;

const styles = StyleSheet.create({});
