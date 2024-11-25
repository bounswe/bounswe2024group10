import React, { useContext, useEffect, useRef, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import {
  IconBookmark,
  IconFlag,
  IconMessageCircle,
  IconPlus,
  IconThumbDown,
  IconThumbDownFilled,
  IconThumbUp,
  IconThumbUpFilled,
} from "@tabler/icons-react";
import styles from "./PostModal.module.css";
import { getCommentsByPostID, makeComment } from "../../services/comments";
import { authContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import {
  bookmarkPost,
  dislikePost,
  getActionDetails,
  getDislikeCount,
  getLikeCount,
  likePost,
  unbookmarkPost,
  undislikePost,
  unlikePost,
} from "../../services/postAction";
export default function PostModal({ post, isOpened, onClose }) {
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const { user } = useContext(authContext);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [addCommentMode, setAddCommentMode] = useState(false);
  const commentInputRef = useRef();

  useEffect(() => {
    if (addCommentMode) {
      commentInputRef.current.focus();
    }
  }, [commentInputRef, addCommentMode]);
  useEffect(() => {
    console.log(commentContent);
  }, [commentContent]);

  const fetchComments = async () => {
    // fetch comments from server

    const likeData = await getLikeCount({ postID: post?.postID });
    setLikeCount(likeData.likeCount);

    const dislikeData = await getDislikeCount({ postID: post?.postID });
    setDislikeCount(dislikeData.likeCount);
    const actionDetails = await getActionDetails({
      username: user?.userName,
      postID: post?.postID,
    });
    console.log(actionDetails);
    setIsLiked(actionDetails.liked);
    setIsDisliked(actionDetails.disliked);
    i;
    setIsBookmarked(actionDetails.bookmarked);
    try {
      setCommentsLoading(true);
      const result = await getCommentsByPostID({
        postID: post?.postID,
        username: post.username,
      });
      console.log(result);
      if (result) {
        setComments(result.comments);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setCommentsLoading(false);
    }
  };

  const handleMakeComment = async (text) => {
    if (!text) {
      toast.error("Comment cannot be empty");
      return;
    }
    try {
      setCommentsLoading(true);
      const res = await makeComment({
        username: user?.userName,
        postID: post?.postID,
        description: commentContent,
      });
      if (res) {
        toast.success("Comment posted successfully");
        fetchComments();
        setCommentContent("");
        setAddCommentMode(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to make comment");
    } finally {
      setCommentsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [post, isOpened]);

  const handleLike = async () => {
    const originallyLiked = isLiked;
    const originallyDisliked = isDisliked;
    const originallyLikes = likeCount;
    const originallyDislikes = dislikeCount;
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    if (isDisliked) {
      setIsDisliked(false);
      setDislikeCount(dislikeCount - 1);
    }

    try {
      if (!originallyDisliked) {
        const response = originallyLiked
          ? await unlikePost({ username: user.userName, postID: post?.postID })
          : await likePost({ username: user.userName, postID: post?.postID });
        if (!response.success) throw new Error(response.message);
      } else {
        const [likeResponse, undislikeResponse] = await Promise.all([
          likePost({ username: user.userName, postID: post?.postID }),
          undislikePost({ username: user.userName, postID: post?.postID }),
        ]);
        if (!likeResponse.success || !undislikeResponse.success)
          throw new Error(likeResponse.message || undislikeResponse.message);
      }
    } catch (error) {
      setIsLiked(originallyLiked);
      setIsDisliked(originallyDisliked);
      setLikeCount(originallyLikes);
      setDislikeCount(originallyDislikes);
      toast.error(error.message);
    }
  };

  const handleDislike = async () => {
    const originallyDisliked = isDisliked;
    const originallyLiked = isLiked;
    const originallyLikes = likeCount;
    const originallyDislikes = dislikeCount;
    setIsDisliked(!isDisliked);
    if (!isDisliked) {
      setDislikeCount(dislikeCount + 1);
    } else {
      setDislikeCount(dislikeCount - 1);
    }
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    }

    try {
      if (!originallyLiked) {
        const response = originallyDisliked
          ? await undislikePost({
              username: user.userName,
              postID: post?.postID,
            })
          : await dislikePost({
              username: user.userName,
              postID: post?.postID,
            });
        if (!response.success) throw new Error(response.message);
      } else {
        const [dislikeResponse, unlikeResponse] = await Promise.all([
          dislikePost({ username: user.userName, postID: post?.postID }),
          unlikePost({ username: user.userName, postID: post?.postID }),
        ]);
        if (!dislikeResponse.success || !unlikeResponse.success)
          throw new Error(dislikeResponse.message || unlikeResponse.message);
      }
    } catch (error) {
      setIsDisliked(originallyDisliked);
      setIsLiked(originallyLiked);
      setLikeCount(originallyLikes);
      setDislikeCount(originallyDislikes);
      toast.error(error.message);
    }
  };

  const handleBookmark = async () => {
    const originallyIsBookmarked = isBookmarked;
    setIsBookmarked(!isBookmarked);
    try {
      if (!originallyIsBookmarked) {
        const response = await bookmarkPost({
          username: user.userName,
          postID: post?.postID,
        });
        if (!response.success) throw new Error(response.message);
      } else {
        const response = await unbookmarkPost({
          username: user.userName,
          postID: post?.postID,
        });
        if (!response.success) throw new Error(response.message);
      }
    } catch (error) {
      setIsBookmarked(!isBookmarked);
      toast.error(error.message);
    }
  };

  return (
    <ModalWrapper isOpened={isOpened} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img
            className={styles.postImage}
            src={`data:image/jpeg;base64,${post?.media}`}
            alt="post"
          />
          <div className={styles.actionsContainer}>
            <div onClick={handleLike} className={styles.action}>
              {!isLiked ? (
                <IconThumbUp strokeWidth={1.5} size={20} />
              ) : (
                <IconThumbUpFilled strokeWidth={1.5} size={20} />
              )}
              <span>{likeCount}</span>
            </div>
            <div onClick={handleDislike} className={styles.action}>
              {isDisliked ? (
                <IconThumbDownFilled strokeWidth={1.5} size={20} />
              ) : (
                <IconThumbDown strokeWidth={1.5} size={20} />
              )}
              <span>{dislikeCount}</span>
            </div>
            {/* //TODO:COMMENT HANDLE */}
            <div
              onClick={() => {
                setAddCommentMode(true);
              }}
              className={styles.action}
            >
              <IconMessageCircle strokeWidth={1.5} size={20} />
            </div>
            <div onClick={handleBookmark} className={styles.action}>
              <IconBookmark size={24} />
            </div>
          </div>
        </div>
        <div className={styles.commentsContainer}>
          <div className={styles.comments}>
            <div className={styles.caption}>
              <div className={styles.avatarContainer}>
                <img
                  className={styles.postOwnerAvatar}
                  src={post?.owner?.avatar ?? "/images/avatar.png"}
                  alt="avatar"
                />
              </div>
              <div className={styles.commentContent}>
                <div className={styles.username}>{user?.userName}</div>
                <div className={styles.commentText}>{post?.description}</div>
              </div>
            </div>
            <div style={{ width: "100%", marginTop: "32px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h4>Comments</h4>
                <div
                  onClick={() => setAddCommentMode(!addCommentMode)}
                  className={styles.plusBtn}
                >
                  <div
                    style={{
                      transition: "transform 0.3s",
                      transform: addCommentMode
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <IconPlus />
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#ddd",
                  width: "100%",
                  height: "2px",
                }}
              ></div>
            </div>
            {addCommentMode && (
              <div
                className={"animate-fade-in-up " + styles.addCommentContainer}
              >
                <textarea
                  ref={commentInputRef}
                  //No text decoration and outlines, just bottom border
                  style={{
                    border: "none",
                    outline: "none",
                    resize: "none",
                    width: "100%",

                    padding: "8px",
                    marginBottom: "8px",
                  }}
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  placeholder="Add a comment..."
                ></textarea>
                <button
                  style={{
                    padding: "2px 16px",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    maxHeight: "32px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    outline: "none",
                  }}
                  onClick={() => handleMakeComment(commentContent)}
                >
                  Comment
                </button>
              </div>
            )}
            <div className={styles.commentScrollContainer}>
              {!commentsLoading &&
                comments &&
                comments.map((comment) => {
                  console.log(comment);
                  return (
                    <div className={styles.comment}>
                      <div className={styles.avatarContainer}>•</div>
                      <div className={styles.commentContent}>
                        <div className={styles.commentText}>
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {comment.username}
                          </span>{" "}
                          <br />
                          <p>{comment.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
