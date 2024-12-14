import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { COLORS } from '../../../constants/theme'

export default function Loader() {
  return (
    <View style={{ marginTop: 24 }}>
      <ActivityIndicator size="small" color={COLORS.primary500} />
    </View>
  )
}
