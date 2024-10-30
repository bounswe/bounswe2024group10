import { searchAssets } from './assets'
import { searchPosts } from './post'
import { searchSubforums } from './subforums'
import searchTags from './tags'
import { searchUsers } from './users'

export const getExploreFeed = () => {
  const allPosts = searchPosts('')
  return {
    popular: allPosts.slice(0, 8),
    recent: allPosts.slice(8, 16),
  }
}

export const searchOnExplore = (searchTerm) => {
  const allPosts = searchPosts(searchTerm)
  return {
    popular: allPosts.slice(0, 12),
    assets: searchAssets(searchTerm),
    tags: searchTags(searchTerm),
    subforums: searchSubforums(searchTerm),
    posts: searchPosts(searchTerm),
    users: searchUsers(searchTerm),
  }
}
