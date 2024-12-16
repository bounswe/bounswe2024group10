import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/structure/Post";
import Feed from "../components/structure/feed.js";
import "./styles/Account.css";
import { AuthData } from "../auth/AuthWrapper";
import { getUserProfile, getPostsByUser, setUserDetails } from "../services/account_api.js";
import default_picture from "../data/defaultUserImage.jpeg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../components/styles/feed.module.css";

const Account = () => {
  const { user } = AuthData();
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isAuthenticated) {
      const fetchUserData = async () => {
        try {
          const token = user.isAuthenticated ? localStorage.getItem("authToken") : "";
          // Use API service functions
          const userDetails = await getUserProfile(user.name,token);
          const userPosts = await getPostsByUser(user.name,token);

          setUserData(userDetails);
          setPosts(userPosts);
        } catch (error) {
          console.error("Error fetching user data or posts:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchUserData();
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error: Unable to load user data.</div>;
  }

  return (
    <div className="accountPage">
      <div className="header">
        <div className="profile">
          <img
            className="profilePhoto"
            src={userData.avatar || default_picture}
            alt="Profile"
          />
          <button className="editPhotoBtn">Update Photo</button>
        </div>
        <h1 className="username">{userData.username}</h1>
        <div className="followDetails">
          <span>
            <b>{userData.followerCount}</b> Followers
          </span>
          
        </div>
      </div>

      <Feed posts={posts} />
      {/* Portfolio Button */}
      <div className="portfolioButtonContainer">
        <Link to="/portfolio">
          <button className="portfolioBtn">Go To My Portfolio</button>
        </Link>
      </div>
    </div>
  );
};

export default Account;
