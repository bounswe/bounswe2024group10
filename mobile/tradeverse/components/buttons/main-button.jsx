import React from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, SIZE_CONSTANT } from '../../constants/theme';

export default function MainButton({
  onPress=()=>{Alert.alert("Not Implemented")},
  loading,
  disabled,
  style,
  textStyle,
  variant = 'primary',
  text = 'Press'
}) {
  const selectedStyle = styles[variant];

  return (
    <Pressable
      onPress={(e) => {
        e.preventDefault();
        onPress();
      }}
      role='button'
      disabled={disabled}
      style={[
        selectedStyle.container,
        style,
        {
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? 'none' : 'auto'
        }
      ]}
    >
      {loading ? (
        <ActivityIndicator color={selectedStyle.text.color} />
      ) : (
        <Text style={[selectedStyle.text, textStyle]}>{text}</Text>
      )}
    </Pressable>
  );
}

const primaryStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.primary500,
    padding: 10,
    height: SIZE_CONSTANT * 4.4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  text: {
    color: COLORS.white,
    fontSize: SIZE_CONSTANT * 1.4,
    fontWeight: '600',
  }
});

const secondaryStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZE_CONSTANT * 4.4,
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#F2F2F2',
    borderWidth: 1
  },
  text: {
    color: COLORS.primary950,
    fontSize: 14,
    fontWeight: 'regular'
  }
});

const styles = {
  primary: primaryStyle,
  secondary: secondaryStyle
};