import AddPost from "@/app/ui/add-post";
import { BlurTop, BlurBottom } from "@/app/ui/blur";
import Navbar from "@/app/ui/navbar";
import PostsComponent from "@/app/ui/post-component";

export default function PostsPage() {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BlurTop />
        <div className="h-screen bg-background flex flex-col items-center my-20">
          <AddPost />
          <PostsComponent />
        </div>
        <BlurBottom />
      </div>
    </div>
  );
}
