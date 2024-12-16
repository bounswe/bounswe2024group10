import React from 'react'
import { View, StyleSheet, Animated, Dimensions } from 'react-native'
import { SIZE_CONSTANT } from '../../constants/theme'

const SkeletonBox = ({
  width = 100,
  height = 40,
  borderRadius = SIZE_CONSTANT * 1,
}) => {
  const screenWidth = Dimensions.get('window').width
  const animatedValue = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      })
    ).start()
  }, [animatedValue])

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, screenWidth],
  })

  return (
    <View style={[styles.skeleton, { width, height, borderRadius }]}>
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: 'rgb(240,240,240)',
    overflow: 'hidden',
    position: 'relative',
  },
  shimmer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    opacity: 0.5,
  },
})

export default SkeletonBox
