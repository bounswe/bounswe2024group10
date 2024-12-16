import { Stack } from 'expo-router'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { Alert, Pressable, Text } from 'react-native'

export default function Header({
  title = 'Header',
  titleColor = 'white',
  bgColor = COLORS.primary500,
  headerBackTitleVisible = false,
  headerTintColor = 'white',
  headerBackTitle = 'Back',
  headerRight = null,
}) {
  return (
    <Stack.Screen
      options={{
        headerBackTitleVisible,
        headerBackTitle,
        headerRight,
        headerTitle: title,
        headerTitleStyle: {
          color: titleColor,
        },
        headerTintColor,
        headerBackTitleStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: bgColor,
        },
      }}
    />
  )
}
