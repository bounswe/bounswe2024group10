import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import paths from '../../../config/screen-paths'
import { COLORS, SIZE_CONSTANT, SIZES } from '../../../constants/theme'
import ContentImage from '../../../components/images/content-image'
import { IconInfoCircleFilled } from '@tabler/icons-react-native'

export default function AssetCard({ asset }) {
  console.log('====================================')
  console.log(asset)
  console.log('====================================')
  return (
    <View
      style={{
        borderColor: COLORS.primary50, // Light purple
        borderWidth: 0.5,
        elevation: 5,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,

        // backgroundColor: COLORS.primary100, // Lighter purple
        width: '48%',
        // height: 100,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
        marginBottom: 20,
      }}
    >
      <View
        style={{
          // display: 'flex',

          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: SIZES.xxSmall,
        }}
      >
        <ContentImage
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            borderColor: COLORS.primary50,
            borderWidth: 1,
          }}
          src={asset.asset.imageUrl}
        />
        <View>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontWeight: 'bold',
            }}
          >
            {asset.asset.yahooFinanceSymbol}
          </Text>
          <Text
            style={{
              fontSize: SIZES.xxSmall,
              color: COLORS.primary800,
            }}
          >
            {asset.asset.tradingViewSymbol}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 24,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            marginTop: 'auto',
          }}
        >
          <Pressable
            onPress={() => {
              router.push(
                `${paths.PORTFOLIO.ASSET_DETAIL}?symbol=${asset.asset.tradingViewSymbol}`
              )
            }}
          >
            <IconInfoCircleFilled
              size={20}
              strokeWidth={0}
              style={{
                color: COLORS.primary500,
              }}
            />
          </Pressable>
        </View>
        <View
          style={{
            marginLeft: 'auto',
            flexDirection: 'row',
            alignItems: 'baseline',
            gap: SIZE_CONSTANT * 0.32,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.xxSmall,
              color: '#a1a1a1',
            }}
          >
            Amount:
          </Text>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontWeight: 'bold',
            }}
          >
            {asset.amount}
          </Text>
        </View>
      </View>
    </View>
  )
}
