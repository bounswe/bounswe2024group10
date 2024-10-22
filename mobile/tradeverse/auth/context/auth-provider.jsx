import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import api from '../../services/_axios';
import AuthContext from './auth-context';
import { getMe, register, login } from '../../services/auth';
import { getUserByUsername } from '../../services/user';

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  const signIn = useCallback(async ({ username, password }) => {
    try {
      // setLoading(true);
      const res = await login({ username, password });
      if (res.status === 200) {
        await AsyncStorage.setItem('authToken', res.data?.token);
        await AsyncStorage.setItem('username', username);
        console.log('TRYING TO GET USER BY USERNAME');
        const userProfile = await getUserByUsername({ username });
        console.log(userProfile);
        
        setUser(userProfile);
        setIsLoggedIn(true);
        router.replace('(tabs)');
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      // setLoading(false);
    }
  }, []);

  const signUp = useCallback(async ({ email, password, name, tag=0,profilePhoto, username }) => {
    try {
      // setLoading(true);
      const res = await register({
        email,
        password,
        name,
        tag,
        profilePhoto,
        username
      });
      if (res.status === 200) {
        await AsyncStorage.setItem('authToken', res.data?.token);
        await AsyncStorage.setItem('username', username);
        const userProfile = await getUserByUsername({ username });

        setUser(userProfile);
        setIsLoggedIn(true);
        router.replace('(tabs)');
        // setUser(res.data?.user);
      }
    } catch (error) {
      throw new Error(error.message ?? 'Giriş başarısız');
    } finally {
      // setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    setIsLoggedIn(false);
    setUser(null);
    router.replace('auth');
    await AsyncStorage.removeItem('authToken');
    setLoading(false);
  }, []);

  const refetchUser = useCallback(async () => {
    setLoading(true);

    const token = await AsyncStorage.getItem('authToken');
    const username = await AsyncStorage.getItem('username');

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    const loggedinUser = await getMe({ authToken: token,username });

    if (loggedinUser) {
      setIsLoggedIn(true);
      setUser(loggedinUser);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  const setUserProfile = useCallback((profile) => {
    setUser((prevUser) => ({ ...prevUser, profile }));
  }, []);

  const isAuthenticated = useCallback(async () => {
    let result = false;

    setLoading(true);

    const token = await AsyncStorage.getItem('authToken');
    const username = await AsyncStorage.getItem('username');

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    if (token || username) {
      const loggedinUser = await getMe({ authToken: token, username });
      if (loggedinUser) {
        setIsLoggedIn(true);
        setUser(loggedinUser);
        result = true;
      } else {
        await AsyncStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setUser(null);
        result = false;
      }
    } else {
      setUser(null);
      setIsLoggedIn(false);
      result = false;
    }
    setLoading(false);
    return result;
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      isLoggedin,
      setLoading,
      signIn,
      loading,
      refetchUser,
      signUp,
      userProfile: user?.profile,
      isAuthenticated,
      logout,
      setUser
    }),
    [
      user,
      setUser,
      isLoggedin,
      loading,
      signIn,
      refetchUser,
      signUp,
      logout,
      isAuthenticated
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
