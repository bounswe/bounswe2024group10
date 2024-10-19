import { View, StyleSheet } from 'react-native';
import React from 'react';
import { SIZE_CONSTANT } from '../../constants/theme';

export default function PaddedContainer({ style, children }) {
  return <View style={[styles.container,style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: SIZE_CONSTANT * 2,
  }
});
