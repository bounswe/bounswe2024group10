
import React from "react";
import "../styles/postHeader.css"


const PostHeader = ({post}) => {
    return (
        <div className="postHeader">
            <h3>{post.description}</h3> {/* Use the field you want to display as the header, e.g., post.title */}
            <p>Posted by {post.username} on {post.date}</p>
        </div>
    );
}

export default PostHeader