import { View, Text } from 'react-native'
import React from 'react'
import PostCard from '../_components/post-card'

export default function FollowedPeopleView({ data }) {
  return (
    <View>
      {data.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </View>
  )
}
