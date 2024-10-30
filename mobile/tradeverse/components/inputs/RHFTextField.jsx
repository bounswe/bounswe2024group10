import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import styles from './TextField.style'
import TextField from './TextField'

export default function RHFTextField({
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
  const selectedStyle = styles[variant]
  const formContext = useFormContext()

  return (
    <Controller
      control={formContext?.control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          showErrorMessage={showErrorMessage}
          error={formContext.formState.errors[name]?.message}
          variant={variant}
          name={name}
          showHelperText
          errorVariant={showErrorMessage}
          label={label}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoCapitalize={autoCapitalize}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          style={{ ...selectedStyle, ...style }}
        />
      )}
    />
  )
}
