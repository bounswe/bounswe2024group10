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
        author: { name: "John", surname: "Doe", avatar: "default-profile.png" },
        username: "johndoe123",
        content: [
          { type: "text", value: "This is the content of my first post" },
          { type: "tag", value: "Tech" },
        ],
        title: "My First Post",
        nofLikes: 50,
        nofDislikes: 3,
        isLiked: false,
        isDisliked: false,
      },
      {
        id: 2,
        author: { name: "John", surname: "Doe", avatar: "default-profile.png" },
        username: "johndoe123",
        content: [
          { type: "text", value: "This is another post content." },
          { type: "tag", value: "React" },
        ],
        title: "Another Post",
        nofLikes: 80,
        nofDislikes: 15,
        isLiked: false,
        isDisliked: false,
      }
    ],
    portfolio: [
      { name: "Apple", percentage: 40, trend: 3.41 },
      { name: "Tesla", percentage: 25, trend: -2.15 },
      { name: "Amazon", percentage: 35, trend: 1.89 },
    ]
  };

  return (
    <div className="userPage">
      <div className="header">
        <div className="profile">
          <img
            className="profilePhoto"
            src={"default_profile_picture.png"}
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

      <div className="portfolioSection">
        <h2>Portfolio</h2>
        <table className="portfolioTable">
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Percentage</th>
              <th>Recent Trend</th>
            </tr>
          </thead>
          <tbody>
            {user.portfolio.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{`${stock.percentage}%`}</td>
                <td
                  className={stock.trend > 0 ? "positiveTrend" : "negativeTrend"}
                >
                  {stock.trend > 0 ? `+${stock.trend}%` : `${stock.trend}%`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default User;
