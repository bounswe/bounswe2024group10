import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { router } from 'expo-router';
import api from '../../services/_axios';
import AuthContext from './auth-context';
import { getMe, register, login } from '../../services/auth';
import { getUserByUsername } from '../../services/user';
import { Storage } from '../../util/storage';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Make sure to import AsyncStorage

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [isTagSelected, setIsTagSelected] = useState(false);

  const signIn = useCallback(async ({ username, password }) => {
    try {
      setLoading(true);
      const res = await login({ username, password });
      if (res.data['isSuccessful'] === true) {
        await Storage.setItem('authToken', res.data?.token ?? "");
        await Storage.setItem('username', res.data['username'] ?? "");
        const userProfile = await getUserByUsername({ username });

        setUser(userProfile);
        setIsLoggedIn(true);
        router.replace('(tabs)');
      }
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const signUp = useCallback(async ({ email, password, name, tag = 0, profilePhoto, username }) => {
    try {
      setLoading(true); // You might want to show a loading indicator
      const res = await register({
        email,
        password,
        name,
        tag,
        profilePhoto,
        username,
      });

      if (res.status === 200) {
        await Storage.setItem('authToken', res.data?.token);
        await Storage.setItem('username', username);
        const userProfile = await getUserByUsername({ username });

        setUser(userProfile);
        setIsLoggedIn(true);
        router.replace('(tabs)');
      }
    } catch (error) {
      console.error('Sign Up error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      setIsLoggedIn(false);
      setUser(null);
      router.replace('auth');
      await Storage.removeItem('authToken');
      await Storage.removeItem('username');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const refetchUser = useCallback(async () => {
    try {
      setLoading(true);

      const token = await Storage.getItem('authToken');
      const username = await Storage.getItem('username');

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      const loggedinUser = await getMe({ authToken: token, username });

      if (loggedinUser) {
        setIsLoggedIn(true);
        setUser(loggedinUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Refetch User error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const isAuthenticated = useCallback(async () => {
    try {
      setLoading(true);

      const token = await AsyncStorage.getItem('authToken');
      const username = await AsyncStorage.getItem('username');

      if (token && username) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const loggedinUser = await getMe({ authToken: token, username });

        if (loggedinUser) {
          setIsLoggedIn(true);
          setUser(loggedinUser);
        } else {
          await AsyncStorage.removeItem('authToken');
          await AsyncStorage.removeItem('username');
          setIsLoggedIn(false);
          setUser(null);
        }
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.log('Error in isAuthenticated:', error);
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('username');
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  const contextValue = useMemo(
    () => ({
      user,
      isLoggedin,
      setLoading,
      signIn,
      setIsTagSelected,
      loading,
      refetchUser,
      signUp,
      isTagSelected,
      userProfile: user?.profile,
      logout,
      setUser,
    }),
    [
      user,
      isLoggedin,
      loading,
      signIn,
      setIsTagSelected,
      refetchUser,
      signUp,
      isTagSelected,
      logout,
      setUser,
    ]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
