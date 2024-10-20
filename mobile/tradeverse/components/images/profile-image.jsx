import React from 'react';
import { Image, StyleSheet } from 'react-native';
import IMAGES from '../../constants/images';

export default function ProfileImage({ src='', style }) {
  return <Image source={src ? {uri:src} : IMAGES.NO_PROFILE_IMG} style={[styles.image, style]} />;
}

const styles = StyleSheet.create({
  image: {}
});
