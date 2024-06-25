import { selectPost } from "@/app/lib/posts";

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) {
  const post = await selectPost(postId);

  if (!post) {
    return (
      <div className="min-w-96 w-6/12 bg-white rounded-3xl shadow p-10 border border-complement bg-opacity-25 mb-4">
        <p className="text-3xl font-bold mb-4">Failed to load post...</p>
      </div>
    );
  }

  const username = post.profiles?.username ?? "deleted";
  const comments = post.comments;

  return (
    <>
      <div className="min-w-96 w-6/12 bg-white rounded-3xl shadow p-10 border border-complement bg-opacity-25 mb-12">
        <div className="flex gap-x-2 mb-4 items-center">
          <div
            className="border border-primary bg-yellow-100 rounded-full size-8 text-center align-middle pt-1
            text-primary hover:border-complement"
          >
            {username[0]}
          </div>
          <p className="text-xs">By {username}</p>
        </div>
        <p className="text-left text-3xl font-bold mb-4">
          {post ? post.title : "No post found"}
        </p>
        <p className="text-left">{post ? post.body : "No post found"}</p>
      </div>
      {comments.map((comment) => {
        const commenterName = comment.profiles?.username ?? "deleted";

        return (
          <div
            key={comment.id}
            className="min-w-96 w-6/12 bg-white rounded-3xl shadow px-10 py-6 border border-primary bg-opacity-25 mb-4"
          >
            <div className="flex gap-x-2 mb-4 items-center">
              <div
                className="border border-primary bg-yellow-100 rounded-full size-8 text-center align-middle pt-1
            text-primary hover:border-complement"
              >
                {commenterName[0]}
              </div>
              <p className="text-xs">By {commenterName}</p>
            </div>
            {comment.body}
          </div>
        );
      })}
    </>
  );
}
