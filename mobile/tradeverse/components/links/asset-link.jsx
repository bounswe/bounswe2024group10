import React, { useMemo } from 'react'
import { Pressable } from 'react-native'
import paths from '../../config/screen-paths'
import { router, usePathname } from 'expo-router'

export default function AssetLink({ children, asset }) {
  const pathName = usePathname()
  const target = useMemo(() => {
    const screen = pathName.split('/')[1]
    let result = ''
    switch (screen) {
      case 'home':
        result = paths.HOME.ASSET_DETAIL
        break
      case 'explore':
        result = paths.EXPLORE.ASSET_DETAIL
        break
      case 'portfolio':
        result = paths.PORTFOLIO.ASSET_DETAIL
        break
      case 'account':
        result = paths.ACCOUNT.ASSET_DETAIL
        break
      default:
        result = paths.EXPLORE.ASSET_DETAIL
    }
    return result
  }, [pathName])
  return (
    <Pressable
      onPress={() => {
        router.push(
          `${target}?assetId=${asset?.id}&symbol=${asset?.tradingViewSymbol}&tradingViewSymbol=${asset?.tradingViewSymbol}&name=${asset?.name}&yahooFinanceSymbol=${asset?.yahooFinanceSymbol}`
        )
      }}
    >
      {children}
    </Pressable>
  )
}
