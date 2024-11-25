/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  IconBookmark,
  IconCoins,
  IconKey,
  IconLogin,
  IconTextCaption,
  IconUser,
  IconUserDown,
  IconUserUp,
} from '@tabler/icons-react-native'
import { COLORS, SIZE_CONSTANT } from '../../constants/theme'
import paths from '../../config/screen-paths'

const defaultIconProps = {
  strokeWidth: 1,
  color: COLORS.primary600,
  size: SIZE_CONSTANT * 2.2,
}

const ProfileConfig = {
  sections: {
    account: {
      title: 'Account',
      options: [
        {
          value: 'my_profile',
          title: 'My Profile',
          icon: <IconUser {...defaultIconProps} />,
          href: paths.ACCOUNT.PROFILE,
        },
        {
          value: 'portfolio',
          title: 'Portfolio',
          icon: <IconCoins {...defaultIconProps} />,
          href: paths.ACCOUNT.PORTFOLIO,
        },
        {
          value: 'followed_topics',
          title: 'Followed Topics',
          icon: <IconBookmark {...defaultIconProps} />,
          href: paths.ACCOUNT.FOLLOWED_TOPICS,
        },
        {
          value: 'my_posts',
          title: 'My Posts',
          icon: <IconTextCaption {...defaultIconProps} />,
          href: '#',
          disabled: true,
        },
      ],
    },
    social: {
      title: 'Social',
      options: [
        {
          value: 'my_followers',
          title: 'Followers',
          icon: <IconUserDown {...defaultIconProps} />,
          href: '#',
          disabled: true,
        },
        {
          value: 'my_following',
          title: 'Followings',
          icon: <IconUserUp {...defaultIconProps} />,
          href: paths.ACCOUNT.FOLLOWED_USERS,
        },
      ],
    },

    settings: {
      title: 'Settings',
      options: [
        {
          value: 'change_password',
          title: 'Change Password',
          icon: <IconKey {...defaultIconProps} />,
          href: '#',
          disabled: true,
        },
        {
          value: 'logout',
          title: 'Log Out',
          icon: <IconLogin {...defaultIconProps} />,
          action: () => {},
        },
      ],
    },
  },
}

export default ProfileConfig
