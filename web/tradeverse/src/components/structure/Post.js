import styles from "../styles/post.module.css";
import React from "react";
import ChartContainer from "./TradingViewWidget";
import { AuthData } from "../../auth/AuthWrapper";

const Post = ({ post }) => {
  const { user } = AuthData();

  const handleLike = () => {
    // if (user.isAuthenticated) {
    //   onLike(post.id);
    // } else {
    //   alert("Please log in to like this post.");
    // }
  };

  const handleDislike = () => {
    // if (user.isAuthenticated) {
    //   onDislike(post.id);
    // } else {
    //   alert("Please log in to dislike this post.");
    // }
  };

  const createPostContent = (content) => {
    const postContent = content
      .filter((item) => item.type === "text" || item.type === "tag") // Filter for 'text' and 'tag' types
      .map((item) => item.value) // Extract the value of these fields
      .join(" "); // Concatenate them with a space

    return postContent;
  };

  return (
    <div className={styles.post}>
      <div className={styles.userAndTag}>
        <div className={styles.userDetailsContainer}>
          <img src={post.author.profilePhoto} className={styles.userImage} />
          <div className={styles.userDetails}>
            <h3>{`${post.author.name}`}</h3>
            <p>{`@${post.author.username}`}</p>
          </div>
        </div>
        <div className={styles.postTag}>
          <p>{post.content.find((item) => item.type === "tag")?.value}</p>
        </div>
      </div>
      <div className={styles.postHeaderDetails}>
        <h2>{post.title}</h2>
        <p>{createPostContent(post.content)}</p>
        <img src={post.content.find((item) => item.type === "image")?.value} className={styles.postImage} />
        <ChartContainer symbol={post.content.find((item) => item.type === "chart")?.value} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.actionContainer}>
          <div className={styles.action}>
            <button
              className="fa fa-thumbs-up"
              aria-hidden="true"
              onClick={handleLike}
            ></button>
            <p>{post.nofLikes}</p>
          </div>
          <div className={styles.action}>
            <button
              className="fa fa-thumbs-down"
              aria-hidden="true"
              onClick={handleDislike}
            ></button>
            <p>{post.nofDislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
