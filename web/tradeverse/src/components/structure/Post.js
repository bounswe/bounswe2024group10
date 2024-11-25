import styles from "../styles/post.module.css";
import React, { useState } from "react";
import ChartContainer from "./TradingViewWidget";
import { AuthData } from "../../auth/AuthWrapper";
import { likePost, unlikePost } from "../../services/like";
import { dislikePost, undislikePost } from "../../services/dislike";

const Post = ({ post }) => {
  const { user } = AuthData();
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isDisliked, setIsDisliked] = useState(post.isDisliked);
  const [nofLikes, setNofLikes] = useState(post.nofLikes);
  const [nofDislikes, setNofDislikes] = useState(post.nofDislikes);

  const handleLike = async () => {
    if (!user.isAuthenticated) {
      alert("Please log in to like this post.");
      return;
    }

    try {
      if (isLiked) {
        // Unlike the post
        const response = await unlikePost({ username: user.name, postId: post.id });
        if (response?.successful) {
          setNofLikes((prev) => Math.max(prev - 1, 0)); // Ensure likes don't go below zero
          setIsLiked(false);
        }
      } else {
        // Like the post
        const response = await likePost({ username: user.name, postId: post.id });
        if (response?.successful) {
          setNofLikes((prev) => prev + 1);
          setIsLiked(true);

          // If the post is disliked, undo the dislike
          if (isDisliked) {
            setNofDislikes((prev) => Math.max(prev - 1, 0));
            setIsDisliked(false);
          }
        }
      }
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  const handleDislike = async () => {
    if (!user.isAuthenticated) {
      alert("Please log in to dislike this post.");
      return;
    }

    try {
      if (isDisliked) {
        // Remove dislike
        const response = await undislikePost({ username: user.name, postId: post.id });
        if (response?.successful) {
          setNofDislikes((prev) => prev - 1); // Ensure dislikes don't go below zero
          setIsDisliked(false);
        }
      } else {
        // Dislike the post
        const response = await dislikePost({ username: user.name, postId: post.id });
        if (response?.successful) {
          setNofDislikes((prev) => prev + 1);
          setIsDisliked(true);

          // If the post is liked, undo the like
          if (isLiked) {
            setNofLikes((prev) => prev - 1);
            setIsLiked(false);
          }
        }
      }
    } catch (error) {
      console.error("Error handling dislike:", error);
    }
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
      <div className={styles.postDetails}>
        <h2>{post.title}</h2>
        <p>{createPostContent(post.content)}</p>
        <img src={post.content.find((item) => item.type === "image")?.value} className={styles.postImage} />
        <ChartContainer symbol={post.content.find((item) => item.type === "chart")?.value} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.actionContainer}>
          <div className={styles.action}>
            <button
              className={`fa fa-thumbs-up ${isLiked ? styles.activeLike : ""}`}
              aria-hidden="true"
              onClick={handleLike}
            ></button>
            <p>{nofLikes}</p>
          </div>
          <div className={styles.action}>
            <button
              className={`fa fa-thumbs-down ${isDisliked ? styles.activeDislike : ""}`}
              aria-hidden="true"
              onClick={handleDislike}
            ></button>
            <p>{nofDislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
