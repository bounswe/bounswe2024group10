import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import React, { useEffect } from 'react';
import { COLORS, SIZE_CONSTANT, SIZES } from '../../../constants/theme';

export default function TabBarButton({
  key,
  onPress,
  isFocused = false,
  icons,
  label
}) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {
      duration: 350
    });
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1]);
    const topValue = interpolate(scale.value, [0, 1], [0, 7]);
    return {
      transform: [{
        scale: scaleValue
      }],
      top: topValue
    };
  });

  return (
    <Pressable
      // eslint-disable-next-line react/no-array-index-key
      key={key}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      style={styles.tabBarItem}
    >
      <Animated.View style={animatedIconStyle}>
        {isFocused
          ? icons.active(styles.activeIcon)
          : icons.inactive(styles.inactiveIcon)}
      </Animated.View>
      <Animated.Text style={[styles.tabBarItemText, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:90
  },
  tabBarItemText: {
    fontSize: SIZES.xxSmall,
    color: COLORS.graytext,
    fontWeight: 'light'
  },
  inactiveIcon: {
    strokeWidth: 1.8,
    size: SIZE_CONSTANT * 2.8,
    color: COLORS.primary500
  },
  activeIcon: {
    strokeWidth: 2,
    size: SIZE_CONSTANT * 2.8,
    color: '#fff',
  }
});
