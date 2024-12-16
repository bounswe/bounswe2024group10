import React, { useState, useEffect } from "react";
import Feed from "../components/structure/feed";
import styles from "./styles/Home.module.css";
import { AuthData } from "../auth/AuthWrapper";
import {
  fetchRecentPosts,
  fetchFollowedTopicsPosts,
  fetchFollowedPeoplePosts,
  fetchForYouPosts,
} from "../services/post";

const Home = () => {
  const { user } = AuthData();
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [forYouPosts, setForYouPosts] = useState([]);
  const [followedSubforumPosts, setFollowedSubforumsPosts] = useState([]);
  const [followedUserPosts, setFollowedUserPosts] = useState([]);
  const [filterType, setFilterType] = useState(""); // Defaults to no filter

  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const token = user.isAuthenticated ? localStorage.getItem("authToken") : "";

        if (filterType === "For You") {
          const data = await fetchForYouPosts(token);
          setForYouPosts(data);
          setPosts(data);
        } else if (!filterType) {
          const data = await fetchRecentPosts(token);
          setRecentPosts(data);
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchInitialPosts();
  }, [filterType, user.isAuthenticated]);

  useEffect(() => {
    const fetchPostsByType = async () => {
      try {
        const token = user.isAuthenticated ? localStorage.getItem("authToken") : "";

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
    } else {
      setPosts(recentPosts); // Default to recent posts
    }
  };

  const fetchAndSetPosts = async (type) => {
    try {
      const token = user.isAuthenticated ? localStorage.getItem("authToken") : "";

      if (type === "For You") {
        const data = await fetchForYouPosts(token);
        setForYouPosts(data);
        setPosts(data);
      } else if (type === "Followed Topics") {
        const data = await fetchFollowedTopicsPosts(token);
        setFollowedSubforumsPosts(data);
        setPosts(data);
      } else if (type === "Followed People") {
        const data = await fetchFollowedPeoplePosts(token);
        setFollowedUserPosts(data);
        setPosts(data);
      } else if (!type) {
        const data = await fetchRecentPosts(token);
        setRecentPosts(data);
        setPosts(data);
      }
    } catch (error) {
      console.error(`Error fetching posts for ${type || "Recent"}:`, error);
    }
  };

  const refreshPosts = () => {
    fetchAndSetPosts(filterType);
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
          <button
            className={`${styles.filterButton} ${
              !filterType ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("")}
          >
            Recent
          </button>
        </div>
      )}
      <div className={styles.feedContainer}>
        <Feed posts={posts} refreshPosts={refreshPosts} />
      </div>
    </div>
  );
};

export default Home;
