"use client";

import { LightBulbIcon, BoltSlashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { deletePostAction, insertPostAction } from "../lib/post_actions";
import { ResolvedPost } from "../lib/posts";
import { useState } from "react";

export default function Post({
  key,
  post,
}: {
  key: string;
  post: ResolvedPost;
}) {
  const likeAction = post.userLikedPost ? deletePostAction : insertPostAction;
  const dislikeAction = post.userDislikedPost
    ? deletePostAction
    : insertPostAction;

  function optimisticLikeUpdate() {
    let sign = 0;
    if (postState.userLikedPost) {
      sign = -1;
    } else {
      sign = 1;
    }
    setPostState({
      ...postState,
      countLikes: postState.countLikes + sign,
      userLikedPost: !postState.userLikedPost,
    });
  }

  function optimisticDislikeUpdate() {
    let sign = 0;
    if (postState.userDislikedPost) {
      sign = -1;
    } else {
      sign = 1;
    }
    setPostState({
      ...postState,
      countDislikes: postState.countDislikes + sign,
      userDislikedPost: !postState.userDislikedPost,
    });
  }

  const [postState, setPostState] = useState(post);

  return (
    <div
      className="flex flex-col border border-primary shadow rounded-3xl p-8 hover:border-complement transition hover:-translate-y-1"
      key={postState.id}
    >
      <Link href={`/posts/${postState.encodedId}`}>
        <p className="text-lg md:text-xl font-semibold min-w-0">
          {postState.title}
        </p>
        <p
          className="text-ellipsis overflow-y-hidden line-clamp-2
              text-sm md:text-base"
        >
          {postState.body}
        </p>
      </Link>
      <div className="flex gap-x-2 mt-auto pt-6 -mb-2 items-center">
        <form>
          <button
            formAction={likeAction}
            className="flex gap-x-1 rounded-xl hover:bg-orange-100 p-1"
            onClick={optimisticLikeUpdate}
          >
            <LightBulbIcon
              className={clsx("w-6", {
                "text-primary": postState.userLikedPost,
              })}
            />
            <p>{postState.countLikes}</p>
            <input id="action" name="action" value="1" type="hidden" />
            <input
              id="post_id"
              name="post_id"
              value={postState.id}
              type="hidden"
            />
          </button>
        </form>
        <form>
          <button
            formAction={dislikeAction}
            className="flex gap-x-1 rounded-xl hover:bg-blue-100 p-1"
            onClick={optimisticDislikeUpdate}
          >
            <BoltSlashIcon
              className={clsx("w-6", {
                "text-complement": postState.userDislikedPost,
              })}
            />
            <p>{postState.countDislikes}</p>
            <input id="action" name="action" value="-1" type="hidden" />
            <input
              id="post_id"
              name="post_id"
              value={postState.id}
              type="hidden"
            />
          </button>
        </form>

        <p className="ml-auto font-light text-sm mt-1">By {postState.author}</p>
        <div
          className="border border-primary bg-yellow-100 rounded-full size-8 text-center pt-1
                  text-primary hover:border-complement"
        >
          {postState.author[0]}
        </div>
      </div>
    </div>
  );
}
