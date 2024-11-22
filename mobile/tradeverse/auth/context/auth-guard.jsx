/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Redirect } from 'expo-router'
import { AuthContext } from '.'
import Loader from '../ui/AuthLoader'

export default function AuthGuard({ children }) {
  const { isLoggedin, loading } = useContext(AuthContext)

  if (!isLoggedin && !loading) {
    return <Redirect href="/auth" />
  }

  if (loading) {
    return <Loader loading />
  }

  return children
}
