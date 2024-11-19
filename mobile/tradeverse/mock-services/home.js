import { searchPosts } from './post'

export default function getHomeFeed() {
  const allPosts = searchPosts('')
  const forYouPosts = allPosts.slice(0, 4)
  const followedTopicsPosts = allPosts.slice(4, 7)
  const followedPeoplePosts = allPosts.slice(7, 15)

  return {
    forYouPosts,
    followedTopicsPosts,
    followedPeoplePosts,
  }
}
