import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styles from './TextField.style';
import TextField from './TextField';

export default function RHFTextArea({
  placeholder,
  secureTextEntry,
  autoCapitalize,
  variant = 'filled',
  style,
  name,
  label,
  defaultValue,
  showErrorMessage,
}) {
  const selectedStyle = styles[variant];
  const formContext = useFormContext();
  return (
    <Controller
      control={formContext?.control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextField
          multiline
          showErrorMessage={showErrorMessage}
          error={formContext.formState.errors[name]?.message}
          value={value}
          variant={variant}
          label={label}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoCapitalize={autoCapitalize}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          style={[selectedStyle, style, { height: 140 }]}
        />
      )}
    />
  );
}
