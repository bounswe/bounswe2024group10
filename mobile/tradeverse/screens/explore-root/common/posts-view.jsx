import React from 'react'
import { View } from 'react-native'
import Loader from './loader'
import PostCard from '../../../components/cards/post-card'

export default function PostsView({ data, loading }) {
  if (loading) return <Loader />

  return (
    <View>
      {data.map((p) => (
        <PostCard
          key={p.id}
          post={{
            ...p,
            author: {
              ...p.author,
              username: p.createdBy,
            },
          }}
        />
      ))}
    </View>
  )
}
