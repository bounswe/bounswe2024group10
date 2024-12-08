import React from 'react'
import { ScrollView } from 'react-native'
import PostCard from '../../../components/cards/post-card'

export default function RecentView({ data }) {
  return (
    <ScrollView>
      {data?.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </ScrollView>
  )
}
