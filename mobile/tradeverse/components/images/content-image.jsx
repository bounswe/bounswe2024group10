import React from 'react';
import { Image, StyleSheet } from 'react-native';
import IMAGES from '../../constants/images';

export default function ContentImage({ src, style }) {
  return (
    <Image
      source={src ? { uri: src } : IMAGES.NO_CONTENT_IMG}
      
      style={[styles.image, style]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});
