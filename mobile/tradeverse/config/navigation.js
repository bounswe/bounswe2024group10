/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import {
    IconHome,
    IconHomeFilled,
    IconLabelFilled,
    IconLayout,
    IconLayoutFilled,
    IconPlus,
    IconSearch,
    IconUser,
    IconUserFilled,
  } from '@tabler/icons-react-native';
import { SIZE_CONSTANT,COLORS } from '@/constants/theme';
import paths from '@/config/screen-paths';

const roots = {
    HOME: 'home',
    EXPLORE:'explore',
    ADD:'add',
    PORTFOLIO:'portfolio',
    ACCOUNT:'account',
  };
    
  const DefaultIconStyle = {
    strokeWidth: 1.8,
    size: SIZE_CONSTANT * 2.8,
    color: COLORS.primary500
  };
  
  const DefaultFilledIconStyle = {
    strokeWidth: 0,
    size: SIZE_CONSTANT * 2.8,
    fill: COLORS.primary500
  };
  
  export const NAV_OPTIONS = [
    {
      icons :{
        active:(style)=> <IconHome {...style} />,
        inactive : (style) => <IconHome {...style}/>
      },
      label: 'Home',
      path: paths.HOME.ROOT,
      name: 'home',
      routeValue: 'home/index',
      headerOptions:{
        headerShown:false
      }
  },

  {
    // icon: <IconSearch {...DefaultIconStyle} />,
    // activeIcon: <IconSearch {...DefaultFilledIconStyle} />,
    icons :{
      active:(style)=> <IconSearch {...style} />,
      inactive : (style) => <IconSearch {...style}/>
    },
    label: 'Explore',
    path: paths.EXPLORE.ROOT,
    name:'explore',
    routeValue: 'explore/index',
    headerOptions:{
      headerShown:false
    }
  }
,
  {
    // icon:<IconPlus {...DefaultIconStyle} />,
    // activeIcon:<IconPlus {...DefaultIconStyle} />,
    icons :{
      active:(style)=> <IconPlus {...style} />,
      inactive : (style) => <IconPlus {...style}/>
    },
    label:'Add',
    path: paths.CREATE.ROOT,
    name:'create',
    routeValue:'create/index',
    headerOptions:{
      headerShown:false
    }
  },
  {
    // icon:<IconLayout {...DefaultIconStyle} />,
    // activeIcon:<IconLayoutFilled {...DefaultFilledIconStyle} />,
    icons :{
      active:(style)=> <IconLayout {...style} />,
      inactive : (style) => <IconLayout {...style}/>
    },
    label:'Portfolio',
    name:'portfolio',
    routeValue:'portfolio/index',
    headerOptions:{
      headerShown:false
    }
  },
    {
        // icon:<IconUser {...DefaultIconStyle} />,
        // activeIcon:<IconUserFilled {...DefaultFilledIconStyle} />,
        icons :{
          active:(style)=> <IconUser {...style} />,
          inactive : (style) => <IconUser {...style}/>
        },
        label:'Account',
        name:'account',
        routeValue:'account/index',
        headerOptions:{
        headerShown:false
        }
    }

  ];
  