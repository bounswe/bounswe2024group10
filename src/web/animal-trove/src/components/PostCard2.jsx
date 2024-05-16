import React, { useContext, useState } from "react";
import styles from "./PostCard2.module.css";
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
import { modalsContext } from "../context/ModalsContext";

function PostCard2({ post }) {
  const { openPostModal } = useContext(modalsContext);

  function truncateText(text, maxLength) {
    const wordArray = text.split(" ");
    if (wordArray.length > maxLength) {
      return wordArray.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.topContainer}
        style={{
          backgroundImage: `url(${post?.image})`,
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.imageShadow}></div>
        <div className={styles.bookMarkContainer}>
          <IconBookmark className={styles.bookMark} strokeWidth={1.5} />
        </div>
        <div className={styles.imageBottomContainer}>
          <div className={styles.userContainer}>
            <img
              className={styles.userAvatar}
              src={post?.owner?.avatar}
              alt=""
            />
            <span className={styles.username}>{post?.owner?.username}</span>
          </div>
          <div className={styles.actionsContainer}>
            <div className={styles.action}>
              <IconThumbUp strokeWidth={1.5} color="white" size={20} />
              <span>32</span>
            </div>
            <div className={styles.action}>
              <IconThumbUp strokeWidth={1.5} size={20} />
              <span>32</span>
            </div>
            <div className={styles.action}>
              <IconThumbUp strokeWidth={1.5} size={20} />
              <span>32</span>
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
            <h3 className={styles.title}>{post?.name}</h3>
            <div className={styles.location}>{post?.location}</div>
          </div>
          <div className={styles.descriptionContainer}>{post?.description}</div>
        </div>
        <div className={styles.dateContainer}>{post?.date}</div>
      </div>
    </div>
  );
}

export default PostCard2;
