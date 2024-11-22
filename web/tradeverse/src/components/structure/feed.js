import PostHeader from "./postHeader";
import styles from "../styles/feed.module.css";

const Feed = ({ posts }) => {
  return (
    <div className={styles.feed}>
      <div className={styles.postHeaders}>
        {posts.map((post) => (
          <PostHeader key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
