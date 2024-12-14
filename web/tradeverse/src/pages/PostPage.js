import React, { useState, useEffect } from "react";
import Post from "../components/structure/Post";
import Comment from "../components/structure/comment";
import Annotation from "../components/structure/annotation";
import { getPost, createComment, getComments } from "../services/post";
import styles from "./styles/PostPage.module.css";
import { useParams } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { getAnnotations } from "../services/annotation";


const PostPage = () => {
    const { user } = AuthData();
    const { parentId, postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]); // State to store comments
    const [newComment, setNewComment] = useState("");
    const [loadingPost, setLoadingPost] = useState(true); // Loading state for post
    const [loadingComments, setLoadingComments] = useState(true); // Loading state for comments
    const [commentIds, setCommentIds] = useState([]); // State to store comment IDs
    const [annotations, setAnnotations] = useState([]); // State to store annotations

    const [selectedPostAnnotation, setSelectedPostAnnotation] = useState(null); // To track the selected annotation
    const [selectedCommentAnnotation, setSelectedCommentAnnotation] = useState(null); // To track the selected annotation

    const handleAnnotationClick = (annotation) => {
        if (annotation.target.postId) {
            if (selectedPostAnnotation?.id === annotation.id) {
                setSelectedPostAnnotation(null);
            } else {
                setSelectedPostAnnotation(annotation);
                setSelectedCommentAnnotation(null);
            }
        } else if (annotation.target.commentId) {
            if (selectedCommentAnnotation?.id === annotation.id) {
                setSelectedCommentAnnotation(null);
            } else {
                setSelectedCommentAnnotation(annotation);
                setSelectedPostAnnotation(null);
            }
        }
    };


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const data = await getPost(postId, token, user.isAuthenticated);
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

                    // Recursive function to collect all comment IDs
                    const collectCommentIds = (comments) => {
                        let ids = [];
                        for (const comment of comments) {
                            ids.push(comment.id); // Add the current comment ID
                            if (Array.isArray(comment.replies) && comment.replies.length > 0) {
                                ids = ids.concat(collectCommentIds(comment.replies)); // Recursively collect reply IDs
                            }
                        }
                        return ids;
                    };

                    const allCommentIds = collectCommentIds(data); // Collect all IDs from top-level and nested replies
                    console.log("All Comment IDs:", allCommentIds);
                    setCommentIds(allCommentIds); // Store all comment IDs in state
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
    }, [postId, user.isAuthenticated]);

    const fetchAnnotations = async () => {
        try {
            console.log("Fetching annotations for post:", postId, "with comment IDs:", commentIds);
            const data = await getAnnotations(postId, commentIds); // Fetch annotations
            setAnnotations(data.items);
            console.log("Annotations:", data.items);
        } catch (error) {
            console.error("Error fetching annotations:", error);
        }
    };

    useEffect(() => {
        fetchAnnotations();
    }, [postId, commentIds]);

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
        <div className={styles.postGeneral}>
            <div className={styles.postContainer}>
                <div className={styles.postPage}>
                    <Post post={post} selectedAnnotation={selectedPostAnnotation} refetchAnnotations={fetchAnnotations} />  {/* Render the Post component with the specific post */}
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
                            <Comment key={comment.id} comment={comment} level={0} refreshComments={refreshComments} selectedAnnotation={selectedCommentAnnotation} refetchAnnotations={fetchAnnotations} />
                        ))
                    ) : (
                        <p>No comments yet. Be the first to comment!</p>
                    )}
                </div>
            </div>
            {annotations.length > 0 && (
                <div className={styles.annotationContainer}>
                    <h3>Annotations</h3>
                    {annotations.map((annotation) => (
                        <Annotation
                            key={annotation.id}
                            annotation={annotation}
                            onClick={() => handleAnnotationClick(annotation)}
                            isSelected={(selectedPostAnnotation?.id === annotation.id) || (selectedCommentAnnotation?.id === annotation.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostPage;
