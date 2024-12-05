//Home.js
import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import PostCard from "../components/PostCard";
import mockData from "../constants/mockData";
import styles from "./Home.module.css";
import AuthenticatedPage from "../components/AuthenticatedPage";
import PostCard2 from "../components/PostCard2";
import { getFeed } from "../services/feed";
import { modalsContext } from "../context/ModalsContext";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { postModal } = useContext(modalsContext);

  useEffect(() => {
    if (postModal) {
      return;
    }
    const fetchPosts = async () => {
      try {
        const response = await getFeed();
        if (!response.success) {
          throw new Error(response.message);
        }
        setPosts(response.posts);
      } catch (error) {
        console.log("Failed to fetch posts:", error);
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
