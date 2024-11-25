import React, { useState, useEffect } from "react";
import Post from "../components/structure/Post";
import Comment from "../components/structure/comment";
import { getPost, createComment } from "../services/post";
import styles from "./styles/PostPage.module.css";
import { useParams } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";


const PostPage = () => {
    const { user } = AuthData();
    const { parentId, postId } = useParams();
    const [post, setPost] = useState(null);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPost(postId);
            if (data.isSuccessful) {
                setPost(data.post);
            }
        };
        fetchPost();

    }, [postId]);

    const handleNewCommentChange = (e) => {
        setNewComment(e.target.value);
    };

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


    const handleNewCommentSubmit = async () => {
        if (!newComment.trim()) return;

        const commentPayload = {
            username: user.name,
            parentID: postId,
            content: [...parseContent(newComment)]
        };


        try {
            const response = await createComment(commentPayload); // Add comment via API
            if (response.successful) {
                setNewComment(""); // Clear the input field
            } else {
                alert("Failed to add comment.");
            }
        } catch (error) {
            console.error("Error adding comment:", error);
            alert("Error adding comment.");
        }
    };

    // Add a condition to handle when the post is still being fetched or not found
    if (!post) {
        return <h3 style={{ paddingLeft: "200px" }}
        >Loading post or post not found...</h3>;
    }

    return (
        <div className={styles.postPage}>
            <Post post={post} />  {/* Render the Post component with the specific post */}
            <div className={styles.newCommentSection}>
                <textarea
                    value={newComment}
                    onChange={handleNewCommentChange}
                    placeholder="Write a comment..."
                    className={styles.newCommentInput}
                />
                <button
                    onClick={handleNewCommentSubmit}
                    className={styles.newCommentButton}
                >
                    Comment
                </button>
            </div>
            {post.comments && post.comments.length > 0 ? (
                post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} level={0} />
                ))
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}
        </div>
    );
};

export default PostPage;
