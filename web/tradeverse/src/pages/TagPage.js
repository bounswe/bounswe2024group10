import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Feed from "../components/structure/feed"; // Assuming Feed component exists
import { getPostsByTag } from "../services/post"; // Import the service function
import styles from "./styles/TagPage.module.css"; // Import CSS styles
import { AuthData } from "../auth/AuthWrapper";
const TagPage = () => {
  const { user } = AuthData(); // Access user data from AuthWrapper
  const { tag } = useParams(); // Get the tag from the route parameters
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = user.isAuthenticated ? localStorage.getItem("authToken") : ""; // Conditionally set token
        const data = await getPostsByTag(tag, token); // Fetch posts by tag
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts by tag:", err);
        setError("Failed to fetch posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [tag]);

  if (loading) {
    return <div className={styles.loading}>Loading posts...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.tagPage}>
      <header className={styles.tagPageHeader}>
        <h1>{tag}</h1>
        <p>Explore posts related to <span className={styles.tagBadge}>{tag}</span></p>
      </header>
      {posts.length > 0 ? (
        <Feed posts={posts} /> // Pass posts to the Feed component
      ) : (
        <p className={styles.noPosts}>No posts found for this tag.</p>
      )}
    </div>
  );
};

export default TagPage;
