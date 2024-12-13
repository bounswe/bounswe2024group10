import React, { useState, useEffect } from "react";
import Feed from "../components/structure/feed";
import styles from "./styles/Home.module.css";
import { AuthData } from "../auth/AuthWrapper";
import {
  fetchRecentPosts,
  fetchFollowedTopicsPosts,
  fetchFollowedPeoplePosts,
} from "../services/post";

const Home = () => {
  const { user } = AuthData();
  const [posts, setPosts] = useState([]);
  const [forYouPosts, setForYouPosts] = useState([]);
  const [followedSubforumPosts, setFollowedSubforumsPosts] = useState([]);
  const [followedUserPosts, setFollowedUserPosts] = useState([]);
  const [filterType, setFilterType] = useState("For You");

  useEffect(() => {
    const fetchForYouPosts = async () => {
      try {
        const token = user.isAuthenticated ? localStorage.getItem("authToken") : '';
        const data = await fetchRecentPosts(token);
        setForYouPosts(data);
        if (filterType === "For You") {
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };

    fetchForYouPosts();
  }, [filterType, user.isAuthenticated]);

  useEffect(() => {
    const fetchPostsByType = async () => {
      try {
        const token = user.isAuthenticated ? localStorage.getItem("authToken") : '';

        if (filterType === "Followed Topics") {
          const data = await fetchFollowedTopicsPosts(token);
          setFollowedSubforumsPosts(data);
          setPosts(data);
        } else if (filterType === "Followed People") {
          const data = await fetchFollowedPeoplePosts(token);
          setFollowedUserPosts(data);
          setPosts(data);
        }
      } catch (error) {
        console.error(`Error fetching posts for ${filterType}:`, error);
      }
    };

    if (filterType === "Followed Topics" || filterType === "Followed People") {
      fetchPostsByType();
    }
  }, [filterType, user.isAuthenticated]);

  const handleFilterChange = (type) => {
    setFilterType(type);

    if (type === "For You") {
      setPosts(forYouPosts);
    } else if (type === "Followed Topics") {
      setPosts(followedSubforumPosts);
    } else if (type === "Followed People") {
      setPosts(followedUserPosts);
    }
  };

  return (
    <div className={styles.homePage}>
      {user.isAuthenticated && (
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${
              filterType === "For You" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("For You")}
          >
            For You
          </button>
          <button
            className={`${styles.filterButton} ${
              filterType === "Followed Topics" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Followed Topics")}
          >
            Followed Topics
          </button>
          <button
            className={`${styles.filterButton} ${
              filterType === "Followed People" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Followed People")}
          >
            Followed People
          </button>
        </div>
      )}
      <div className={styles.feedContainer}>
        <Feed posts={posts} />
      </div>
    </div>
  );
};

export default Home;
