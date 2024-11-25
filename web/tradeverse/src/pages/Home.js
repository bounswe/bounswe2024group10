import React, { useState, useEffect } from "react";
import Feed from "../components/structure/feed";
import styles from "./styles/Home.module.css";
import { useParams } from "react-router-dom";
import { explore, feed } from "../services/post";
import { AuthData } from "../auth/AuthWrapper";

const Home = () => {
  const { user, logout } = AuthData();
  const [posts, setPosts] = useState([]);
  const [forYouPosts, setForYouPosts] = useState([]);
  const [followedSubforumPosts, setFollowedSubforumsPosts] = useState([]);
  const [followedUserPosts, setFollowedUserPosts] = useState([]);
  const [filterType, setFilterType] = useState("For You");

  useEffect(() => {
    const fetchExporePosts = async () => {
      const data = await explore();

      if (data.isSuccessful) {
        setForYouPosts(data.popularPosts);
        if (filterType === "For You") {
          setPosts(data.popularPosts);
        }
      }
    }
    const fetchFeedPosts = async () => {
      const data = await feed(user.name);
      console.log(data);
      if (data.successful) {
        if (data.followedSubforumPosts?.["Post 1"]) {
          setFollowedSubforumsPosts(
            data.followedSubforumPosts["Post 1"].filter((post) => post.postType === "POST")
          );
        }
        if (data.followedUserPosts?.[user.name]) {
          setFollowedUserPosts(
            data.followedUserPosts[user.name].filter((post) => post.postType === "POST")
          );
        }
      }
    }
    fetchFeedPosts();
    fetchExporePosts();

  }, [filterType]);



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
      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterButton} ${filterType === "For You" ? styles.active : ""
            }`}
          onClick={() => handleFilterChange("For You")}
        >
          For You
        </button>
        <button
          className={`${styles.filterButton} ${filterType === "Followed Topics" ? styles.active : ""
            }`}
          onClick={() => handleFilterChange("Followed Topics")}
        >
          Followed Topics
        </button>
        <button
          className={`${styles.filterButton} ${filterType === "Followed People" ? styles.active : ""
            }`}
          onClick={() => handleFilterChange("Followed People")}
        >
          Followed People
        </button>
      </div>
      <div className={styles.feedContainer}>
        <Feed posts={posts} />
      </div>
    </div>
  );
};

export default Home;
