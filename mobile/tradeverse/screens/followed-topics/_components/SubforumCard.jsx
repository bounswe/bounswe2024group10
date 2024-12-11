import { View, Text } from 'react-native'
import React from 'react'
import {
  COLORS,
  SIZE_CONSTANT,
  SIZES,
  FONT_WEIGHTS,
} from '../../../constants/theme'
import formatInteractionNumber from '../../../util/format-number'
import paths from '../../../config/screen-paths'
import SubforumLink from '../../../components/links/subforum-link'

export default function SubForumCard({ style, subForum }) {
  const InteractionInfo = ({ icon, value }) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: SIZE_CONSTANT * 0.2,
        alignItems: 'center',
      }}
    >
      <View>{icon()}</View>
      <Text
        style={{
          fontSize: SIZES.xxSmall,
          color: '#1D1B4B',
          letterSpacing: -0.03,
        }}
      >
        {formatInteractionNumber(value)}
      </Text>
    </View>
  )
  return (
    <SubforumLink
      subForum={subForum}
      target={paths.EXPLORE.SEARCH_RESULTS.SUBFORUM_DETAIL}
    >
      <View
        style={{
          borderColor: '#E5E5E5',
          borderRadius: SIZE_CONSTANT * 1,
          backgroundColor: COLORS.primary50,
          paddingTop: SIZE_CONSTANT * 1.2,
          paddingBottom: SIZE_CONSTANT * 1.4,
          paddingHorizontal: SIZE_CONSTANT * 1.2,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.small,
            color: COLORS.primary800,
            letterSpacing: -0.03,
            fontWeight: FONT_WEIGHTS.medium,
            marginBottom: SIZE_CONSTANT * 0.8,
          }}
        >
          {subForum.title}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: SIZE_CONSTANT * 2,
          }}
        >
          <InteractionInfo
            icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>✍️</Text>}
            value={subForum.num_of_posts}
          />
          <InteractionInfo
            icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>⭐</Text>}
            value={subForum.num_of_followers}
          />
        </View>
      </View>
    </SubforumLink>
  )
}