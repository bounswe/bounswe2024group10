import React from 'react'
import { Pressable } from 'react-native'
import paths from '../../config/screen-paths'
import { router } from 'expo-router'

export default function AssetLink({
  children,
  target = paths.PORTFOLIO.ASSET_DETAIL,
  asset,
}) {
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
