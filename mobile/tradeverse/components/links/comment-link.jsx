import React, { useMemo } from 'react'
import { Pressable } from 'react-native'
import paths from '../../config/screen-paths'
import { router, usePathname } from 'expo-router'

export default function CommentLink({ children, post, disabled = false }) {
  const pathName = usePathname()
  const target = useMemo(() => {
    const screen = pathName.split('/')[1]
    let result = ''
    switch (screen) {
      case 'home':
        result = paths.HOME.POST_DETAIL
        break
      case 'explore':
        result = paths.EXPLORE.POST_DETAIL
        break
      case 'portfolio':
        result = paths.PORTFOLIO.POST_DETAIL
        break
      case 'account':
        result = paths.ACCOUNT.POST_DETAIL
        break
      default:
        result = paths.EXPLORE.POST_DETAIL
    }
    return result
  }, [pathName])

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
