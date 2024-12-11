import React, { useState } from "react";
import styles from "../styles/comment.module.css";
import { AuthData } from "../../auth/AuthWrapper";
import { createComment, deleteComment } from "../../services/post";

const Comment = ({ comment, level, onDeleteComment }) => {
    const { user } = AuthData();
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [nestedReplies, setNestedReplies] = useState(comment.replies || []); // Local state for nested replies

    const handleReplyToggle = () => {
        setShowReplyBox(!showReplyBox);
    };

    const parseContent = (content) => {
        const parts = content.split(/(@\w+)/); // Split by '@' followed by a word
        return parts
            .filter((part) => part.trim() !== "")
            .map((part) => {
                if (part.startsWith("@")) {
                    return { type: "tag", value: part };
                }
                return { type: "text", value: part };
            });
    };

    const handleReplySubmit = async () => {
        if (!replyText.trim()) return;

        const commentPayload = {
            content: parseContent(replyText),
            postID: comment.postID, // Use the postID from the comment
            parentCommentID: comment.id, // The current comment's ID as the parent
        };

        try {
            const token = localStorage.getItem("authToken");
            const response = await createComment(commentPayload, token); // Add reply via API

            if (response && response.isSuccessful) {
                const newReply = {
                    id: response.id, // Use the ID returned by the API
                    content: commentPayload.content,
                    createdBy: user.name,
                    creationDate: new Date().toISOString(), // Approximate creation date
                    replies: [], // New comments initially have no replies
                    postID: comment.postID,
                    parentCommentID: comment.id,
                };

                setReplyText(""); // Clear the input field
                setShowReplyBox(false); // Hide reply box
                setNestedReplies((prevReplies) => [...prevReplies, newReply]); // Add the new reply locally
            } else {
                alert("Failed to add reply.");
            }
        } catch (error) {
            console.error("Error adding reply:", error);
            alert("Error adding reply.");
        }
    };

    const handleDelete = async () => {
        if (!user.isAuthenticated) {
            alert("Please log in to delete this comment.");
            return;
        }

        try {
            const token = localStorage.getItem("authToken");
            const commentPayload = { commentId: comment.id }; // Payload with the comment ID
            const response = await deleteComment(commentPayload, token); // Call deleteComment API

            if (response && response.isSuccessful) {
                alert("Comment deleted successfully.");
                onDeleteComment(comment.id); // Notify parent to remove this comment
            } else {
                alert("Failed to delete comment.");
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
            alert("Error deleting comment.");
        }
    };

    const createCommentContent = (content) => {
        if (!content || !Array.isArray(content)) return "No content available";

        return content.map((item, index) => {
            if (item.type === "text") {
                return <span key={index}>{item.value} </span>;
            }
            if (item.type === "tag") {
                return (
                    <span key={index} style={{ color: "blue" }}>
                        {item.value}{" "}
                    </span>
                );
            }
            return null;
        });
    };

    return (
        <div className={styles.comment} style={{ marginLeft: `${level * 20}px` }}>
            <div className={styles.commentHeader}>
                <h5>{comment.createdBy || "Anonymous"}</h5>
                <span>{new Date(comment.creationDate).toLocaleString()}</span>
                {user.isAuthenticated && comment.createdBy === user.name && (
                    <button
                        className={styles.deleteButton}
                        onClick={handleDelete}
                        title="Delete comment"
                    >
                        🗑️
                    </button>
                )}
            </div>
            <p className={styles.commentText}>{createCommentContent(comment.content)}</p>
            {user.isAuthenticated && (
                <button onClick={handleReplyToggle} className={styles.replyButton}>
                    {showReplyBox ? "Cancel" : "Reply"}
                </button>
            )}

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

            {/* Render nested replies */}
            {nestedReplies.length > 0 && (
                <div className={styles.nestedComments}>
                    {nestedReplies.map((nestedComment) => (
                        <Comment
                            key={nestedComment.id}
                            comment={nestedComment}
                            level={level + 1}
                            onDeleteComment={(childId) => {
                                setNestedReplies((prevReplies) =>
                                    prevReplies.filter((reply) => reply.id !== childId)
                                );
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;
