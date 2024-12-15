import { Stack } from 'expo-router'
import React from 'react'
import { COLORS } from '../../constants/theme'

export default function Header({ title }) {
  return (
    <Stack.Screen
      options={{
        headerBackTitleVisible: false,
        headerTitle: title,

        headerTitleStyle: {
          color: 'white',
        },
        headerBackVisible: true,
        headerBackButtonMenuEnabled: true,
        headerBackTitleStyle: {
          color: 'white',
          fontSize: 16,
        },
        headerStyle: {
          backgroundColor: COLORS.primary500,
        },
      }}
    />
  )
}
