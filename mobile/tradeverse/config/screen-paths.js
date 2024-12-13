const roots = {
  HOME: 'home',
  EXPLORE: 'explore',
  CREATE: 'create',
  PORTFOLIO: 'portfolio',
  ACCOUNT: 'account',
}

const paths = {
  HOME: {
    ROOT: roots.HOME,
    USER_PROFILE: `${roots.HOME}/user-profile`,
    SUBFORUM_DETAIL: `${roots.HOME}/subforum-detail`,
    POST_DETAIL: `${roots.HOME}/post-detail`,
  },
  EXPLORE: {
    ROOT: roots.EXPLORE,
    SEARCH: `${roots.EXPLORE}/search`,
    SEARCH_RESULTS: {
      ASSET_DETAIL: `${roots.EXPLORE}/search/asset-detail`,
      POST_DETAIL: `${roots.EXPLORE}/search/post-detail`,
      USER_PROFILE: `${roots.EXPLORE}/search/user-profile`,
      SUBFORUM_DETAIL: `${roots.EXPLORE}/search/subforum-detail`,
    },
    USER_PROFILE: `${roots.EXPLORE}/user-profile`,
    SUBFORUM_DETAIL: `${roots.EXPLORE}/subforum-detail`,
    POST_DETAIL: `${roots.EXPLORE}/post-detail`,
    ASSET_DETAIL: `${roots.EXPLORE}/asset-detail`,
    TAG_DETAIL: `${roots.EXPLORE}/tag-detail`,
  },
  CREATE: {
    ROOT: roots.CREATE,
    ADD_POST: `${roots.CREATE}/add-post`,
    ADD_SUBFORUM: `${roots.CREATE}/add-subforum`,
  },
  PORTFOLIO: {
    ROOT: roots.PORTFOLIO,
    ADD_ASSET: `${roots.PORTFOLIO}/add-asset`,
    ASSET_DETAIL: `${roots.PORTFOLIO}/asset-detail`,
  },
  ACCOUNT: {
    ROOT: roots.ACCOUNT,
    PROFILE: `${roots.ACCOUNT}/profile`,
    PORTFOLIO: `${roots.ACCOUNT}/portfolio`,
    FOLLOWED_TOPICS: `${roots.ACCOUNT}/followed-topics`,
    FOLLOWED_USERS: `${roots.ACCOUNT}/followed-users`,
    MY_POSTS: `${roots.ACCOUNT}/my-posts`,
    FOLLOWERS: `${roots.ACCOUNT}/followers`,
    FOLLOWINGS: `${roots.ACCOUNT}/followings`
  },
}
export default paths
