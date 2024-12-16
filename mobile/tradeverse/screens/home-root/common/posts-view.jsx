import React from 'react'
import { View } from 'react-native'
import Loader from './loader'
import PostCard from '../../../components/cards/post-card'
import paths from '../../../config/screen-paths'

export default function PostsView({ data, loading }) {
  if (loading) return <Loader />

  return (
    <View>
      {data.map((post) => (
        <PostCard path={paths.HOME.POST_DETAIL} key={post.id} post={post} />
      ))}
    </View>
  )
}
