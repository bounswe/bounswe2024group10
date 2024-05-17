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

function PostCard2({ post }) {
  const { openPostModal } = useContext(modalsContext);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { user } = useContext(authContext);
  const username = user?.userName; // will be used in requests

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
          username: post.username,
          postID: post.postID,
        });
        console.log(actionDetails);
        setIsLiked(actionDetails.isLiked);
        setIsDisliked(actionDetails.isDisliked);
        setIsBookmarked(actionDetails.isBookmarked);
      } catch (error) {
        console.error("Error fetching post data", error);
      }
    }

    fetchData();
  }, [post.postId, post.username]);

  const handleLike = async () => {
    try {
      if (isLiked) {
        setLikeCount((prev) => prev - 1);
        const response = await unlikePost({ username, postId: post.postID });
        if(!response.success) {
          setLikeCount((prev) => prev + 1);
        }
        
      }
      if (!isLiked) {
        setLikeCount((prev) => prev + 1);
        const response = await likePost({ username, postId: post.postID });
        if(!response.success) {
          setLikeCount((prev) => prev - 1);
        }
      }
      setIsLiked(!isLiked);
    }
    catch (error) {
      console.error("Error liking post", error);
      toast.error("Failed to like post");
    }
  }

  const handleDislike = async () => {
  }

  const handleBookmark = async () => {
  }

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
              src={post?.owner?.avatar}
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
        <div className={styles.dateContainer}>{post?.photoDate}</div>
      </div>
    </div>
  );
}

export default PostCard2;
