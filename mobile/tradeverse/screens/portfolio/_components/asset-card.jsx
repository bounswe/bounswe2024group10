import { router } from 'expo-router'
import React from 'react'
import {
  IconInfoCircleFilled,
  IconTrendingUp,
} from '@tabler/icons-react-native'
import { Pressable, Text, View } from 'react-native'
import paths from '../../../config/screen-paths'
import { COLORS, SIZE_CONSTANT, SIZES } from '../../../constants/theme'
import ContentImage from '../../../components/images/content-image'
import AssetLink from '../../../components/links/asset-link'

export default function AssetCard({ asset }) {
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
        width: '100%',
        // height: 100,
        borderRadius: 10,
        padding: 10,

        justifyContent: 'space-between',
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
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
              {asset.asset.name}
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
            paddingTop: 3,
            marginLeft: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
            gap: SIZE_CONSTANT * 0.32,
          }}
        >
          <IconTrendingUp size={16} color={COLORS.primary600} />
          <Text
            style={{
              fontSize: SIZES.xSmall,
              fontWeight: 'bold',
              color: COLORS.primary700,
            }}
          >
            {(asset.totalCurrentPrice / asset.amount).toFixed(2)}$
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
          <AssetLink asset={asset.asset}>
            <IconInfoCircleFilled
              size={20}
              strokeWidth={0}
              style={{
                color: COLORS.primary500,
              }}
            />
          </AssetLink>
        </View>
        <View
          style={{
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              marginLeft: 'auto',
              flexDirection: 'row',
              alignItems: 'baseline',
              gap: SIZE_CONSTANT * 0.4,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.xxSmall,
                color: '#a1a1a1',
              }}
            >
              You own:
            </Text>
            <Text
              style={{
                fontSize: SIZES.xSmall,
                fontWeight: 'bold',
                color: '#212121',
              }}
            >
              {asset.amount}
            </Text>
          </View>
          <View
            style={{
              marginTop: 4,
              flexDirection: 'row',
              alignItems: 'baseline',
              gap: SIZE_CONSTANT * 0.4,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.xxSmall,
                color: '#a1a1a1',
              }}
            >
              Total Value:
            </Text>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontWeight: 'bold',
              }}
            >
              {asset.totalCurrentPrice.toFixed(1)}$
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
