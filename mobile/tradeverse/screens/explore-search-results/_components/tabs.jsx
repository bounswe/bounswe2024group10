import React from 'react'
import { Pressable, View, Text, ScrollView } from 'react-native'
import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from '../../../constants/theme'

export default function Tabs({ selectedTab, setSelectedTab }) {
  const TABS = [
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Assets',
      value: 'assets',
    },
    {
      label: 'Tags',
      value: 'tags',
    },
    {
      label: 'Sub Forums',
      value: 'sub_forums',
    },
    {
      label: 'Posts',
      value: 'posts',
    },
    {
      label: 'People',
      value: 'people',
    },
  ]

  return (
    <ScrollView
      contentContainerStyle={{
        width: 'auto',
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          height: 50,
          minWidth: '100%',
          backgroundColor: 'white',
          borderBottomWidth: 1,
          marginTop: SIZE_CONSTANT,
          borderBottomColor: '#f1f1f1',
        }}
      >
        {TABS.map((tab, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedTab(tab.value)}
            style={{
              flex: 1,
              minWidth: 72,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: SIZE_CONSTANT * 1.4,
              borderBottomWidth:
                selectedTab === tab.value ? SIZE_CONSTANT * 0.3 : 0,
              borderBottomColor:
                selectedTab === tab.value ? COLORS.primary500 : 'transparent',
            }}
          >
            <Text
              style={{
                fontSize: SIZES.xSmall,
                color:
                  selectedTab === tab.value
                    ? COLORS.primary950
                    : COLORS.graytext,
                fontWeight:
                  selectedTab === tab.value
                    ? FONT_WEIGHTS.medium
                    : FONT_WEIGHTS.regular,
              }}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}
