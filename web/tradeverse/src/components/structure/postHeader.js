import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles/postHeader.css";

const PostHeader = ({ post }) => {
    return (
        <div className="postHeader">
            {/* Use Link to direct to another page */}
            <h3>
                <Link to={`/${post.forumName.toLowerCase()}/${post.id}`} className="postLink"> {/* Navigate to post-specific page */}
                    {post.description}
                </Link>
            </h3>
            <p>Posted by {post.username} on {post.date}</p>
        </div>
    );
}

export default PostHeader;
