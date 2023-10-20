import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";

export default function Post({ id }) {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPosts(id),
  });

  const userQuery = useQuery({
    queryKey: ["users", postQuery?.data?.userId],
    enabled: postQuery?.data?.userId != null,
    queryFn: () => getUser(postQuery.data.userId),
  });

  if (postQuery.status === "loading") return <h1>Loading...</h1>;
  if (postQuery.status === "error") {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }

  return (
    <>
      <h1>This is a post</h1>
      {postQuery.data.title}
      <br />
      {
        <small>
          {postQuery.data.userId}
          {userQuery.isLoading
            ? "Loading User..."
            : userQuery.isError
            ? "Error Loading User"
            : userQuery.data.name}
        </small>
      }
    </>
  );
}
