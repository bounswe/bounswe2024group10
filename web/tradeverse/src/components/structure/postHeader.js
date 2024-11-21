import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "../styles/postHeader.module.css";

const PostHeader = ({ post }) => {
  console.log("POST:", post);

  return (
    <div className={styles.postHeader}>
      <div className={styles.userAndTag}>
        <div className={styles.userDetailsContainer}>
          <img src={post.author.avatar} className={styles.userImage} />
          <div className={styles.userDetails}>
            <h3>{`${post.author.name} ${post.author.surname}`}</h3>
            <p>{`@${post.username}`}</p>
          </div>
        </div>
        <div className={styles.postHeaderTag}>
          <p>{post.tags[1]}</p>
        </div>
      </div>
      <Link to={`/${post.forumName.toLowerCase()}/${post.id}`} className={styles.postLink}>
      <div className={styles.postHeaderDetails}>
        <h2>{post.description}</h2>
        <p>{post.content}</p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.viewStats}>
          <p className="fa fa-eye" aria-hidden="true"></p>
          <p>{post.viewCount}</p>
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
