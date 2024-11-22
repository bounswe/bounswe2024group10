import api from './_axios'
import {allSubforums} from '../mock-data/all-subforums'

export async function likePost({ username, postId, post = null }) {
  try {
    //Update in the actual database
    const response = await api.post('/like/like-post', { username, postId });
    //Update in the mock data.
    if (post) {
      
      if (post && allSubforums) {
        const subForum = allSubforums.find(sf => sf.id === post.subforum.id);

        if (subForum) {
          const targetPost = subForum.posts.find(p => p.id === post.id);

          if (targetPost) {
            targetPost.likes = (targetPost.likes || 0) + 1;

            console.log('Updated Post:', targetPost);
          } else {
            console.warn('Post not found in subforum:', post.id);
          }
        } else {
          console.warn('Subforum not found:', post.subforum.id);
        }
      }

    }
    return response.data
  } catch (error) {
    console.error('Like Post Failed', error)
  }
  return null
}

export async function unlikePost({ username, postId }) {
    try {
      const response = await api.post('/like/unlike-post', { username, postId });

      if (post) {
      
        if (post && allSubforums) {
          const subForum = allSubforums.find(sf => sf.id === post.subforum.id);
  
          if (subForum) {
            const targetPost = subForum.posts.find(p => p.id === post.id);
  
            if (targetPost) {
              targetPost.likes = (targetPost.likes || 0) - 1;
  
              console.log('Updated Post:', targetPost);
            } else {
              console.warn('Post not found in subforum:', post.id);
            }
          } else {
            console.warn('Subforum not found:', post.subforum.id);
          }
        }
  
      }
      return response.data
    } catch (error) {
       console.error('Unlike post failed', error)
    }
    return null
  }

export async function dislikePost({ username, postId }) {
  try {
    const response = await api.post('/dislike/dislike-post', { username, postId });

      if (post) {
      
        if (post && allSubforums) {
          const subForum = allSubforums.find(sf => sf.id === post.subforum.id);
  
          if (subForum) {
            const targetPost = subForum.posts.find(p => p.id === post.id);
  
            if (targetPost) {
              targetPost.likes = (targetPost.dislikes || 0) + 1;
  
              console.log('Updated Post:', targetPost);
            } else {
              console.warn('Post not found in subforum:', post.id);
            }
          } else {
            console.warn('Subforum not found:', post.subforum.id);
          }
        }
  
      }
      return response.data
  } catch (error) {
     console.error('Dislike post failed', error)
  }
  return null
}

export async function undislikePost({ username, postId }) {
    try {
      const response = await api.post('/dislike/undislike-post', { username, postId });

      if (post) {
      
        if (post && allSubforums) {
          const subForum = allSubforums.find(sf => sf.id === post.subforum.id);
  
          if (subForum) {
            const targetPost = subForum.posts.find(p => p.id === post.id);
  
            if (targetPost) {
              targetPost.likes = (targetPost.dislikes || 0) - 1;
  
              console.log('Updated Post:', targetPost);
            } else {
              console.warn('Post not found in subforum:', post.id);
            }
          } else {
            console.warn('Subforum not found:', post.subforum.id);
          }
        }
  
      }
      return response.data
    } catch (error) {
       console.error('Undislike post failed', error)
    }
    return null
  }