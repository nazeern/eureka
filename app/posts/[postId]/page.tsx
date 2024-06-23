import { selectPost } from "@/app/lib/posts";
import { BlurTop, BlurBottom } from "@/app/ui/blur";
import Navbar from "@/app/ui/navbar";

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) {
  const post = await selectPost(postId);
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BlurTop />
        <div className="h-screen bg-background flex flex-col items-center my-20">
          <p>{post ? post.title : "No post found"}</p>
        </div>
        <BlurBottom />
      </div>
    </div>
  );
}
