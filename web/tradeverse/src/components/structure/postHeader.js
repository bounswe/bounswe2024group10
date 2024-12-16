import React from "react";
import ChartContainer from "./TradingViewWidget";
import { Link } from "react-router-dom";
import styles from "../styles/postHeader.module.css";
import defaultUserImage from "../../data/defaultUserImage.jpeg";

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
          <img
            src={post.author.profilePhoto ? post.author.profilePhoto : defaultUserImage}
            className={styles.userImage}
          />
          <div className={styles.userDetails}>
            <h3>
            <Link to={`/user/${post.createdBy}`}>
              {`${post.author.name}`}
            </Link>
            </h3>
            <p>
              <Link to={`/user/${post.createdBy}`}>
                {`@${post.createdBy}`}
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.postHeaderTag}>
          {/* Display tag and subforum name next to each other */}
          <p>
            <Link to={`/tag/${post.content.find((item) => item.type === "tag")?.value}`} className={styles.tagLink}>
            {post.content.find((item) => item.type === "tag")?.value}
            </Link>
            <Link to={`/subforum/${post.subforum.id}`} className={styles.subforumLink}>
              <span className={styles.subforumName}> | {post.subforum.name}</span>
            </Link>
          </p>
        </div>
      </div>

      <div className={styles.postHeaderDetails}>
        <Link to={`/${post.subforum.id}/${post.id}`} className={styles.postLink}>
          <h2>{post.title}</h2>
          <div className={styles.postImageContainer}>
            {post.content.find((item) => item.type === "image")?.value && (
              <img
                src={`http://35.246.188.121:8080/api/images/${post.content.find((item) => item.type === "image")?.value}`}
                className={styles.postImage}
                alt="Post Image"
              />
            )}
          </div>
          <p>{createPostContent(post.content)}</p>
          
        </Link>
        <ChartContainer symbol={post.content.find((item) => item.type === "chart")?.value} />
      </div>
      <Link to={`/${post.subforum.id}/${post.id}`} className={styles.postLink}>
        <div className={styles.bottomContainer}>
          <div className={styles.viewStats}>
          </div>
          <div className={styles.commentLikeDislikeStats}>
            <div className={styles.stat}>
              <p className="fa fa-comment" aria-hidden="true"></p>
              <p>{post.commentCount}</p>
            </div>
            <div className={styles.stat}>
              <p className="fa fa-thumbs-up" aria-hidden="true"></p>
              <p>{post.likeCount}</p>
            </div>
            <div className={styles.stat}>
              <p className="fa fa-thumbs-down" aria-hidden="true"></p>
              <p>{post.dislikeCount}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostHeader;
