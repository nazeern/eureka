import { selectPost } from "@/app/lib/posts";

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) {
  const post = await selectPost(postId);
  return (
    <>
      <p>{post ? post.title : "No post found"}</p>
    </>
  );
}
