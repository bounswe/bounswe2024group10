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
    const fetchExplorePosts = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
        };
  
        // Conditionally add Authorization header if the user is authenticated
        if (user.isAuthenticated) {
          const token = localStorage.getItem("authToken");
          console.log("Retrieved Token:", token);
          headers.Authorization = `Bearer ${token}`;
        }
        else{
          headers.Authorization = `Bearer `;
        }
  
        const response = await fetch("http://localhost:8080/api/post/recent", {
          method: "GET",
          headers,
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
  
        const data = await response.json();
  
        if (data && Array.isArray(data)) {
          setForYouPosts(data); // Set fetched posts as "For You" posts
          if (filterType === "For You") {
            setPosts(data);
          }
        } else {
          console.error("Unexpected response format", data);
        }
      } catch (error) {
        console.error("Error fetching explore posts:", error);
      }
    };
  
    fetchExplorePosts();
  }, [filterType, user.isAuthenticated]); // Add user.isAuthenticated to dependencies
  




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
