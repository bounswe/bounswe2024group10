import React, { useMemo } from 'react'
import { router, usePathname } from 'expo-router'
import { Pressable } from 'react-native'
import paths from '../../config/screen-paths'

export default function TagLink({ children, tag = '' }) {
  const pathName = usePathname()
  const target = useMemo(() => {
    const screen = pathName.split('/')[1]
    let result = ''
    switch (screen) {
      case 'home':
        result = paths.HOME.TAG_DETAIL
        break
      case 'explore':
        result = paths.EXPLORE.TAG_DETAIL
        break
      case 'portfolio':
        result = paths.PORTFOLIO.TAG_DETAIL
        break
      case 'account':
        result = paths.ACCOUNT.TAG_DETAIL
        break
      default:
        result = paths.EXPLORE.TAG_DETAIL
    }
    return result
  }, [pathName])
  return (
    <Pressable
      style={{
        transform: [{ translateY: 2 }],
      }}
      onPress={() => {
        router.push(`${target}?tag=${tag}`)
      }}
    >
      {children}
    </Pressable>
  )
}
