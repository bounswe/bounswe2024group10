/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import {
  IconHome,
  IconLayout,
  IconPlus,
  IconSearch,
  IconUser,
} from '@tabler/icons-react-native'

import paths from './screen-paths'

export const NAV_OPTIONS = [
  {
    icons: {
      active: (style) => <IconHome {...style} />,
      inactive: (style) => <IconHome {...style} />,
    },
    label: 'Home',
    path: paths.HOME.ROOT,
    name: 'home',
    routeValue: 'home/index',
    headerOptions: {
      headerShown: false,
    },
  },

  {
    // icon: <IconSearch {...DefaultIconStyle} />,
    // activeIcon: <IconSearch {...DefaultFilledIconStyle} />,
    icons: {
      active: (style) => <IconSearch {...style} />,
      inactive: (style) => <IconSearch {...style} />,
    },
    label: 'Explore',
    path: paths.EXPLORE.ROOT,
    name: 'explore',
    routeValue: 'explore/index',
    headerOptions: {
      headerShown: false,
    },
  },
  {
    // icon:<IconPlus {...DefaultIconStyle} />,
    // activeIcon:<IconPlus {...DefaultIconStyle} />,
    icons: {
      active: (style) => <IconPlus {...style} />,
      inactive: (style) => <IconPlus {...style} />,
    },
    label: 'Add',
    path: paths.CREATE.ROOT,
    name: 'create',
    routeValue: 'create/index',
    headerOptions: {
      headerShown: false,
    },
  },
  {
    // icon:<IconLayout {...DefaultIconStyle} />,
    // activeIcon:<IconLayoutFilled {...DefaultFilledIconStyle} />,
    icons: {
      active: (style) => <IconLayout {...style} />,
      inactive: (style) => <IconLayout {...style} />,
    },
    label: 'Portfolio',
    name: 'portfolio',
    routeValue: 'portfolio/index',
    headerOptions: {
      headerShown: false,
    },
  },
  {
    // icon:<IconUser {...DefaultIconStyle} />,
    // activeIcon:<IconUserFilled {...DefaultFilledIconStyle} />,
    icons: {
      active: (style) => <IconUser {...style} />,
      inactive: (style) => <IconUser {...style} />,
    },
    label: 'Account',
    name: 'account',
    routeValue: 'account/index',
    headerOptions: {
      headerShown: false,
    },
  },
]
