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
        headerTintColor: 'white',
        headerBackTitleStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: COLORS.primary500,
        },
      }}
    />
  )
}
