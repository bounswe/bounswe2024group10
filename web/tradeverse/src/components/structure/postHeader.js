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
  return (
    <div className="postHeader">
      <Link to={`/${post.forumName.toLowerCase()}/${post.id}`} className="postLink">
        <div className="postInfo">
          <h3>{post.description}</h3>{" "}
          <p>
            Posted by {post.username} on {post.date}
          </p>
        </div>
      </Link>
      <div className="postStats">
        <p>
          <FontAwesomeIcon icon={faThumbsUp} /> {post.likeCount}
        </p>
        <p>
          <FontAwesomeIcon icon={faComments} /> {post.commentCount}
        </p>
      </div>
    </div>
  );
};

export default PostHeader;
