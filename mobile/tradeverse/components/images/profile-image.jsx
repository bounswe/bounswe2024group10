import React from 'react'
import { Image, StyleSheet } from 'react-native'
import IMAGES from '../../constants/images'
import { getPhotoUrl } from '../../util/get-photo-url'

export default function ProfileImage({
  src = '',
  style,
  deviceReference = false,
}) {
  if (deviceReference) {
    return (
      <Image
        source={src || IMAGES.NO_PROFILE_IMG}
        style={[styles.image, style]}
      />
    )
  }
  return (
    <Image
      source={src ? { uri: getPhotoUrl(src) } : IMAGES.NO_PROFILE_IMG}
      style={[styles.image, style]}
    />
  )
}

const styles = StyleSheet.create({
  image: {},
})
