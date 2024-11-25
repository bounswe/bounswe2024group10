import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { router } from 'expo-router';
import api from '../../services/_axios';
import AuthContext from './auth-context';
import { getMe, register, login } from '../../services/auth';
import { getUserByUsername } from '../../services/user';

import { Storage } from '../../util/storage';

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoggedin, setIsLoggedIn] = useState(false)
  const [isTagSelected, setIsTagSelected] = useState(false)

  const signIn = useCallback(async ({ username, password }) => {
    try {
      setLoading(true);
      const res = await login({ username, password });
      if (res.data['isSuccessful'] === true) {
        await Storage.setItem('authToken', res.data?.token ?? "");
        await Storage.setItem('username', res.data['username']?? "");
        const userProfile = await getUserByUsername({ username });

        setUser(userProfile);
        setIsLoggedIn(true);
        router.replace('(tabs)');
      }
    } catch (error) {
      console.error(error.message)
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }, [])

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
        await Storage.setItem('authToken', res.data?.token);
        await Storage.setItem('username', username);
        const userProfile = await getUserByUsername({ username });

        setUser(userProfile);
        setIsLoggedIn(true);
        router.replace('(tabs)');
        // setUser(res.data?.user);
      }
    },
    []
  )

  const logout = useCallback(async () => {
    setLoading(true);
    setIsLoggedIn(false);
    setUser(null);
    router.replace('auth');
    await Storage.removeItem('authToken');
    await Storage.removeItem('username');
    setLoading(false);
  }, []);

  const refetchUser = useCallback(async () => {
    setLoading(true)

    const token = await Storage.getItem('authToken');
    const username = await Storage.getItem('username');

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    const loggedinUser = await getMe({ authToken: token, username })

    if (loggedinUser) {
      setIsLoggedIn(true)
      setUser(loggedinUser)
    } else {
      setUser(null)
    }
    setLoading(false)
  }, [])

  const setUserProfile = useCallback((profile) => {
    setUser((prevUser) => ({ ...prevUser, profile }))
  }, [])

  const isAuthenticated = useCallback(async () => {
    try {
      let result = false
      setLoading(true)

      const token = await AsyncStorage.getItem('authToken')
      if (token) {
        const validateResponse = await validateToken({ token })
        if (validateResponse?.username) {
          console.log('Token is valid ->', validateResponse, token)
          api.defaults.headers.common.Authorization = `Bearer ${token}`
          const userProfile = await getUserByUsername({
            username: validateResponse.username,
            token,
          })
          console.log('userProfile', userProfile)

    const token = await Storage.getItem('authToken');
    const username = await Storage.getItem('username');

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    if (token || username) {
      const loggedinUser = await getMe({ authToken: token, username });
      if (loggedinUser) {
        setIsLoggedIn(true);
        setUser(loggedinUser);
        result = true;
      } else {
        await Storage.removeItem('authToken');
        setIsLoggedIn(false);
        setUser(null);
        result = false;
      }
    } catch (error) {
      console.log('error on isAuthenticated', error)
      await AsyncStorage.removeItem('authToken')
      setIsLoggedIn(false)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    isAuthenticated()
  }, [isAuthenticated])

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
      setUser,
      isLoggedin,
      loading,
      signIn,
      refetchUser,
      isTagSelected,
      setIsTagSelected,
      signUp,
      logout,
    ]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
