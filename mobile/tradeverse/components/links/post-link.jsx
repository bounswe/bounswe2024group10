import React from 'react'
import { Pressable } from 'react-native'
import paths from '../../config/screen-paths'
import { router } from 'expo-router'

export default function PostLink({
  children,
  target = paths.EXPLORE.POST_DETAIL,
  post,
}) {
  return (
    <Pressable
      onPress={() => {
        router.push(`${target}?postId=${post?.id}`)
      }}
    >
      {children}
    </Pressable>
  )
}
