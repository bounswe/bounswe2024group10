import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZE_CONSTANT, SIZES } from '../../constants/theme'
import TagLink from '../links/tag-link'
import UserLink from '../links/user-link'
import AssetLink from '../links/asset-link'

const TagText = ({ tag, index = 0, isLast = false, scale = 1 }) => (
  <TagLink tag={tag.value}>
    <Text
      style={{
        display: 'inline',
        fontSize: SIZES.xSmall * scale,
        color: COLORS.primary500,
        letterSpacing: -0.03,
      }}
    >
      {index === 0 ? '' : ' '}
      {tag.value}
    </Text>
  </TagLink>
)

const DefaultText = ({ text, index = 0, scale = 1 }) => (
  <Text
    style={{
      fontSize: SIZES.xSmall * scale,
      color: COLORS.primary950,
      letterSpacing: -0.03,
    }}
  >
    {index === 0 ? '' : ' '}
    {text.value}
  </Text>
)

export default function PostContent({ content = [], scale, style }) {
  if (!content) return null
  return (
    <View style={[style]}>
      <Text>
        {content?.map((c, index) => {
          if (c?.type === 'text') {
            return (
              <DefaultText scale={scale} key={index} index={index} text={c} />
            )
          }
          if (c?.type === 'tag') {
            return <TagText scale={scale} key={index} index={index} tag={c} />
          }
          if (c.type === 'user') {
            return (
              <UserLink user={{ username: c.value }} dateRange={'12M'}>
                {/* <DefaultText text={{ type: 'text', value: ` ~${c.value}` }} /> */}
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: COLORS.primary100,
                    borderRadius: 4,
                    paddingHorizontal: 6,
                    marginLeft: 4,
                    transform: [{ translateY: 2 }],
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.primary500,
                      fontSize: SIZE_CONSTANT * 1.2,
                    }}
                  >
                    ~{c.value}
                  </Text>
                </View>
              </UserLink>
            )
          }
          if (c.type === 'asset') {
            return (
              <AssetLink asset={{ tradingViewSymbol: c.value }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: COLORS.primary500,
                    borderRadius: 4,
                    paddingHorizontal: 6,
                    marginLeft: 4,
                    transform: [{ translateY: 2 }],
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: SIZE_CONSTANT * 1.2,
                    }}
                  >
                    ${c.value}
                  </Text>
                </View>
              </AssetLink>
            )
          }
          // if (c.type === 'chart') {
          //   return <ChartView symbol={c.value} dateRange={'12M'} />
          // }
          //   if (c.type === 'image') {
          //     return (
          //       <Image
          //         style={{
          //           marginVertical: 10,
          //           backgroundColor: 'red',
          //           width: 200,
          //           height: 200,
          //         }}
          //         key={index}
          //         source={c.value}
          //       />
          //     )
          //   }
        })}
      </Text>
    </View>
  )
}
