import AllPosts from "../../components/Posts/AllPosts";
import { getAllPosts } from "../../helpers/post-util";

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
