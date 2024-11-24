import React, { useState } from "react";
import Post from "../components/structure/Post"; // Adjust the path based on your project structure
import "./styles/Account.css";

const Account = () => {
  const [bio, setBio] = useState("Finance enthusiast. Investor. Blogger.");

  const posts = [
    {
      id: 1,
      author: { name: "John", surname: "Doe", avatar: "default-profile.png" },
      username: "JohnDoe123",
      tags: ["Finance"],
      description: "How to Start Investing",
      content: "Investing is a great way to grow your wealth over time...",
      likeCount: 25,
      dislikeCount: 2,
    },
    {
      id: 2,
      author: { name: "John", surname: "Doe", avatar: "default-profile.png" },
      username: "JohnDoe123",
      tags: ["Mistakes"],
      description: "Top Financial Mistakes",
      content: "Avoiding these mistakes can save you a lot of trouble...",
      likeCount: 30,
      dislikeCount: 1,
    },
  ];

  const handleEditBio = () => {
    const newBio = prompt("Edit your bio:", bio);
    if (newBio) setBio(newBio);
  };

  return (
    <div className="accountPage">
      <div className="header">
        <div className="profile">
          <img
            className="profilePhoto"
            src="default-profile.png"
            alt="Profile"
          />
          <button className="editPhotoBtn">Update Photo</button>
        </div>
        <h1 className="username">JohnDoe123</h1>
        <div className="followDetails">
          <span>
            <b>200</b> Followers
          </span>
          <span>
            <b>150</b> Following
          </span>
        </div>
      </div>

      <div className="bioSection">
        <h2>About Me</h2>
        <p className="bio">{bio}</p>
        <button className="editBioBtn" onClick={handleEditBio}>
          Edit Bio
        </button>
      </div>

      <div className="postsSection">
        <h2>My Posts</h2>
        <div className="postList">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <button className="viewAllPostsBtn">View All</button>
      </div>
    </div>
  );
};

export default Account;
