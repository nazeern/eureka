import Link from "next/link";
import { selectPosts } from "../lib/posts";
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
              <div className="flex gap-x-2 mt-auto pt-6 -mb-2 items-center">
                <LightBulbIcon className="w-6" />
                <p>{post.countLikes}</p>
                <BoltSlashIcon className="w-6" />
                <p>{post.countDislikes}</p>
                <p className="ml-auto font-light text-sm mt-1">
                  By {post.author}
                </p>
                <div
                  className="border border-primary bg-yellow-100 rounded-full size-8 text-center pt-1
                  text-primary hover:border-complement"
                >
                  {post.author[0]}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
