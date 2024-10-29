/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { View, StyleSheet, Platform } from 'react-native';
import TabBarButton from './tabbar-button';
import { NAV_OPTIONS } from '../../../config/navigation';
import { COLORS, SIZE_CONSTANT } from '@/constants/theme';

export default function CustomTabBar({ state, descriptors, navigation }) {
  const [tabBarDimensions, setTabBarDimensions] = useState({
    width: 0,
    height: 0
  });

  const buttonWidth = tabBarDimensions.width / state.routes.length;

  const onLayoutChange = (e) => {
    setTabBarDimensions({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height
    });
  };

  const buttonPositionX = useSharedValue(0);

  useEffect(() => {
    buttonPositionX.value = withSpring( buttonWidth * state.index ,{duration: 1220,reduceMotion:true});
  }, [buttonWidth, state.index, buttonPositionX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: buttonPositionX.value
        }
      ]
    };
  });

  return (
    <View onLayout={onLayoutChange} style={styles.tabBar}>
      <Animated.View style={[{width:buttonWidth},animatedStyle,styles.focusCircleContainer]} >
        <View style={styles.focusCircle} />
      </Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };


        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            label={label}
            icons={NAV_OPTIONS[index].icons}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary500,
    height: SIZE_CONSTANT * 5.2,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 32,
    bottom: 32,
    left: 12,
    right: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 12,
  },
  focusCircle: {
    width: 42,
    height: 42,
    borderRadius: 30,
    // backgroundColor: COLORS.primary500,
    backgroundColor:COLORS.white,
  },
  focusCircleContainer:{
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

