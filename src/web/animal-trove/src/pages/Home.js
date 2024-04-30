//Home.js
import React from "react";
import MainLayout from "../MainLayout";
import PostCard from "../components/PostCard";
import mockData from "../constants/mockData";
import styles from "./Home.module.css";
import AuthenticatedPage from "../components/AuthenticatedPage";

export default function Home() {
  return (
    <AuthenticatedPage>
      <MainLayout>
        <div>
          <h1>Homee</h1>
          <div className={styles.feed}>
            {mockData.feed.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </MainLayout>
    </AuthenticatedPage>
  );
}
