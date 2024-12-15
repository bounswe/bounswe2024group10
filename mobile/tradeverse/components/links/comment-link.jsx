import React from 'react'
import { Pressable } from 'react-native'
import paths from '../../config/screen-paths'
import { router } from 'expo-router'

export default function CommentLink({
  children,
  target = paths.EXPLORE.POST_DETAIL,
  post,
  disabled = false,
}) {
  return (
    <Pressable
      onPress={() => {
        if (disabled) return
        router.push(`${target}?postId=${post?.id}`)
      }}
    >
      {children}
    </Pressable>
  )
}
