import React from 'react'
import { View } from 'react-native'
import SkeletonBox from '../ui/skeleton'
import { SIZE_CONSTANT, SIZES } from '../../constants/theme'

export default function PostCardLoading() {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.small,
        paddingTop: SIZE_CONSTANT * 1.2,
        paddingBottom: SIZE_CONSTANT * 1.4,
        borderBottomWidth: 0.5,
        borderBottomColor: '#E5E5E5',
      }}
    >
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          flexDirection: 'row',
        }}
      >
        <SkeletonBox
          height={SIZE_CONSTANT * 2.1}
          width={SIZE_CONSTANT * 2.1}
          borderRadius={SIZE_CONSTANT * 2.1}
        />
        <SkeletonBox height={14} width={64} borderRadius={10} />
      </View>
      <View style={{ marginTop: 8 }}>
        <SkeletonBox height={14} width={96} borderRadius={10} />
      </View>
      <View style={{ marginTop: 8, display: 'flex', gap: 6 }}>
        <SkeletonBox height={14} width="100%" borderRadius={10} />
        <SkeletonBox height={14} width="100%" borderRadius={10} />
        <SkeletonBox height={14} width="80%" borderRadius={10} />
      </View>
      <View
        style={{
          marginTop: 32,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <SkeletonBox height={14} width={24} borderRadius={10} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <SkeletonBox height={14} width={24} borderRadius={10} />
          <SkeletonBox height={14} width={24} borderRadius={10} />
          <SkeletonBox height={14} width={24} borderRadius={10} />
        </View>
      </View>
    </View>
  )
}
