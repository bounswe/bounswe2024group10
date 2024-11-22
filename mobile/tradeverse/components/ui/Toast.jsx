import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { closeToast, showToast } from '../../reduxStore/ui-slice'
import { COLORS, SIZES } from '../../constants/theme'

function Toast() {
  const opacity = React.useRef(new Animated.Value(0)).current
  const dispatch = useDispatch()
  const { toast } = useSelector((state) => state.ui)

  const animate = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(() => {
          dispatch(closeToast())
        })
      }, 1600)
    })
  }, [dispatch, opacity])

  useEffect(() => {
    if (toast.shown) {
      animate()
    }
  }, [toast.shown, animate])

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={{ marginLeft: 12, width: '100%' }}>
        <Text style={styles.text}>{toast.text}</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '64%',
    top: '50%',
    marginHorizontal: '18%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 20,
    zIndex: 9999,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: '#f0f0f0',
    position: 'absolute',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  text: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
})

export default Toast
