import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'

const TagText = ({ tag, index = 0, isLast = false, scale = 1 }) => (
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

export default function PostContent({ content, scale, style }) {
  return (
    <View style={[style]}>
      <Text>
        {content.map((c, index) => {
          if (c?.type === 'text') {
            return (
              <DefaultText scale={scale} key={index} index={index} text={c} />
            )
          }
          if (c?.type === 'tag') {
            return <TagText scale={scale} key={index} index={index} tag={c} />
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
