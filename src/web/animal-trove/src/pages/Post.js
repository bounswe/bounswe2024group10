import React from "react";
import MainLayout from "../MainLayout";
import mockData from "../constants/mockData";
import styles from "./Post.module.css";
import {
  IconThumbUp,
  IconThumbUpFilled,
  IconThumbDownFilled,
  IconThumbDown,
  IconMessageCircle,
  IconBookmark,
  IconBookmarkFilled,
  IconFlag,
  IconFlagFilled,
} from "@tabler/icons-react";

export default function Post() {
  const post = mockData.posts[0];
  const user = post.owner;

  return (
    <MainLayout>
      <div className={styles.postUserInfo}>
        <img
          src={"./images/logo.png"} // Replace with user avatar URL from mockData
          className={styles.userAvatar}
        />
        <span className={styles.userName}>{user.username}</span>
      </div>
      <div className={`${styles.postContainer} ${styles.blackBackground}`}>
        <div className={`${styles.ImageContainer} ${styles.blackBackground}`}>
        <img
          src={post.image}
          alt={post.name}
          className={`${styles.postImage} ${styles.splitImage}`}
        />
        {/* Button container below the post image */}
        <div className={styles.buttonContainer}>
            <IconThumbUp size={24} />
            <p className={styles.buttonText}> {post.likes}</p>
            
            <IconThumbDown size={24} />
            <p className={styles.buttonText}> {post.dislikes}</p>
            <IconBookmark size={24} style={{ marginRight: '15px' } }/>
            <IconFlag size={24} />
        </div>
        </div>   
        
        <div className={styles.postContent}>
          <h1 className={styles.postTitle}>{post.name}</h1>
          <p className={styles.postLocation}>Location: {post.location}</p>
          <p className={styles.postDate}>Date: {post.date}</p>
          <p className={styles.postDescription}>{post.description}</p>

          <div className={styles.comments}>
            <h2 style={{ textAlign: "center" }}>Comments</h2>
            {mockData.posts.map((post) => (
              <div className={styles.commentItem} key={post.id}>
                {post.commentDetails.map((comment) => (
                  <div key={comment.id}>
                    <img
                      src={comment.owner.avatar}
                      
                      className={styles.commentAvatar}
                    />
                    <span className={styles.commentName}>
                      {comment.owner.username}
                    </span>
                    <img
                      src={"./images/report_icon.png"}
                      className={styles.reportImage}
                    />
                    <div className={styles.commentBody}>
                      <p className={styles.commentText}>{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* New comment box */}
            <div className={styles.newCommentBox}>
              {/* Add form elements for new comment here */}
              <textarea placeholder="Write a comment..." className={styles.newCommentInput} />
              <button type="button" className={styles.newCommentButton}>
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
