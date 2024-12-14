import React from 'react'
import { View } from 'react-native'
import PostCardLoading from '../../../components/cards/post-card-loading'

export default function Loader() {
  return (
    <View style={{ marginTop: 24 }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <PostCardLoading key={index} />
      ))}
    </View>
  )
}
