const roots = {
    HOME: 'home',
    EXPLORE:'explore',
    CREATE:'create',
    PORTFOLIO:'portfolio',
    ACCOUNT:'account',
  };
  
  const paths = {
    HOME: {
      ROOT: roots.HOME,
    },
    EXPLORE: {
      ROOT: roots.EXPLORE,
      SEARCH: `${roots.EXPLORE}/search`,
    },
    CREATE: {
      ROOT: roots.CREATE,
    },
    PORTFOLIO: {
      ROOT: roots.PORTFOLIO,
    },
    ACCOUNT: {
      ROOT: roots.ACCOUNT,
      PROFILE: `${roots.ACCOUNT}/profile`,
    },
  };  
  export default paths;
  