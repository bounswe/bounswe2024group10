import api from './_axios'
import {allSubforums} from '../mock-data/all-subforums'

export async function likePost({ username, postId, post = null }) {
  try {
    const response = await api.post('/like/like-post', { username, postId });
    // if (post) {
      
    //   if (post && allSubforums) {
    //     const subForum = allSubforums.find(sf => sf.id === post.subforum.id);

    //     if (subForum) {
    //       const targetPost = subForum.posts.find(p => p.id === post.id);

    //       if (targetPost) {
    //         targetPost.likes = (targetPost.likes || 0) + 1;

    //         console.log('Updated Post:', targetPost);
    //       } else {
    //         console.warn('Post not found in subforum:', post.id);
    //       }
    //     } else {
    //       console.warn('Subforum not found:', post.subforum.id);
    //     }
    //   }
    return response.data
  } catch (error) {
    console.error('Like Post Failed', error)
  }
  return null
}

export async function unlikePost({ username, postId }) {
    try {
      const response = await api.post('/like/unlike-post', { username, postId });
      // if (postId) {
      
      //   if (postId && allSubforums) {
      //     console.log(postId)
      //     const subForum = allSubforums.forEach((key, val) => {
      //       key["posts"].map(item => {
      //         if (item.id == postId) {

      //         }

      //       });
      //     })
      //   }
  
      // }

       return response.data
    } catch (error) {
       console.error('Unlike post failed', error)
    }
    return null
  }

  export async function dislikePost({ username, postId }) {
    try {
      const response = await api.post('/dislike/dislike-post', { username, postId });

      if (postId && allSubforums) {
        console.log("Searching for post with ID:", postId);
        
        // Loop through each subforum and its posts to find the post by postId
        // for (let subforum of allSubforums) {
        //   const post = subforum.posts.find(item => item.id === postId);
          
        //   // If the post is found, log it and break the loop
        //   if (post) {
        //     console.log("Found post:", post);
            
        //     // Perform your logic for disliking the post here
        //     // You can update the likes/dislikes of the post or call an API
  
        //     // For example, you could increase the dislike count:
        //     post.dislikes += 1;
        //     console.log("Updated post:", post);
        //     return post; // Return the updated post
        //   }
        // }
        
        console.log("Post not found");
      }
      return response.data
    } catch (error) {
      console.error('Dislike post failed', error);
    }
    
    return null; // Return null if the post isn't found
  }
  

export async function undislikePost({ username, postId }) {
    try {
      const response = await api.post('/dislike/undislike-post', { username, postId });

      // if (post) {
      
      //   if (post && allSubforums) {
      //     const subForum = allSubforums.find(sf => sf.id === post.subforum.id);
  
      //     if (subForum) {
      //       const targetPost = subForum.posts.find(p => p.id === post.id);
  
      //       if (targetPost) {
      //         targetPost.likes = (targetPost.dislikes || 0) - 1;
  
      //         console.log('Updated Post:', targetPost);
      //       } else {
      //         console.warn('Post not found in subforum:', post.id);
      //       }
      //     } else {
      //       console.warn('Subforum not found:', post.subforum.id);
      //     }
      //   }
  
      // }
      return response.data
    } catch (error) {
       console.error('Undislike post failed', error)
    }
    return null
  }