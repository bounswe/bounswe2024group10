import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../../../constants/theme'

export default function NoDataView({ text = 'No data found..' }) {
  return (
    <View
      style={{
        paddingTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: COLORS.graytext,
        }}
      >
        {text}
      </Text>
    </View>
  )
}
