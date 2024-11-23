import React from 'react';
import styles from '../styles/comment.module.css';  // Ensure you have a CSS file for styling

const Comment = ({ username, text }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.commentUserDetails}>
                <div className={styles.commentUserInfo}>
                    <h5>{username}</h5>
                </div>
            </div>
            <p className={styles.commentText}>{text}</p>
        </div>
    );
};

export default Comment;
