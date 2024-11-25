import React, { useState } from "react";
import styles from "../styles/comment.module.css";

const Comment = ({ comment, level }) => {
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState("");

    const handleReplyToggle = () => {
        setShowReplyBox(!showReplyBox);
    };

    const handleReplySubmit = () => {
        if (!replyText.trim()) return;
        console.log("Reply submitted:", replyText, "to comment ID:", comment.id);
        // Add logic to save the reply via an API or update the local state
        setReplyText(""); // Clear the reply input box
        setShowReplyBox(false); // Hide the reply box
    };

    const createPostContent = (content) => {
        if (!content || !Array.isArray(content)) return "No content available";

        return content
            .filter((item) => item.type === "text" || item.type === "tag")
            .map((item) => item.value)
            .join(" ");
    };



    return (
        <div className={styles.comment} style={{ marginLeft: `${level * 20}px` }}>
            <div className={styles.commentUserDetails}>
                <h5>{comment.author?.username || "Anonymous"}</h5>
            </div>
            <p className={styles.commentText}>{createPostContent(comment.content)}</p>

            <button onClick={handleReplyToggle} className={styles.replyButton}>
                {showReplyBox ? "Cancel" : "Reply"}
            </button>

            {showReplyBox && (
                <div className={styles.replyBox}>
                    <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your reply..."
                        className={styles.replyInput}
                    />
                    <button onClick={handleReplySubmit} className={styles.submitReplyButton}>
                        Submit
                    </button>
                </div>
            )}

            {comment.comments && comment.comments.length > 0 && (
                <div className={styles.nestedComments}>
                    {comment.comments.map((nestedComment) => (
                        <Comment key={nestedComment.id} comment={nestedComment} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;
