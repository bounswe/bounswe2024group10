import styles from "../styles/post.module.css";
import React, { useState } from "react";
import ChartContainer from "./TradingViewWidget";
import { AuthData } from "../../auth/AuthWrapper";
import { likePost, unlikePost } from "../../services/like";
import { dislikePost, undislikePost } from "../../services/dislike";
import { createAnnotation } from "../../services/annotation";
import { toast } from "react-toastify";
import defaultUserImage from "../../data/defaultUserImage.jpeg";
import { Link } from "react-router-dom";

const Post = ({ post, selectedAnnotation, refetchAnnotations }) => {
  const { user } = AuthData();
  const [isLiked, setIsLiked] = useState(post.isLikedByUser);
  const [isDisliked, setIsDisliked] = useState(post.isDislikedByUser);
  const [nofLikes, setNofLikes] = useState(post.likeCount);
  const [nofDislikes, setNofDislikes] = useState(post.dislikeCount);

  const [selectedText, setSelectedText] = useState(""); // Selected text
  const [annotationContent, setAnnotationContent] = useState(""); // Annotation content
  const [selectionRange, setSelectionRange] = useState(null); // Text selection range
  const [showAnnotationInput, setShowAnnotationInput] = useState(false); // To toggle annotation input
  const [floatingPosition, setFloatingPosition] = useState({ top: 0, left: 0 }); // Position for the floating UI

  const handleLike = async () => {
    if (!user.isAuthenticated) {
      alert("Please log in to like this post.");
      return;
    }

    try {
      if (isLiked) {
        // Unlike the post
        const token = localStorage.getItem("authToken");
        const response = await unlikePost(token, post.id);
        if (response?.successful) {
          setNofLikes((prev) => Math.max(prev - 1, 0)); // Ensure likes don't go below zero
          setIsLiked(false);
        }
      } else {
        // Like the post
        const token = localStorage.getItem("authToken");
        const response = await likePost(token, post.id);
        if (response?.successful) {
          setNofLikes((prev) => prev + 1);
          setIsLiked(true);

          // If the post is disliked, undo the dislike
          if (isDisliked) {
            setNofDislikes((prev) => Math.max(prev - 1, 0));
            setIsDisliked(false);
          }
        }
      }
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  const handleDislike = async () => {
    if (!user.isAuthenticated) {
      alert("Please log in to dislike this post.");
      return;
    }

    try {
      if (isDisliked) {
        // Remove dislike
        const token = localStorage.getItem("authToken");
        const response = await undislikePost(token, post.id);
        if (response?.successful) {
          setNofDislikes((prev) => prev - 1); // Ensure dislikes don't go below zero
          setIsDisliked(false);
        }
      } else {
        // Dislike the post
        const token = localStorage.getItem("authToken");
        const response = await dislikePost(token, post.id);
        if (response?.successful) {
          setNofDislikes((prev) => prev + 1);
          setIsDisliked(true);

          // If the post is liked, undo the like
          if (isLiked) {
            setNofLikes((prev) => prev - 1);
            setIsLiked(false);
          }
        }
      }
    } catch (error) {
      console.error("Error handling dislike:", error);
    }
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setSelectedText(text);
      setSelectionRange({ start: range.startOffset, end: range.endOffset });
      setFloatingPosition({ top: rect.bottom + window.scrollY, left: rect.right + window.scrollX });
      setShowAnnotationInput(false); // Reset annotation input visibility
    } else {
      setSelectedText("");
      setSelectionRange(null);
    }
  };

  const handleAnnotationSubmit = async () => {
    if (!annotationContent.trim()) {
      toast.error("Please enter annotation content.");
      return;
    }

    if (!selectionRange) {
      toast.error("No text selected for annotation.");
      return;
    }

    const annotationPayload = {
      type: "Annotation",
      creator: user.name,
      body: {
        type: "TextualBody",
        value: annotationContent,
      },
      target: {
        type: "SpecificResource",
        source: window.location.href,
        postId: post.id,
        commentId: null,
        selector: {
          type: "TextPositionSelector",
          start: selectionRange.start,
          end: selectionRange.end,
        },
      },
    };

    try {
      const response = await createAnnotation(annotationPayload);
      if (response) {
        toast.success("Annotation created successfully.");
        await refetchAnnotations()
        setAnnotationContent("");
        setSelectedText("");
        setSelectionRange(null);
        setShowAnnotationInput(false);
      }
    } catch (error) {
      console.error("Error creating annotation:", error);
      toast.error("Failed to create annotation.");
    }
  };


  const createPostContent = (content) => {
    const postContent = content
      .filter((item) => item.type === "text" || item.type === "tag") // Filter for 'text' and 'tag' types
      .map((item) => item.value) // Extract the value of these fields
      .join(" "); // Concatenate them with a space

    return postContent;
  };

  const highlightPostContent = (content) => {
    if (!selectedAnnotation || !selectedAnnotation.target.selector) return content;

    const { start, end } = selectedAnnotation.target.selector;
    const before = content.slice(0, start);
    const highlighted = content.slice(start, end);
    const after = content.slice(end);

    return (
      <>
        {before}
        <span className={styles.highlighted}>{highlighted}</span>
        {after}
      </>
    );
  };

  return (
    <div className={styles.post} onMouseUp={handleTextSelection}>
      <div className={styles.userAndTag}>
        <div className={styles.userDetailsContainer}>
          <img
            src={post.author.profilePhoto ? post.author.profilePhoto : defaultUserImage}
            className={styles.userImage}
          />
          <div className={styles.userDetails}>
            <h3>{`${post.author.name}`}</h3>
            <p>{`@${post.createdBy}`}</p>
          </div>
        </div>
        <div className={styles.postHeaderTag}>
          <p>
            <Link to={`/tag/${post.content.find((item) => item.type === "tag")?.value}`} className={styles.tagLink}>
            {post.content.find((item) => item.type === "tag")?.value}
            </Link>
            <Link to={`/subforum/${post.subforum.id}`} className={styles.subforumLink}>
              <span className={styles.subforumName}> | {post.subforum.name}</span>
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.postDetails}>
        <h2>{post.title}</h2>
        <div className={styles.postImageContainer}>
          {post.content.find((item) => item.type === "image")?.value && (
            <img
              src={`http://35.246.188.121:8080/api/images/${post.content.find((item) => item.type === "image")?.value}`}
              className={styles.postImage}
              alt="Post Image"
            />
          )}
        </div>
        <p>{highlightPostContent(createPostContent(post.content))}</p>
        
        {selectedText && user.isAuthenticated && (
          <>
            {/* Small symbol */}
            <div
              className={styles.annotationSymbol}
              style={{ top: floatingPosition.top, left: floatingPosition.left }}
            >
              <button onClick={() => { setShowAnnotationInput(true); }}>
                🖋
              </button>

            </div>
            {showAnnotationInput && (
              <div
                className={styles.annotationInputContainer}
                style={{
                  position: "absolute",
                  top: floatingPosition.top + 20,
                  left: floatingPosition.left - 150,
                }}
                onMouseUp={(e) => e.stopPropagation()}
              >
                <textarea
                  placeholder="Write your annotation..."
                  value={annotationContent}
                  onChange={(e) => setAnnotationContent(e.target.value)}
                  className={styles.annotationInput}
                />
                <button onClick={handleAnnotationSubmit} className={styles.annotationButton}>
                  Submit
                </button>
              </div>
            )}
          </>
        )}
        <ChartContainer symbol={post.content.find((item) => item.type === "chart")?.value} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.actionContainer}>
          <div className={styles.action}>
            <button
              className={`fa fa-thumbs-up ${isLiked ? styles.activeLike : ""}`}
              aria-hidden="true"
              onClick={handleLike}
            ></button>
            <p>{nofLikes}</p>
          </div>
          <div className={styles.action}>
            <button
              className={`fa fa-thumbs-down ${isDisliked ? styles.activeDislike : ""}`}
              aria-hidden="true"
              onClick={handleDislike}
            ></button>
            <p>{nofDislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
