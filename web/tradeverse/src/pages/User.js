import React from "react";
import Post from "../components/structure/Post"; 
import "./styles/User.css";

const User = () => {
  const user = {
    name: "John",
    surname: "Doe",
    username: "johndoe123",
    bio: "This is my bio. I love coding.",
    avatar: "https://www.example.com/default-profile.png", 
    followers: 150,
    following: 180,
    posts: [
      {
        id: 1,
        description: "My first post",
        content: "This is the content of my first post.",
        viewCount: 120,
        commentCount: 10,
        likeCount: 50,
        dislikeCount: 3,
        tags: ["Tech", "React"],
        author: { name: "John", surname: "Doe", avatar: "https://www.example.com/avatar.jpg" },
        username: "johndoe123",
        forumName: "General",
      },
      {
        id: 2,
        description: "Another post",
        content: "This is another post content.",
        viewCount: 200,
        commentCount: 15,
        likeCount: 80,
        dislikeCount: 5,
        tags: ["React", "Web Dev"],
        author: { name: "John", surname: "Doe", avatar: "https://www.example.com/avatar.jpg" },
        username: "johndoe123",
        forumName: "Web Development",
      }
    ]
  };

  return (
    <div className="userPage">
      <div className="header">
        <div className="profile">
          <img
            className="profilePhoto"
            src={user.avatar || "default-profile.png"}
            alt="Profile"
          />
        </div>
        <h1 className="username">{user.username}</h1>
        <h2 className="fullName">{`${user.name} ${user.surname}`}</h2>
        <div className="followDetails">
          <span>
            <b>{user.followers}</b> Followers
          </span>
          <span>
            <b>{user.following}</b> Following
          </span>
        </div>
      </div>

      <div className="bioSection">
        <h2>About</h2>
        <p className="bio">{user.bio}</p>
      </div>

      <div className="postsSection">
        <h2>Posts</h2>
        <div className="postList">
          {user.posts.length > 0 ? (
            user.posts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <p className="noPosts">This user has not posted anything yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
