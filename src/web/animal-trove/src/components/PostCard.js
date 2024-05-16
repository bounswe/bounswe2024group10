import React, { useContext, useState } from "react";
import styles from "./PostCard.module.css";
import { authContext } from "../context/AuthContext";

import {
  likePost,
  unlikePost,
  undislikePost,
  dislikePost,
  bookmarkPost,
  unbookmarkPost,
} from "../services/postActions";
import { toast } from "react-toastify";
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

function PostCard(props) {
  const maxDescriptionLength = 10;
  const {
    id,
    owner,
    image,
    name,
    likes: defaultLikes,
    isLiked: defaultIsLiked,
    comments,
    dislikes: defaultDislikes,
    location,
    isDisliked: defaultIsDisliked,
    isBookmarked: defultIsBookmarked,
    isReported: defaultIsReported,
    date,
    description,
  } = props;

  const [isLiked, setIsLiked] = useState(defaultIsLiked);
  const [isDisliked, setIsDisliked] = useState(defaultIsDisliked);
  const [isBookmarked, setIsBookmarked] = useState(defultIsBookmarked);
  const [isReported, setIsReported] = useState(defaultIsReported);
  const [likes, setLikes] = useState(defaultDislikes);
  const [dislikes, setDislikes] = useState(defaultLikes);
  const { user } = useContext(authContext);
  const userName = user?.userName; // will be used in requests

  function truncateText(text, maxLength) {
    const wordArray = text.split(" ");
    if (wordArray.length > maxLength) {
      return wordArray.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  }

  const handleLike = async () => {
    const originallyLiked = isLiked;
    const originallyDisliked = isDisliked;
    const originallyLikes = likes;
    const originallyDislikes = dislikes;
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    if (isDisliked) {
      setIsDisliked(false);
      setDislikes(dislikes - 1);
    }

    try {
      if (!originallyDisliked) {
        const response = originallyLiked
          ? await unlikePost({ username: userName, postId: id })
          : await likePost({ username: userName, postId: id });
        if (!response.success) throw new Error(response.message);
      } else {
        const [likeResponse, undislikeResponse] = await Promise.all([
          likePost({ username: userName, postId: id }),
          undislikePost({ username: userName, postId: id }),
        ]);
        if (!likeResponse.success || !undislikeResponse.success)
          throw new Error(likeResponse.message || undislikeResponse.message);
      }
    } catch (error) {
      setIsLiked(originallyLiked);
      setIsDisliked(originallyDisliked);
      setLikes(originallyLikes);
      setDislikes(originallyDislikes);
      toast.error(error.message);
    }
  };

  const handleDislike = async () => {
    const originallyDisliked = isDisliked;
    const originallyLiked = isLiked;
    const originallyLikes = likes;
    const originallyDislikes = dislikes;
    setIsDisliked(!isDisliked);
    if (!isDisliked) {
      setDislikes(dislikes + 1);
    } else {
      setDislikes(dislikes - 1);
    }
    if (isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    }

    try {
      if (!originallyLiked) {
        const response = originallyDisliked
          ? await undislikePost({ username: userName, postId: id })
          : await dislikePost({ username: userName, postId: id });
        if (!response.success) throw new Error(response.message);
      } else {
        const [dislikeResponse, unlikeResponse] = await Promise.all([
          dislikePost({ username: userName, postId: id }),
          unlikePost({ username: userName, postId: id }),
        ]);
        if (!dislikeResponse.success || !unlikeResponse.success)
          throw new Error(dislikeResponse.message || unlikeResponse.message);
      }
    } catch (error) {
      setIsDisliked(originallyDisliked);
      setIsLiked(originallyLiked);
      setLikes(originallyLikes);
      setDislikes(originallyDislikes);
      toast.error(error.message);
    }
  };

  const handleBookmark = async () => {
    const originallyIsBookmarked = isBookmarked;
    setIsBookmarked(!isBookmarked);
    try {
      if (!originallyIsBookmarked) {
        const response = await bookmarkPost({ username: userName, postId: id });
        if (!response.success) throw new Error(response.message);
      } else {
        const response = await unbookmarkPost({
          username: userName,
          postId: id,
        });
        if (!response.success) throw new Error(response.message);
      }
    } catch (error) {
      setIsBookmarked(!isBookmarked);
      toast.error(error.message);
    }
  };

  function handleReport() {
    setIsReported(!isReported);
  }

  return (
    <div>
      <div className={styles.postCard}>
        <div className={styles.userInfo}>
          <div className={styles.avatarContainer}>
            <img className={styles.avatar} src={owner.avatar} alt="avatar" />
          </div>
          <div className={styles.username}>{owner.username}</div>
        </div>
        <div className={styles.blurLine}></div>
        <div className={styles.postInfo}>
          <img className={styles.image} src={image} alt="post" />
          <div className={styles.postDetails}>
            <div className={styles.name}>{name}</div>
            <div className={styles.location}>{"@" + location}</div>
            <hr style={{ width: "100%", borderColor: "c5d6c4" }} />

            <div className={styles.description}>
              {truncateText(description, maxDescriptionLength)}
            </div>
          </div>
        </div>
        <div className={styles.postActions}>
          <div className={styles.action} onClick={handleLike}>
            {isLiked ? (
              <IconThumbUpFilled size={24} />
            ) : (
              <IconThumbUp size={24} />
            )}
            <span>{likes}</span>
          </div>
          <div className={styles.action} onClick={handleDislike}>
            {isDisliked ? (
              <IconThumbDownFilled size={24} />
            ) : (
              <IconThumbDown size={24} />
            )}
            <span>{dislikes}</span>
          </div>
          <div className={styles.action}>
            <IconMessageCircle size={24} />
            <span>{comments}</span>
          </div>
          <div className={styles.action}>
            {isBookmarked ? (
              <IconBookmarkFilled size={24} onClick={handleBookmark} />
            ) : (
              <IconBookmark size={24} onClick={handleBookmark} />
            )}
          </div>
          <div className={styles.action} onClick={handleReport}>
            {isReported ? <IconFlagFilled size={24} /> : <IconFlag size={24} />}
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
