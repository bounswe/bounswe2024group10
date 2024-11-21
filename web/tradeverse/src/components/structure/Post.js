import styles from "../styles/post.module.css";
import React from "react";
import { AuthData } from "../../auth/AuthWrapper";

const Post = ({ post, onLike, onDislike }) => {
  console.log(post);
  const { user } = AuthData();

  const handleLike = () => {
    if (user.isAuthenticated) {
      onLike(post.id);
    } else {
      alert("Please log in to like this post.");
    }
  };

  const handleDislike = () => {
    if (user.isAuthenticated) {
      onDislike(post.id);
    } else {
      alert("Please log in to dislike this post.");
    }
  };

  return (
    <div className={styles.post}>
      <div className={styles.userAndTag}>
        <div className={styles.userDetailsContainer}>
          <img src={post.author.avatar} className={styles.userImage} />
          <div className={styles.userDetails}>
            <h3>{`${post.author.name} ${post.author.surname}`}</h3>
            <p>{`@${post.username}`}</p>
          </div>
        </div>
        <div className={styles.postHeaderTag}>
          <p>{post.tags[0]}</p>
        </div>
      </div>
      <div className={styles.postHeaderDetails}>
        <h2>{post.description}</h2>
        <p>{post.content}</p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.commentLikeDislikeStats}>
          <div className={styles.stat}>
            <p className="fa fa-comment" aria-hidden="true"></p>
            <p>{post.commentCount}</p>
          </div>
          <div className={styles.stat}>
            <p className="fa fa-thumbs-up" aria-hidden="true"></p>
            <p>{post.likeCount}</p>
          </div>
          <div className={styles.stat}>
            <p className="fa fa-thumbs-down" aria-hidden="true"></p>
            <p>{post.dislikeCount}</p>
          </div>
        </div>
      </div>
    </div>
    // <div className={styles.post}>
    //     <div className={styles.userDetailsContainer}>
    //         <div className={styles.userImage}>
    //             <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"  className="userImage" />
    //         </div>
    //         <div className={styles.userDetails}>
    //             <h3>{post.username}</h3>
    //             <p>{post.time} |    {post.date}  </p>
    //         </div>

    //     </div>

    //     <div className={styles.postDetails}>

    //         <h2>{post.description}</h2>
    //         {post.image!=null &&
    //             <div className={styles.postImageContainer}>
    //                 <img src={post.image} alt="Post" className={styles.postImage} />
    //             </div>
    //         }
    //         <p>{post.content}</p>

    //         {/* Like, Dislike, Comment buttons */}
    //         <div className={styles.bottomContainer}>
    //             <div className={styles.tags}>
    //             {post.tags.map((tag, index) => (
    //                 <span key={index} className={styles.tag}>
    //                     {tag}
    //                 </span>
    //             ))}
    //             </div>
    //             <div className={styles.postActions}>
    //                 <button className={styles.likeButton}>
    //                     <FontAwesomeIcon icon={faArrowUp} onClick={handleLike}/> {post.likeCount}
    //                 </button>
    //                 <button className={styles.dislikeButton} onClick={handleDislike}>
    //                     <FontAwesomeIcon icon={faArrowDown} /> {post.dislikeCount}
    //                 </button>
    //                 <button className={styles.commentButton}>
    //                     <FontAwesomeIcon icon={faComment} /> {post.commentCount}
    //                 </button>
    //             </div>
    //         </div>

    //     </div>
    // </div>
  );
};

export default Post;
