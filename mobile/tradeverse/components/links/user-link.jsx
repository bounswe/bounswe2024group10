import { Pressable } from 'react-native'
import React, { useMemo } from 'react'
import { router, usePathname } from 'expo-router'
import paths from '../../config/screen-paths'

export default function UserLink({ children, user }) {
  const pathName = usePathname()
  const target = useMemo(() => {
    const screen = pathName.split('/')[1]
    let result = ''
    switch (screen) {
      case 'home':
        result = paths.HOME.USER_PROFILE
        break
      case 'explore':
        result = paths.EXPLORE.USER_PROFILE
        break
      case 'portfolio':
        result = paths.PORTFOLIO.USER_PROFILE
        break
      case 'account':
        result = paths.ACCOUNT.USER_PROFILE
        break
      default:
        result = paths.EXPLORE.USER_PROFILE
    }
    return result
  }, [pathName])

  return (
    <Pressable
      onPress={() => {
        router.push(`${target}?username=${user?.username}`)
      }}
    >
      {children}
    </Pressable>
  )
}
