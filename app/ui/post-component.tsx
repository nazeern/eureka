import { ResolvedPost } from "../lib/posts";
import Post from "./post";
import { makeid } from "@/app/lib/utils";

export default async function PostsComponent({
  posts,
}: {
  posts: ResolvedPost[] | null;
}) {
  if (!posts) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="min-w-96 w-[1024px] max-w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    );
  }
}
