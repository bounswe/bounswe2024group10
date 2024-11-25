import React from "react";
import ChartContainer from "./TradingViewWidget";
import { Link } from "react-router-dom";
import styles from "../styles/postHeader.module.css";

const PostHeader = ({ post }) => {

  const createPostContent = (content) => {
    const postContent = content
      .filter((item) => item.type === "text" || item.type === "tag") // Filter for 'text' and 'tag' types
      .map((item) => item.value) // Extract the value of these fields
      .join(" "); // Concatenate them with a space

    return postContent;
  };


  return (
    <div className={styles.postHeader}>
      <div className={styles.userAndTag}>
        <div className={styles.userDetailsContainer}>
          <img src={post.author.profilePhoto} className={styles.userImage} />
          <div className={styles.userDetails}>
            <h3>{`${post.author.name}`}</h3>
            <p>{`@${post.author.username}`}</p>
          </div>
        </div>
        <div className={styles.postHeaderTag}>
          <p>{post.content.find((item) => item.type === "tag")?.value}</p>
        </div>
      </div>

      <div className={styles.postHeaderDetails}>
        <Link to={`/${post.parentID}/${post.id}`} className={styles.postLink}>
          <h2>{post.title}</h2>
          <p>{createPostContent(post.content)}</p>
          <img src={post.content.find((item) => item.type === "image")?.value} className={styles.postImage} />
        </Link>
        <ChartContainer symbol={post.content.find((item) => item.type === "chart")?.value} />
      </div>
      <Link to={`/${post.parentID}/${post.id}`} className={styles.postLink}>
        <div className={styles.bottomContainer}>
          <div className={styles.viewStats}>
          </div>
          <div className={styles.commentLikeDislikeStats}>
            <div className={styles.stat}>
              <p className="fa fa-comment" aria-hidden="true"></p>
              <p>{post.nofComments}</p>
            </div>
            <div className={styles.stat}>
              <p className="fa fa-thumbs-up" aria-hidden="true"></p>
              <p>{post.nofLikes}</p>
            </div>
            <div className={styles.stat}>
              <p className="fa fa-thumbs-down" aria-hidden="true"></p>
              <p>{post.nofDislikes}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostHeader;
