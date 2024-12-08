import React, { useEffect } from 'react'
import { Pressable, View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from '../../../constants/theme'

export default function Tabs({ selectedTab, setSelectedTab }) {
  const { tab } = useLocalSearchParams()

  const TABS = [
    {
      label: 'Subforums',
      value: 'subforums',
    },
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Recent',
      value: 'recent',
    },
  ]

  useEffect(() => {
    if (tab) setSelectedTab(tab)
  }, [tab, setSelectedTab])

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: 50,
        width: '100%',
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
                  ? COLORS.primary800
                  : COLORS.primary950,
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
  )
}
