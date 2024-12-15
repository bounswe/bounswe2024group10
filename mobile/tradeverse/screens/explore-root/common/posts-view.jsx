import React from 'react'
import { View } from 'react-native'
import Loader from './loader'
import PostCard from '../../../components/cards/post-card'

export default function PostsView({ data, loading }) {
  if (loading) return <Loader />

  return (
    <View>
      {data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </View>
  )
}
