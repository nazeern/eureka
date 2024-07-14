import { selectPosts } from "@/app/lib/posts";
import AddPost from "@/app/ui/add-post";
import PostsComponent from "@/app/ui/post-component";

export default async function PostsPage() {
  const posts = await selectPosts();

  return (
    <>
      <AddPost />
      <PostsComponent posts={posts} />
    </>
  );
}
