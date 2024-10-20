import React from 'react';
import {  SafeAreaView, StyleSheet } from 'react-native';
import PaddedContainer from './padded-container';
import { COLORS } from '../../constants/theme';

export default function GlobalScreen({ children, style, paddingTop=28, containerStyle }) {
  return (
    <SafeAreaView style={[styles.container,style]}>
      <PaddedContainer style={[{paddingTop},containerStyle]}>{children}</PaddedContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  }
});
