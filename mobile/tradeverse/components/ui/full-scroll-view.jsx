import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

export default function FullScrollView({ children, style, ...props }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, style]}
      {...props}
    >
      {children}
      <View style={{ height: 200 }}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
})
