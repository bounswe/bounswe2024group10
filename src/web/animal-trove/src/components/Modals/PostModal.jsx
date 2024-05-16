import React from "react";
import ModalWrapper from "./ModalWrapper";
import {
  IconBookmark,
  IconFlag,
  IconMessageCircle,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import styles from "./PostModal.module.css";
export default function PostModal({ post, isOpened, onClose }) {
  // {
  //   id: 1,
  //   owner: {
  //     avatar: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  //     username: "admin_account",
  //   },
  //   image:
  //     "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
  //   name: "Caretta Caretta",
  //   likes: 32,
  //   isLiked: false,
  //   comments: 2,
  //   dislikes: 32,
  //   isDisliked: false,
  //   isSaved: false,
  //   isReported: false,
  //   location: "Turkey/Yozgat",
  //   date: "2021-04-12",
  //   description:
  //     "The loggerhead sea turtle, or Caretta caretta, is a species of oceanic turtle distributed throughout the world. It is a marine reptile, belonging to the family Cheloniidae. The average loggerhead measures around 90 cm in carapace length when fully grown. The adult loggerhead sea turtle weighs approximately 135 kg, with the largest specimens weighing in at more than 450 kg.",
  // },
  return (
    <ModalWrapper isOpened={isOpened} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img className={styles.postImage} src={post?.image} alt="post" />
          <div className={styles.actionsContainer}>
            <div className={styles.action}>
              <IconThumbUp size={24} />
              <span>{post?.likes}</span>
            </div>
            <div className={styles.action}>
              <IconThumbDown size={24} />
              <span>{post?.dislikes}</span>
            </div>
            <div className={styles.action}>
              <IconMessageCircle size={24} />
              <span>{post?.comments}</span>
            </div>
            <div className={styles.action}>
              <IconBookmark size={24} />
            </div>
            <div className={styles.action}>
              <IconFlag size={24} />
            </div>
          </div>
        </div>
        <div className={styles.commentsContainer}>
          <div className={styles.comments}>
            <div className={styles.caption}>
              <div className={styles.avatarContainer}>
                <img
                  className={styles.postOwnerAvatar}
                  src={post?.owner?.avatar}
                  alt="avatar"
                />
              </div>
              <div className={styles.commentContent}>
                <div className={styles.username}>{post?.owner?.username}</div>
                <div className={styles.commentText}>{post?.description}</div>
              </div>
            </div>
            <div style={{ width: "100%", marginTop: "32px" }}>
              <h4>Comments</h4>
              <div
                style={{
                  backgroundColor: "#ddd",
                  width: "100%",
                  height: "2px",
                }}
              ></div>
            </div>
            {
              // comments.map((comment) => (
              //   <div className={styles.comment}>
              //     <div className={styles.avatarContainer}>
              //       <img src={comment.owner.avatar} alt="avatar" />
              //     </div>
              //     <div className={styles.commentContent}>
              //       <div className={styles.username}>{comment.owner.username}</div>
              //       <div className={styles.commentText}>{comment.text}</div>
              //     </div>
              //   </div>
              // ))
            }
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
