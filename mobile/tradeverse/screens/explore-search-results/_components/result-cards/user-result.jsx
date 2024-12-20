import { View, Text } from 'react-native'
import React from 'react'
import ProfileImage from '../../../../components/images/profile-image'
import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from '../../../../constants/theme'
import UserLink from '../../../../components/links/user-link'
import paths from '../../../../config/screen-paths'
import { getImageSource } from '../../../../util/get-image-source'

export default function UserResult({ user }) {
  return (
    <UserLink user={user} target={paths.EXPLORE.SEARCH_RESULTS.USER_PROFILE}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: SIZE_CONSTANT * 0.6,
          paddingHorizontal: SIZES.small,
          paddingTop: SIZE_CONSTANT * 1.2,
          paddingBottom: SIZE_CONSTANT * 1.4,
          borderBottomWidth: 0.5,
          borderBottomColor: '#E5E5E5',
        }}
      >
        <View>
          <ProfileImage
            style={{
              width: SIZE_CONSTANT * 4,
              height: SIZE_CONSTANT * 4,
              borderRadius: (SIZE_CONSTANT * 4) / 2,
              borderColor: COLORS.primary50,
              borderWidth: 1,
            }}
            src={getImageSource(user.userPhoto)}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: SIZE_CONSTANT * 0.2,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.small,
              fontWeight: FONT_WEIGHTS.semibold,
              color: COLORS.black,
              letterSpacing: -0.03,
              marginBottom: SIZE_CONSTANT * 0.2,
            }}
          >
            {user.name} {user.surname}
          </Text>
          <Text
            style={{
              fontSize: SIZES.xxSmall,
              color: '#A1A1A1',
              letterSpacing: -0.03,
              lineHeight: SIZE_CONSTANT * 0.9,
            }}
          >
            @{user.username}
          </Text>
        </View>
      </View>
    </UserLink>
  )
}
