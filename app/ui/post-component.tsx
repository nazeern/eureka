import { selectPosts } from "../lib/posts";
import { Tables } from "../lib/types";

export default async function PostsComponent() {
  const posts = await selectPosts();

  if (!posts) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {posts.map((post: Tables<"posts">) => {
          return <div key={post.id}>{JSON.stringify(post)}</div>;
        })}
      </div>
    );
  }
}
