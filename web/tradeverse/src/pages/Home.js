import React, { useState, useEffect } from "react";
import Feed from "../components/structure/feed";
import styles from "./styles/Home.module.css";
import { useParams } from "react-router-dom";
import { explore } from "../services/post";

const Home = () => {
  const { name } = useParams();
  const [posts, setPosts] = useState([]);
  const [filterType, setFilterType] = useState("For You");

  useEffect(() => {
    const fetchExporePosts = async () => {
      const data = await explore();
      console.log(data);
      if (data.isSuccessful) {
        setPosts(data.popularPosts);
      }
    }
    fetchExporePosts();
    
  }, []);


  const handleFilterChange = (type) => {
    setFilterType(type);
    console.log(`Filter changed to: ${type}`);
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
