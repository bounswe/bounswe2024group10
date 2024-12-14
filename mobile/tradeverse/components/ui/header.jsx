import { Stack } from 'expo-router'
import React from 'react'
import { COLORS } from '../../constants/theme'

export default function Header({
  title,
  backgroundColor = COLORS.primary500,
  headerTintColor = 'white',
  headerTintStyle,
  headerBackTitleStyle,
  headerStyle,
}) {
  return (
    <Stack.Screen
      options={{
        headerBackTitleVisible: false,
        headerTitle: title,
        headerTitleStyle: {
          color: 'white',
          ...headerTintStyle,
        },
        headerTintColor,
        headerBackTitleStyle: {
          color: 'white',
          ...headerBackTitleStyle,
        },
        headerStyle: {
          backgroundColor,
          ...headerStyle,
        },
      }}
    />
  )
}
