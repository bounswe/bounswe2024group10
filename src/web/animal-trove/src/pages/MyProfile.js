//Home.js
import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import mockData from "../constants/mockData";
import styles from "./MyProfile.module.css";
import { IconSettings, IconUserCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import AuthenticatedPage from "../components/AuthenticatedPage";
import { authContext } from "../context/AuthContext";
import { getPostsByUsername } from "../services/post";
import { getUserDetails } from "../services/profile";
import PostCard2 from "../components/PostCard2";
export default function MyProfile() {
  const [postsData, setPostsData] = useState([]);
  const [userDetails, setUserDetails] = useState({
    email: "",
    perfonalInfo: "",
  });
  const { user } = useContext(authContext);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await getPostsByUsername({ username: user.userName });
        setPostsData(response.posts);
        const responseUserDetails = await getUserDetails({
          username: user.userName,
        });
        setUserDetails(responseUserDetails.user);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };
    fetchUserDetails();
  }, [user]);
  return (
    <AuthenticatedPage>
      <MainLayout>
        <div className={styles.container}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.avatar}
              src={"/images/avatar.png"}
              alt="avatar"
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoDivider}>
              <div>
                <h1 className={styles.username}>{user?.userName ?? ""}</h1>
                <p className={styles.email}>{userDetails.email}</p>
              </div>
              <div className={styles.followerContainer}></div>
              {/* <Link
                to="/me/settings"
                className={styles.settingsButtonContainer}
              >
                <IconSettings size={18} />
                Settings
              </Link> */}
            </div>

            <p className={styles.biography}>
              {userDetails?.name ? `${userDetails.name}` : ""}
            </p>
          </div>
        </div>
        <div className={styles.postPartContainer}>
          <h2>My Posts</h2>
          <div className={styles.myPostsContainer}>
            {/* {postsData?.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <img className={styles.postImage} src={post.image} alt="post" />
                <p className={styles.postContent}>{post.content}</p>
              </div>
            ))} */}
            {postsData.map((post) => (
              <PostCard2 key={post.postID} post={post} />
            ))}
          </div>
        </div>
      </MainLayout>
    </AuthenticatedPage>
  );
}
