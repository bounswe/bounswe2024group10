import styles from "../styles/post.module.css";
import React from "react";
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

  return (
    <div className={styles.post}>
      <div className={styles.userAndTag}>
        <div className={styles.userDetailsContainer}>
          <img src={post.author.avatar} className={styles.userImage} />
          <div className={styles.userDetails}>
            <h3>{`${post.author.name} ${post.author.surname}`}</h3>
            <p>{`@${post.username}`}</p>
          </div>
        </div>
        <div className={styles.postTag}>
          <p>{post.tags[0]}</p>
        </div>
      </div>
      <div className={styles.postDetails}>
        <h2>{post.description}</h2>
        <p>{post.content}</p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.actionContainer}>
          <div className={styles.action}>
            <button
              className="fa fa-thumbs-up"
              aria-hidden="true"
              onClick={handleLike}
            ></button>
            <p>{post.likeCount}</p>
          </div>
          <div className={styles.action}>
            <button
              className="fa fa-thumbs-down"
              aria-hidden="true"
              onClick={handleDislike}
            ></button>
            <p>{post.dislikeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
