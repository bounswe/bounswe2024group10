import React, { useMemo } from 'react'
import { Pressable } from 'react-native'
import paths from '../../config/screen-paths'
import { router, usePathname } from 'expo-router'

export default function SubforumLink({ children, subForum }) {
  const pathName = usePathname()
  const target = useMemo(() => {
    const screen = pathName.split('/')[1]
    let result = ''
    switch (screen) {
      case 'home':
        result = paths.HOME.SUBFORUM_DETAIL
        break
      case 'explore':
        result = paths.EXPLORE.SUBFORUM_DETAIL
        break
      case 'portfolio':
        result = paths.PORTFOLIO.SUBFORUM_DETAIL
        break
      case 'account':
        result = paths.ACCOUNT.SUBFORUM_DETAIL
        break
      default:
        result = paths.EXPLORE.SUBFORUM_DETAIL
    }
    return result
  }, [pathName])
  return (
    <Pressable
      onPress={() => {
        router.push(
          `${target}?subforumId=${subForum?.id}&subforumTitle=${subForum?.title}`
        )
      }}
    >
      {children}
    </Pressable>
  )
}
