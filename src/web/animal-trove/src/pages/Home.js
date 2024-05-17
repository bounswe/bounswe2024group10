//Home.js
import React, { useEffect } from "react";
import MainLayout from "../MainLayout";
import PostCard from "../components/PostCard";
import mockData from "../constants/mockData";
import styles from "./Home.module.css";
import AuthenticatedPage from "../components/AuthenticatedPage";
import PostCard2 from "../components/PostCard2";
import { getFeed } from "../services/feed";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getFeed();
        if (!response.success) {
          throw new Error(response.message);
        }
        setPosts(response.posts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <AuthenticatedPage>
      <MainLayout>
        <div>
          <h1>Home</h1>
          <div className={styles.feed}>
            {posts.map((post) => (
              <PostCard2 key={post.postID} post={post} />
            ))}
          </div>
        </div>
      </MainLayout>
    </AuthenticatedPage>
  );
}
