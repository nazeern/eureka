import { insertComment } from "@/app/lib/comments";
import { selectPost } from "@/app/lib/posts";
import FormButton from "@/app/ui/form-button";

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
      {/* Post main body */}
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

      {/* Add post comment */}
      <form className="min-w-96 w-6/12 p-4 rounded-3xl shadow border border-primary mb-4">
        <input id="postId" name="postId" value={post.id} type="hidden" />
        <textarea
          id="body"
          name="body"
          placeholder="Your Comment Here..."
          required
          className="w-full bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2 mb-2"
        />
        <FormButton
          className="-mb-0"
          action={insertComment}
          loadingText="Adding Comment..."
        >
          Add Comment
        </FormButton>
      </form>

      {/* Post comments */}
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
