import { useQuery } from "@tanstack/react-query";
import { getPost } from "./posts.js";
import { getUser } from "./user.js";

export default function Post({ id }) {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

  if (postQuery.status === "loading") return <h1>Loading...</h1>;
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <div>
      <h1>{postQuery.title}</h1>
      <small>
        {postQuery.userId}
        {useQuery.isLoading
          ? "Loading User..."
          : useQuery.isError
          ? "Error Loading User"
          : useQuery.name}
      </small>
      <p>{postQuery.body}</p>
    </div>
  );
}
