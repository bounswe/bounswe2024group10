import React from 'react';
import '../styles/comment.css';  // Ensure you have a CSS file for styling

const Comment = ({ username, text }) => {
    return (
        <div className="comment">
            <div className='comment-user-details'>
                <div className='comment-user-info'>
                    <h5>{username}</h5>
                </div>
            </div>
            <p className="commentText">{text}</p>
        </div>
    );
};

export default Comment;
