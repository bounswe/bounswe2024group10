import React, { useEffect, useState } from "react";
import Post from "../components/structure/Post"; 
import "./styles/User.css";
import { Link, useParams } from "react-router-dom";
import { getUserDetails, getPostsByUser, getPortfolio } from "../services/user_api"; 
import default_picture from "../data/defaultUserImage.jpeg";
const User = () => {
  const { username } = useParams(); // Getting the username from URL params
  console.log("Extracted username:", username);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user details, posts, and portfolio
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const userResponse = await getUserDetails(username);
        setUser(userResponse); // Set user details

        const token = localStorage.getItem("authToken");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const postsResponse = await getPostsByUser(username);
        setPosts(postsResponse); // Set posts

        const portfolioResponse = await getPortfolio(username);
        setPortfolio(portfolioResponse); // Set portfolio
      } catch (err) {
        setError(err.message || "An error occurred."); // Handle errors
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };
    fetchData();
  }, [username]); // Re-fetch data when the username changes

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>{error}</p>; // Show error message

  if (!user) return <p>User not found</p>; // If no user is found



  return (
    <div className="userPage">
      <div className="header">
        <div className="profile">
          <img
            className="profilePhoto"
            src={user.profilePhoto ? `http://35.246.188.121:8080/api${user.profilePhoto}` : default_picture} // Check for profilePhoto or use default_picture
            alt={`${user.username}'s Profile`}
          />
        </div>
        <h1 className="username">{user.username}</h1>
        <h2 className="fullName">
          {user.surname 
            ? `${user.name} ${user.surname}` 
            : user.name}
        </h2>
        <div className="followDetails">
          
        </div>
      </div>

      <div className="bioSection">
        <h2>About</h2>
        <p className="bio">{user.bio}</p>
      </div>

      <div className="postsSection">
        <h2>Posts</h2>
        <div className="postList">
          {posts.length > 0 ? (
            posts.map((post) => 
            <Link to={`/post/${post.id}`} key={post.id} style={{ textDecoration: 'none',color: 'black' }}>
            <Post key={post.id} post={post} />
            </Link>
            )
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
            {portfolio.length > 0 ? (
              portfolio.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{`${stock.percentage}%`}</td>
                  <td
                    className={stock.trend > 0 ? "positiveTrend" : "negativeTrend"}
                  >
                    {stock.trend > 0 ? `+${stock.trend}%` : `${stock.trend}%`}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No portfolio data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;