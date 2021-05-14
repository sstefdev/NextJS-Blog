import PostsGrid from "../Posts/PostsGrid";
import styles from "./FeaturedPosts.module.css";

const FeaturedPosts = (props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
