import React, { useState, useEffect } from "react";
import Feed from "../components/structure/feed";
import mockData from "../data/mockData";
import styles from "./styles/Home.module.css";
import { useParams } from "react-router-dom";

const Home = () => {
  const { name } = useParams();
  const [posts, setPosts] = useState(
    mockData.subforums.flatMap((subforum) => subforum.posts)
  );
  const [filterType, setFilterType] = useState("For You");

  useEffect(() => {
    if (name) {
      const filteredPosts = mockData.subforums
        .filter(
          (subforum) => subforum.name.toLowerCase() === name.toLowerCase()
        )
        .flatMap((subforum) => subforum.posts);
      setPosts(filteredPosts);
    } else {
      setPosts(mockData.subforums.flatMap((subforum) => subforum.posts));
    }
  }, [name]);


  const handleFilterChange = (type) => {
    setFilterType(type);
    console.log(`Filter changed to: ${type}`);
  };

  return (
    <div className={styles.homePage}>
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
      <div className={styles.feedContainer}>
        <Feed posts={posts} />
      </div>
    </div>
  );
};

export default Home;
