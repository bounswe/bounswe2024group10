//Home.js
import React from "react";
import MainLayout from "../MainLayout";
import PostCard from "../components/PostCard";
import mockData from "../constants/mockData";
import styles from "./Home.module.css";
import AuthenticatedPage from "../components/AuthenticatedPage";
import PostCard2 from "../components/PostCard2";

export default function Home() {
  return (
    <AuthenticatedPage>
      <MainLayout>
        <div>
          <h1>Home</h1>
          <div className={styles.feed}>
            {mockData.feed.map((post) => (
              <PostCard2 key={post.id} post={post} />
            ))}
          </div>
        </div>
      </MainLayout>
    </AuthenticatedPage>
  );
}
