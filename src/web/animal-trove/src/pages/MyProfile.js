//Home.js
import React, { useContext, useEffect } from "react";
import MainLayout from "../MainLayout";
import mockData from "../constants/mockData";
import styles from "./MyProfile.module.css";
import { IconSettings, IconUserCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import AuthenticatedPage from "../components/AuthenticatedPage";
import { authContext } from "../context/AuthContext";
export default function MyProfile() {
  const { username, email, perfonalInfo, avatar, posts, followers, following } =
    mockData.userData;
  const { user } = useContext(authContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <AuthenticatedPage>
      <MainLayout>
        <div className={styles.container}>
          <div className={styles.avatarContainer}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoDivider}>
              <div>
                <h1 className={styles.username}>{user?.userName ?? ""}</h1>
                <p className={styles.email}>{email}</p>
              </div>
              <div className={styles.followerContainer}>
                <span className={styles.followers}>
                  {<IconUserCheck size={20} />}
                  <strong>{followers} </strong>Followers
                </span>
                <span className={styles.following}>
                  {<IconUserCheck size={20} />}
                  <strong>{following} </strong>Followings
                </span>
              </div>
              <Link
                to="/me/settings"
                className={styles.settingsButtonContainer}
              >
                <IconSettings size={18} />
                Settings
              </Link>
            </div>

            <p className={styles.biography}>{perfonalInfo}</p>
          </div>
        </div>
        <div className={styles.postPartContainer}>
          <h2>My Posts</h2>
          <div className={styles.myPostsContainer}>
            {posts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <img className={styles.postImage} src={post.image} alt="post" />
                <p className={styles.postContent}>{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </AuthenticatedPage>
  );
}
