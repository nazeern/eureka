import Link from "next/link";
import { PostWithEncodedId, selectPosts } from "../lib/posts";
import { Tables } from "../lib/types";
import { LightBulbIcon, BoltSlashIcon } from "@heroicons/react/24/outline";

export default async function PostsComponent() {
  const posts = await selectPosts();

  if (!posts) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="min-w-96 w-[1024px] max-w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => {
          return (
            <Link
              className="flex flex-col border border-primary shadow rounded-3xl p-8 hover:border-complement transition hover:-translate-y-1"
              key={post.id}
              href={`/posts/${post.encodedId}`}
            >
              <p className="text-lg md:text-xl font-semibold min-w-0">
                {post.title}
              </p>
              <p
                className="text-ellipsis overflow-y-hidden line-clamp-2
              text-sm md:text-base"
              >
                {post.body}
              </p>
              <div className="flex flex-col mt-auto gap-4 self-start pt-6 -mb-2">
                <p>{post.encodedId}</p>
                <p>{post.id}</p>
                {/* <LightBulbIcon className="w-6" />
                <p>{post.upvotes}</p>
                <BoltSlashIcon className="w-6" />
                <p>{post.downvotes}</p> */}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
