/* eslint-disable react/jsx-props-no-spreading */
import {
  IconBookmark,
  IconCoins,
  IconKey,
  IconLogin,
  IconTextCaption,
  IconUser,
  IconUserDown,
  IconUserUp
} from '@tabler/icons-react-native';
import { COLORS } from '../../constants/theme';
import { SIZE_CONSTANT } from '../../constants/theme';
import paths from '../../config/screen-paths';

const defaultIconProps = {
  strokeWidth: 1,
  color: COLORS.primary600,
  size: SIZE_CONSTANT * 2.2
};

const ProfileConfig = {
  sections: {
    account: {
      title: 'Account',
      options: [
        {
          value: 'my_profile',
          title: 'My Profile',
          icon: <IconUser {...defaultIconProps} />,
          href: '#'
        },
        {
          value:'portfolio',
          title: 'Portfolio',
          icon: <IconCoins {...defaultIconProps} />,
          href: '#'
        },
        {
          value: 'followed_topics',
          title: 'Followed Topics',
          icon: <IconBookmark {...defaultIconProps} />,
          href: '#'
        },
        {
          value: 'my_posts',
          title: 'My Posts',
          icon: <IconTextCaption {...defaultIconProps} />,
          href: '#'
        }
      ]
    },
    social: {
      title: 'Social',
      options: [
        {
          value: 'my_followers',
          title: 'Followers',
          icon: <IconUserDown {...defaultIconProps} />,
          href: '#'
        },
        {
          value: 'my_following',
          title: 'Followings',
          icon: <IconUserUp {...defaultIconProps} />,
          href: '#',
          disabled: true
        }
      ]
    },
 
    settings: {
      title: 'Settings',
      options: [
        {
          value: 'change_password',
          title: 'Şifre Değiştir',
          icon: <IconKey {...defaultIconProps} />,
          href: '#',
        },
        {
          value: 'logout',
          title: 'Çıkış Yap',
          icon: <IconLogin {...defaultIconProps} />,
          action: () => {}
        }
      ]
    }
  }
};

export default ProfileConfig;
