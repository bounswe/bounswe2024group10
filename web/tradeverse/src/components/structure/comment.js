import React, { useState } from "react";
import styles from "../styles/comment.module.css";
import { AuthData } from "../../auth/AuthWrapper";
import { createComment } from "../../services/post";

const Comment = ({ comment, level }) => {
    const { user } = AuthData();
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState("");

    const handleReplyToggle = () => {
        setShowReplyBox(!showReplyBox);
    };

    const createCommentContent = (content) => {
        console.log(content);
        if (!content || !Array.isArray(content)) return "No content available";

        return content
            .filter((item) => item.type === "text" || item.type === "tag")
            .map((item) => item.value)
            .join(" ");
    };

    // const handleReplySubmit = () => {
    //     if (!replyText.trim()) return;
    //     console.log("Reply submitted:", replyText, "to comment ID:", comment.id);
    //     // Add logic to save the reply via an API or update the local state
    //     setReplyText(""); // Clear the reply input box
    //     setShowReplyBox(false); // Hide the reply box
    // };


    const parseContent = (content) => {
        const parts = content.split(/(@\w+)/); // Split by '@' followed by a word
        const result = [];
    
        parts.forEach((part) => {
          if (part.startsWith("@")) {
            // Handle tags
            result.push({ type: "tag", value: part });
          } else if (part.trim() !== "") {
            // Handle regular text
            result.push({ type: "text", value: part.trim() });
          }
        });
    
        return result;
      };


    const handleReplySubmit = async () => {
        if (!replyText.trim()) return;

        const commentPayload = {
            username: user.name,
            parentID: comment.id,
            content: [...parseContent(replyText)]
        };


        try {
            const response = await createComment(commentPayload); // Add comment via API
            if (response.successful) {
                setReplyText(""); // Clear the input field
            } else {
                alert("Failed to add comment.");
            }
        } catch (error) {
            console.error("Error adding comment:", error);
            alert("Error adding comment.");
        }
    };



    return (
        <div className={styles.comment} style={{ marginLeft: `${level * 20}px` }}>
            <div className={styles.commentUserDetails}>
                <h5>{comment.author?.username || "Anonymous"}</h5>
            </div>
            <p className={styles.commentText}>{createCommentContent(comment.content)}</p>

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
