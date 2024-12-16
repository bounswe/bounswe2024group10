import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ProfileImage from '../images/profile-image'
import { IconArrowBack } from '@tabler/icons-react-native'
import { COLORS, SIZES } from '../../constants/theme'
import PostContent from './post-content'

export default function CommentCard({ item, scale }) {
  console.log('COMMENT CONTENT')
  console.log(item.content)

  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 4,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <ProfileImage
            src={item.image}
            style={{
              width: 20,
              height: 20,
              borderRadius: 12,
            }}
          />
          <Text
            style={{
              fontSize: SIZES.xSmall,
              color: COLORS.primary950,
            }}
          >
            {item.createdBy}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            display: item.replies.length > 0 ? 'flex' : 'none',
          }}
        >
          <IconArrowBack size={20} color={COLORS.primary500} />
          <Text
            style={{
              fontSize: 14,
              color: COLORS.primary950,
            }}
          >
            {item?.replies?.length}
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 10,
        }}
      >
        <PostContent content={item.content} scale={scale} />
      </View>
    </TouchableOpacity>
  )
}
