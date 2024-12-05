import React, { useContext, useState } from "react";
import styles from "./PostCard2.module.css";
import mockData from "../constants/mockData";
import {
  getLikeCount,
  getDislikeCount,
  getActionDetails,
  likePost,
  unlikePost,
  dislikePost,
  undislikePost,
  bookmarkPost,
  unbookmarkPost,
} from "../services/postAction";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext";
import {
  IconThumbUp,
  IconThumbUpFilled,
  IconThumbDownFilled,
  IconThumbDown,
  IconMessageCircle,
  IconBookmark,
  IconBookmarkFilled,
  IconFlag,
  IconFlagFilled,
} from "@tabler/icons-react";
import { modalsContext } from "../context/ModalsContext";
import { formatDate } from "../utils";

function PostCard2({ post }) {
  const { openPostModal } = useContext(modalsContext);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { user } = useContext(authContext);
  const username = user?.userName; // will be used in requests
  const { postModal } = useContext(modalsContext);
  function truncateText(text, maxLength) {
    const wordArray = text.split(" ");
    if (wordArray.length > maxLength) {
      return wordArray.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const likeData = await getLikeCount({ postID: post.postID });
        setLikeCount(likeData.likeCount);

        const dislikeData = await getDislikeCount({ postID: post.postID });
        setDislikeCount(dislikeData.likeCount);
        const actionDetails = await getActionDetails({
          username: username,
          postID: post.postID,
        });
        setIsLiked(actionDetails.liked);
        setIsDisliked(actionDetails.disliked);
        setIsBookmarked(actionDetails.bookmarked);
      } catch (error) {
        console.log("Error fetching post data", error);
      }
    }

    fetchData();
  }, [post.postId, post.username, postModal]);

  const handleLike = async () => {
    if (!user) {
      toast.error("You need to log in to like posts.");
      return;
    }
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
          ? await unlikePost({ username: username, postID: post.postID })
          : await likePost({ username: username, postID: post.postID });
        if (!response.success) throw new Error(response.message);
      } else {
        const [likeResponse, undislikeResponse] = await Promise.all([
          likePost({ username: username, postID: post.postID }),
          undislikePost({ username: username, postID: post.postID }),
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
    if (!user) {
      toast.error("You need to log in to dislike posts.");
      return;
    }
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
          ? await undislikePost({ username: username, postID: post.postID })
          : await dislikePost({ username: username, postID: post.postID });
        if (!response.success) throw new Error(response.message);
      } else {
        const [dislikeResponse, unlikeResponse] = await Promise.all([
          dislikePost({ username: username, postID: post.postID }),
          unlikePost({ username: username, postID: post.postID }),
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
    if (!user) {
      toast.error("You need to log in to bookmark posts.");
      return;
    }
    const originallyIsBookmarked = isBookmarked;
    setIsBookmarked(!isBookmarked);
    try {
      if (!originallyIsBookmarked) {
        const response = await bookmarkPost({
          username: username,
          postID: post.postID,
        });
        if (!response.success) throw new Error(response.message);
      } else {
        const response = await unbookmarkPost({
          username: username,
          postID: post.postID,
        });
        if (!response.success) throw new Error(response.message);
      }
    } catch (error) {
      setIsBookmarked(!isBookmarked);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.topContainer}
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${post?.media})`,
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.imageShadow}></div>
        <div className={styles.bookMarkContainer} onClick={handleBookmark}>
          {isBookmarked ? (
            <IconBookmarkFilled className={styles.bookMark} strokeWidth={1.5} />
          ) : (
            <IconBookmark className={styles.bookMark} strokeWidth={1.5} />
          )}
        </div>
        <div className={styles.imageBottomContainer}>
          <div className={styles.userContainer}>
            <img
              className={styles.userAvatar}
              src={post?.owner?.avatar ?? "/images/avatar.png"}
              alt=""
            />
            <span className={styles.username}>{post?.username}</span>
          </div>
          <div className={styles.actionsContainer}>
            <div className={styles.action} onClick={handleLike}>
              {!isLiked ? (
                <IconThumbUp strokeWidth={1.5} color="white" size={20} />
              ) : (
                <IconThumbUpFilled strokeWidth={1.5} size={20} />
              )}
              <span>{likeCount}</span>
            </div>
            <div className={styles.action} onClick={handleDislike}>
              {isDisliked ? (
                <IconThumbDownFilled strokeWidth={1.5} size={20} />
              ) : (
                <IconThumbDown strokeWidth={1.5} size={20} />
              )}
              <span>{dislikeCount}</span>
            </div>
            <div className={styles.action}>
              <IconMessageCircle strokeWidth={1.5} size={20} />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          openPostModal({ post });
        }}
        className={styles.bottomContainer}
      >
        <div>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{post?.animalName}</h3>
            <div className={styles.location}>{post?.location}</div>
          </div>
          <div className={styles.descriptionContainer}>{post?.caption}</div>
        </div>
        <div className={styles.dateContainer}>
          {formatDate(post?.photoDate)}
        </div>
      </div>
    </div>
  );
}

export default PostCard2;
