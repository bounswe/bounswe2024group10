import React, { useState } from "react";
import styles from "./PostCard.module.css";
import mockData from "../constants/mockData";
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
    likes,
    isLiked: defaultIsLiked,
    comments,
    dislikes,
    location,
    isDisliked: defaultIsDisliked,
    isSaved: defaultIsSaved,
    isReported: defaultIsReported,
    date,
    description,
  } = props;

  const [isLiked, setIsLiked] = useState(defaultIsLiked);
  const [isDisliked, setIsDisliked] = useState(defaultIsDisliked);
  const [isSaved, setIsSaved] = useState(defaultIsSaved);
  const [isReported, setIsReported] = useState(defaultIsReported);

  function truncateText(text, maxLength) {
    const wordArray = text.split(" ");
    if (wordArray.length > maxLength) {
      return wordArray.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  }

  function handleLike() {
    if (isDisliked && !isLiked) {
      setIsDisliked(false);
    }
    setIsLiked(!isLiked);
  }

  function handleDislike() {
    if (isLiked && !isDisliked) {
      setIsLiked(false);
    }
    setIsDisliked(!isDisliked);
  }
  function handleSave() {
    setIsSaved(!isSaved);
  }
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
            <span>{likes + (isLiked ? 1 : 0)}</span>
          </div>
          <div className={styles.action} onClick={handleDislike}>
            {isDisliked ? (
              <IconThumbDownFilled size={24} />
            ) : (
              <IconThumbDown size={24} />
            )}
            <span>{dislikes + (isDisliked ? 1 : 0)}</span>
          </div>
          <div className={styles.action}>
            <IconMessageCircle size={24} />
            <span>{comments}</span>
          </div>
          <div className={styles.action}>
            {isSaved ? (
              <IconBookmarkFilled size={24} onClick={handleSave} />
            ) : (
              <IconBookmark size={24} onClick={handleSave} />
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
