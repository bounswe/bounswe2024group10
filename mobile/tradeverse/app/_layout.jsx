/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-named-as-default-member */
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-reanimated'
import AuthProvider from '../auth/context/auth-provider'
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="splash" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  )
}
