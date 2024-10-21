import React, { useState, useEffect } from "react";
import Post from "../components/structure/Post";
import Comment from "../components/structure/comment";
import mockData from "../data/mockData";
import "./styles/PostPage.css";
import { useParams } from "react-router-dom";

const PostPage = () => {
    const { name, postId } = useParams();  // Get the name and postId from the URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        let allPosts = mockData.subforums.flatMap(subforum => subforum.posts);
        
        if (name) {
            // Filter posts based on the subforum name if provided
            const filteredPosts = mockData.subforums
                .filter(subforum => subforum.name.toLowerCase() === name.toLowerCase())
                .flatMap(subforum => subforum.posts);
            allPosts = filteredPosts;
        }
        
        // Find the post based on the postId
        const foundPost = allPosts.find(p => p.id === parseInt(postId));
        setPost(foundPost);  // Set the post state with the found post
    }, [name, postId]);

    // Add a condition to handle when the post is still being fetched or not found
    if (!post) {
        return <h3>Loading post or post not found...</h3>;
    }

    return (
        <div className="post-page">
            <Post post={post} />  {/* Render the Post component with the specific post */}
                {post.comments && post.comments.length > 0 ? (
                    post.comments.map((comment, index) => (
                        <Comment
                            key={index}
                            username={comment.username}
                            text={comment.content}
                        />
                    ))
                ) : (
                    <p>No comments yet. Be the first to comment!</p>
                )}
        </div>
    );
};

export default PostPage;
