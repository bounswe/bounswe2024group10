import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../components/structure/feed'; // Import Feed component
import styles from './styles/Subforum.module.css'; // Import styles
import { AuthData } from '../auth/AuthWrapper';
import { getSubforum ,followSubforum,unfollowSubforum} from '../services/subforum';
import { toast } from "react-toastify";

const Subforum = () => {
  const {user } = AuthData();
  const { subforumId } = useParams();
  const [subforum, setSubforum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  useEffect(() => {
    const fetchSubforum = async () => {
      setLoading(true);
      try {
        const token = user.isAuthenticated ? localStorage.getItem('authToken') : '';
        const data = await getSubforum(subforumId, token); // Call the service
        setSubforum(data); // Set subforum data
        setIsFollowing(data.followed); // Initialize following state
       } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubforum();
  }, [subforumId]);

  const handleFollow = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const payload = { subforumId: parseInt(subforumId, 10) }; // Construct the payload
      const response = await followSubforum(payload, token);

      if (response.isSuccessful) {
        setIsFollowing(true); // Update local state
        toast.success("You are now following this subforum!");
        
      } else {
        toast.error("Failed to follow the subforum.");
      }
    } catch (error) {
      console.error('Error following subforum:', error);
      toast.error("An error occurred while following the subforum.");
    }
  };

  const handleUnfollow = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const payload = { subforumId: parseInt(subforumId, 10) }; // Construct the payload
      const response = await unfollowSubforum(payload, token);

      if (response.isSuccessful) {
        setIsFollowing(false); // Update local state
        toast.info("You have unfollowed this subforum!");
      } else {
        toast.error("Failed to unfollow the subforum.");
      }
    } catch (error) {
      console.error('Error unfollowing subforum:', error);
      toast.error("An error occurred while unfollowing the subforum.");
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!subforum) {
    return <div className={styles.error}>Subforum not found.</div>;
  }

  return (
    <div className={styles.subforumPage}>
      <header className={styles.subforumHeader}>
        <h1>{subforum.name}</h1>
        <p>{subforum.description}</p>
        <div className={styles.subforumStats}>
          <span>{subforum.postCount} Posts</span>
          <span>{subforum.followerCount} Followers</span>
        </div>
        {user.isAuthenticated && (
          isFollowing ? (
            <button className={styles.unfollowButton}onClick={handleUnfollow} >
              <i className="fa fa-minus" aria-hidden="true"></i> Unfollow
            </button>
          ) : (
            <button className={styles.followButton} onClick={handleFollow} >
              <i className="fa fa-plus" aria-hidden="true"></i> Follow
            </button>
          )
        )}
      </header>

      {/* Render posts using Feed */}
      <Feed posts={subforum.posts} />
    </div>
  );
};

export default Subforum;
