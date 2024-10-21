import '../styles/Post.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,faArrowUp,faArrowDown,faChartLine } from '@fortawesome/free-solid-svg-icons';
import { AuthData } from '../../auth/AuthWrapper';
import { Link } from 'react-router-dom';
const Post = ({ post , onLike, onDislike}) => {
    const { user } = AuthData(); // Access user context

    const handleLike = () => {
        if (user.isAuthenticated) {
            onLike(post.id); // Call the onLike function passed from Home
        } else {
            alert("Please log in to like this post.");
        }
    };

    const handleDislike = () => {
        if (user.isAuthenticated) {
            onDislike(post.id); // Call the onDislike function passed from Home
        } else {
            alert("Please log in to dislike this post.");
        }
    };



    return (
        <div className="post">
            <div className='forum-name'>
                <Link to={'/subforums/${post.forumName}'} className='forum-link'>
                    <span className='forum-font'>-/{post.forumName}</span>
                </Link>
            </div>
            <div className='user-details-container'>
                <div className='user-image'>
                    <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"  className="userImage" />
                </div>
                <div className='user-details'>
                    <h3>{post.username}</h3>
                    <p>{post.time} |    {post.date}  </p>
                </div>

            </div>
            {post.image!=null &&
            <div className='post-image-container'>
                <img src={post.image} alt="Post" className="postImage" />
            </div>
            }
            
            <div className="postDetails">
                
                <p>{post.description}</p>
                

                {/* Like, Dislike, Comment buttons */}
                <div className='bottom-container'>
                    <div className='tags'>
                    {post.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                    </div>
                    <div className="postActions">
                        <button className="likeButton">
                            <FontAwesomeIcon icon={faArrowUp} onClick={handleLike}/> {post.likeCount}
                        </button>
                        <button className="dislikeButton" onClick={handleDislike}>
                            <FontAwesomeIcon icon={faArrowDown} /> {post.dislikeCount}
                        </button>
                        <button className="commentButton">
                            <FontAwesomeIcon icon={faComment} /> {post.commentCount}
                        </button>
                    </div>
                </div>

                {/* Comments */}
                
            </div>
        </div>
    );
};

export default Post;