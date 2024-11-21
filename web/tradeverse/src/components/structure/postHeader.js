import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUser,
  faCalendarAlt,
  faThumbsUp,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/postHeader.css";

const PostHeader = ({ post }) => {
  console.log("POST:", post);

  return (
    <div className="post-header">
      <div className="user-and-tag">
        <div className="user-details-container">
          <img src={post.author.avatar} className="user-image" />
          <div className="user-details">
            <h3>{`${post.author.name} ${post.author.surname}`}</h3>
            <p>{`@${post.username}`}</p>
          </div>
        </div>
        <div className="post-header-tag">
          <p>{post.tags[1]}</p>
        </div>
      </div>
      <Link to={`/${post.forumName.toLowerCase()}/${post.id}`} className="post-link">
      <div className="post-header-details">
        <h2>{post.description}</h2>
        <p>{post.content}</p>
      </div>
      <div className="bottom-container">
        <div className="view-stats">
          <p class="fa fa-eye" aria-hidden="true"></p>
          <p>{post.viewCount}</p>
        </div>
        <div className="comment-like-dislike-stats">
          <div className="stat">
            <p class="fa fa-comment" aria-hidden="true"></p>
            <p>{post.commentCount}</p>
          </div>
          <div className="stat">
            <p class="fa fa-thumbs-up" aria-hidden="true"></p>
            <p>{post.likeCount}</p>
          </div>
          <div className="stat">
            <p class="fa fa-thumbs-down" aria-hidden="true"></p>
            <p>{post.dislikeCount}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default PostHeader;
