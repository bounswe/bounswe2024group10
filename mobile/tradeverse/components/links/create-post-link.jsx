import { router } from 'expo-router'
import { Pressable } from 'react-native'
import React from 'react'
import paths from '../../config/screen-paths'

export default function CreatePostLink({ subforum, children }) {
  return (
    <Pressable
      onPress={() => {
        if (subforum) {
          router.push(
            `${paths.CREATE.ADD_POST}?subforumTitle=${subforum.title}&subforumId=${subforum.id}`
          )
        }
      }}
    >
      {children}
    </Pressable>
  )
}
