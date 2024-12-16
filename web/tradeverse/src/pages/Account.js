import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/structure/Post";
import Feed from "../components/structure/feed.js";
import "./styles/Account.css";
import { AuthData } from "../auth/AuthWrapper";
import { getUserProfile, getPostsByUser, setUserDetails } from "../services/account_api.js";

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

  const handleEditBio = async () => {
    const newBio = prompt("Edit your bio:", userData.bio || "");
    if (newBio) {
        try {
            const token = localStorage.getItem("authToken");
            const updatedUserData = await setUserDetails(token, { bio: newBio });

            setUserData((prevData) => ({
                ...prevData,
                bio: updatedUserData.bio,
            }));
        } catch (error) {
            console.error("Error updating bio:", error);
            alert("Failed to update bio. Please try again later.");
        }
    }
};

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
            src={userData.avatar || "default-profile.png"}
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

      <div className="bioSection">
        <h2>About Me</h2>
        <p className="bio">{userData.bio || ""}</p>
        <button className="editBioBtn" onClick={handleEditBio}>
          Edit Bio
        </button>
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
