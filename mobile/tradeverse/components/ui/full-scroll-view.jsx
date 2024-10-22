import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export default function FullScrollView({children,style}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.container,style]}>
        {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
    }
})