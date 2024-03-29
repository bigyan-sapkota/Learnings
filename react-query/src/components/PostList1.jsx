import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";

const PostList1 = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval: 1000,
  });

  if (postsQuery.status === "loading") return <h1>Loading...</h1>;
  if (postsQuery.status === "error") {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <>
      <h1>Posts List 1</h1>
      <ol>
        {postsQuery.data ? (
          postsQuery.data.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <h1>No Data Available</h1>
        )}
      </ol>
    </>
  );
};

export default PostList1;
