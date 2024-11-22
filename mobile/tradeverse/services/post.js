import api from './_axios';
import * as FileSystem from 'expo-file-system';  
import { allSubforums } from '../mock-data/all-subforums';


const filePath = FileSystem.documentDirectory + 'all-subforums.json';


const writeToFile = async (data) => {
  try {
    await FileSystem.writeAsStringAsync(filePath, JSON.stringify(data, null, 2), {
      encoding: FileSystem.EncodingType.UTF8,
    });
    console.log('File written successfully!');
  } catch (error) {
    console.error('Failed to write file:', error);
  }
};

export async function likePost({ username, postId, post = null }) {
  try {
    
     //const response = await api.post('/like/like-post', { username, postId });

    
    if (post && allSubforums) {
      const subForum = allSubforums.find(sf => sf.id === post.subforum.id);
      if (subForum) {
        const targetPost = subForum.posts.find(p => p.id === post.id);
        if (targetPost) {
          targetPost.likes = (targetPost.likes || 0) + 1;
          console.log('Updated Post:', targetPost);

          
          await writeToFile(allSubforums);
        } else {
          console.warn('Post not found in subforum:', post.id);
        }
      } else {
        console.warn('Subforum not found:', post.subforum.id);
      }
    }

    //return response.data;
  } catch (error) {
    console.error('Like Post Failed', error);
  }

  return null;
}

export async function unlikePost({ username, postId }) {
  try {
    if (postId && allSubforums) {
      console.log('Searching for post with ID:', postId);

      allSubforums.forEach(subForum => {
        const targetPost = subForum.posts.find(p => p.id === postId);
        if (targetPost) {
          targetPost.likes = (targetPost.likes || 0) - 1;
          console.log('Updated Post:', targetPost);

          
          writeToFile(allSubforums);
        }
      });
    }
  } catch (error) {
    console.error('Unlike Post Failed', error);
  }

  return null;
}

export async function dislikePost({ username, postId }) {
  try {
    if (postId && allSubforums) {
      console.log('Searching for post with ID:', postId);

      for (let subforum of allSubforums) {
        const post = subforum.posts.find(item => item.id === postId);
        if (post) {
          console.log('Found post:', post);
          post.dislikes = (post.dislikes || 0) + 1;
          console.log('Updated post:', post);

          await writeToFile(allSubforums);
          return post; 
        }
      }

      console.log('Post not found');
    }
  } catch (error) {
    console.error('Dislike Post Failed', error);
  }

  return null;
}

export async function undislikePost({ username, postId }) {
  try {
    
    //const response = await api.post('/dislike/undislike-post', { username, postId });

    
    if (postId && allSubforums) {
      console.log('Searching for post with ID:', postId);

      allSubforums.forEach(subForum => {
        const targetPost = subForum.posts.find(p => p.id === postId);
        if (targetPost) {
          targetPost.dislikes = (targetPost.dislikes || 0) - 1;
          console.log('Updated Post:', targetPost);

          
          writeToFile(allSubforums);
        }
      });
    }

    //return response.data;
  } catch (error) {
    console.error('Undislike Post Failed', error);
  }

  return null;
}
