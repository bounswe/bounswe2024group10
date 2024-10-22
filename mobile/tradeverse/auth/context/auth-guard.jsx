import React, { useContext } from 'react';
import { Redirect, useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '.';
import Loader from '../ui/AuthLoader';

export default function AuthGuard({ children }) {
  const router = useRouter();
  const route = useRoute();
  const { isLoggedin, loading } = useContext(AuthContext);

  const handleNavigate = (opt) => {
    if (opt.name === route.name) return;
    if (route.name === '/') {
      router.navigate(opt.path);
    } else {
      router.replace(opt.path);
    }
  };

  if (!isLoggedin && !loading) {
    return <Redirect href="/auth" />;
  }

  if (loading) {
    return <Loader loading />;
  }

  return children;
}
