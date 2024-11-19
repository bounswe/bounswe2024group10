/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-use-before-define */
import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import { Stack } from 'expo-router'

import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { AuthContext } from '../../context'
import PaddedContainer from '../../../components/ui/padded-container'
import MainButton from '../../../components/buttons/main-button'
import { COLORS, SIZE_CONSTANT, SIZES } from '../../../constants/theme'
import TextField from '../../../components/inputs/TextField'

function ErrorMessage({ message }) {
  return <Text style={styles.errorMessage}>{message}</Text>
}

function ErrorBox({ message }) {
  return (
    <View style={styles.errorBoxContainer}>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  )
}

export default function LoginScreen() {
  const [mode, setMode] = useState(1) // 1:signIn, 2:signUp
  const { signIn, signUp } = useContext(AuthContext)

  const loginSchema = z.object({
    username: z.string().min({ message: 'Username is required.' }),
    password: z.string().min(1, { message: 'Password is required.' }),
  })

  useEffect(() => {
    clearErrors()
  }, [mode, clearErrors])

  const registerSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z
      .string()
      .min(1, { message: 'Password cannot be empty.' })
      .max(50, {
        message: 'Max 50 characters allowed for password.',
      }),
    name: z
      .string()
      .min(2, { message: 'At least 2 characters required.' })
      .max(50, {
        message: 'Max 50 characters allowed for name.',
      }),
    username: z.string().min(1, { message: 'Username is required' }),
  })

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      username: '',
      profilePhoto: '',
      tag: 0,
    },
    resolver: zodResolver(mode === 1 ? loginSchema : registerSchema),
  })

  const handleLogin = async (data) => {
    try {
      await signIn({ username: data.username, password: data.password })
    } catch (error) {
      setError('root', {
        type: 'value',
        message: error.message ? error.message : 'Login failed.',
      })
    }
  }
  const handleRegister = async (data) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
        name: data.name,
        username: data.username,
      })
    } catch (error) {
      setError('root', {
        type: 'value',
        message: error.message ? error.message : 'Register failed.',
      })
    }
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View style={styles.logoContainer}>
          {/* <Image source={tradeverseIcon} style={styles.logo} /> */}
          <Text
            style={{
              fontSize: 24,
              color: COLORS.primary900,
              fontWeight: 'bold',
              letterSpacing: -0.4,
            }}
          >
            Tradeverse
          </Text>
        </View>
        <PaddedContainer>
          <View style={styles.inputsContainer}>
            {mode === 2 ? (
              <>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      {errors.name && (
                        <ErrorMessage message={errors.name.message} />
                      )}
                      <TextField
                        variant="filled"
                        placeholder="Name Surname"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    </>
                  )}
                  name="name"
                />
              </>
            ) : null}
            {mode === 2 ? (
              <>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      {errors.email && (
                        <ErrorMessage message={errors.email.message} />
                      )}

                      <TextField
                        variant="filled"
                        placeholder="E-Mail"
                        value={value}
                        autoCapitalize="none"
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    </>
                  )}
                  name="email"
                />
              </>
            ) : null}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  {errors.email && (
                    <ErrorMessage message={errors.email.message} />
                  )}

                  <TextField
                    variant="filled"
                    placeholder="Username"
                    value={value}
                    autoCapitalize="none"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                </>
              )}
              name="username"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  {errors.password && (
                    <ErrorMessage message={errors.password.message} />
                  )}
                  <TextField
                    variant="filled"
                    placeholder="Password"
                    secureTextEntry
                    value={value}
                    autoCapitalize="none"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                </>
              )}
              name="password"
            />

            {errors.root && <ErrorBox message={errors.root.message} />}
          </View>

          <View style={styles.buttonsContainer}>
            <MainButton
              onPress={
                mode === 1
                  ? handleSubmit(handleLogin)
                  : handleSubmit(handleRegister)
              }
              loading={isSubmitting}
              textStyle={{ fontWeight: 'bold' }}
              text={mode === 2 ? 'Kayıt Ol' : 'Giriş Yap'}
            />

            <MainButton
              onPress={() => {
                setMode(mode === 1 ? 2 : 1)
              }}
              variant="secondary"
              text={mode === 1 ? 'Kayıt Ol' : 'Giriş Yap'}
            />
          </View>
        </PaddedContainer>
        <PaddedContainer></PaddedContainer>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: COLORS.white,
    height: '100%',
  },
  container: {
    paddingHorizontal: SIZE_CONSTANT * 2,
    display: 'flex',
    marginVertical: 'auto',
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZE_CONSTANT * 5.6,
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: SIZE_CONSTANT * 1,
  },
  buttonsContainer: {
    marginTop: SIZE_CONSTANT * 5,
    gap: SIZE_CONSTANT * 1,
  },
  seperatorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZE_CONSTANT * 5,
  },
  seperatorLine: {
    width: '42%',
    height: 1,
    backgroundColor: '#eee',
  },
  seperatorText: {
    minWidth: 'auto',
    fontSize: SIZES.xSmall,
    color: '#eee',
  },

  oAuthButton: {
    flexBasis: '100%',
    flexShrink: 1,
    height: SIZE_CONSTANT * 4.4,
    borderWidth: 1.3,
    borderColor: '#f2f2f2',
    display: 'flex',
    paddingVertical: SIZE_CONSTANT * 0.6,
    alignItems: 'center',
    borderRadius: SIZE_CONSTANT * 0.6,
  },

  oAuthIcon: {
    maxWidth: '20%',
    maxHeight: '100%',
    resizeMode: 'contain',
  },

  oAuthButtonsContainer: {
    marginTop: SIZE_CONSTANT * 5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: SIZE_CONSTANT * 1,
  },
  errorMessage: {
    textAlign: 'left',
    fontSize: SIZES.xSmall,
    color: COLORS.error,
    marginLeft: SIZE_CONSTANT * 0.5,
  },
  errorBoxContainer: {
    backgroundColor: '#FFF6F6',
    padding: SIZE_CONSTANT * 1,
    borderRadius: SIZE_CONSTANT * 0.5,
  },
})
