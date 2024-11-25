import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PostResult from '../_components/result-cards/post-result'

export default function PostsView({ data }) {
  return (
    <ScrollView>
      {data.map((post, index) => (
        <PostResult key={index} post={post} />
      ))}
    </ScrollView>
  )
}
