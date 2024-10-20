import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './TextField.style';
import { COLORS } from '../../constants/theme';

export default function TextField({
  onChangeText = () => {},
  placeholder = '',
  secureTextEntry = false,
  autoCapitalize = 'none',
  variant = 'filled',
  style = {},
  onBlur = () => {},
  name = '',
  value,
  label = '',
  multiline = false,
  defaultValue = '',
  error = '',
  showErrorMessage = false // helperText | container.
}) {
  const selectedStyle = styles[variant];
  return (
    <View>
      {label && (
        <Text
          style={[
            styles[variant].label ?? {},
            error && label && styles[variant].error.label
          ]}
        >
          {label}
        </Text>
      )}
      {error && showErrorMessage && (
        <Text style={styles[variant].error.helperText ?? {}}>{error}</Text>
      )}

      <TextInput
        multiline={multiline}
        onBlur={onBlur}
        name={name}
        defaultValue={defaultValue}
        placeholderTextColor='#3C3B3B'
        value={value}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[selectedStyle, style, error && styles[variant].error.container]}
      />
    </View>
  );
}
