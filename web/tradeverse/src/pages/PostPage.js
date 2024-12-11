import React, { useState, useEffect } from "react";
import Post from "../components/structure/Post";
import Comment from "../components/structure/comment";
import { getPost, createComment ,getComments} from "../services/post";
import styles from "./styles/PostPage.module.css";
import { useParams } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";


const PostPage = () => {
    const { user } = AuthData();
    const { parentId, postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]); // State to store comments
    const [newComment, setNewComment] = useState("");
    const [loadingPost, setLoadingPost] = useState(true); // Loading state for post
    const [loadingComments, setLoadingComments] = useState(true); // Loading state for comments

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const data = await getPost(postId, token,user.isAuthenticated);
                if (data && data.id && data.title && data.content) {
                    setPost(data);
                } else {
                    console.error("Invalid post data received:", data);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoadingPost(false);
            }
        };

        const fetchComments = async () => {
            try {
                
                const data = await getComments(postId); // Fetch comments
                if (Array.isArray(data)) {
                    setComments(data); // Set comments if the response is an array
                } else {
                    console.error("Invalid comments data received:", data);
                }
            } catch (error) {
                console.error("Error fetching comments:", error);
            } finally {
                setLoadingComments(false);
            }
        };

        fetchPost();
        fetchComments();
    }, [postId,user.isAuthenticated]);

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
            content: parseContent(newComment),
            postID: postId,
            parentCommentID: null, // Top-level comment
        };

        try {
            const token = localStorage.getItem("authToken");
            const response = await createComment(commentPayload, token); // Add comment via API
            if (response && response.isSuccessful) {
                const newAddedComment = {
                    id: response.id,
                    content: commentPayload.content,
                    createdBy: user.name,
                    creationDate: new Date().toISOString(),
                    replies: [],
                    postID: postId,
                    parentCommentID: null,
                };
                setComments((prevComments) => [...prevComments, newAddedComment]); // Add new comment to the list
                setNewComment(""); // Clear the input field
            } else {
                alert("Failed to add comment.");
            }
        } catch (error) {
            console.error("Error adding comment:", error);
            alert("Error adding comment.");
        }
    };
    const refreshComments = async () => {
        try {
            const data = await getComments(postId); // Fetch updated comments from API
            if (Array.isArray(data)) {
                setComments(data); // Update comments state
            } else {
                console.error("Invalid comments data received:", data);
            }
        } catch (error) {
            console.error("Error refreshing comments:", error);
        }
    };

    // Add a condition to handle when the post is still being fetched or not found
    if (loadingPost) {
        return <h3>Loading post...</h3>;
    }

    if (!post) {
        return <h3>Post not found.</h3>;
    }

    return (
        <div className={styles.postPage}>
            <Post post={post} />  {/* Render the Post component with the specific post */}
            {user.isAuthenticated ? (
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
            ) : (
                <p className={styles.authMessage}>
                    
                </p>
            )}
            {loadingComments ? (
                <h3>Loading comments...</h3>
            ) : comments.length > 0 ? (
                comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} level={0} refreshComments={refreshComments}  />
                ))
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}
        </div>
    );
};

export default PostPage;
