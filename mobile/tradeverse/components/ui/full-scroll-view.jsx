import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export default function FullScrollView({ children, style, ...props }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, style]}
      {...props}
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
})
