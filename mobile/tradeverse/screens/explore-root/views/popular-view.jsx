import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PostCard from '../_components/post-card'
import PostLink from '../../../components/links/post-link'

export default function PopularView({ data }) {
  return (
    <ScrollView>
      {data.map((post, index) => (
        <PostLink key={index} post={post}>
          <PostCard key={index} post={post} />
        </PostLink>
      ))}
    </ScrollView>
  )
}
