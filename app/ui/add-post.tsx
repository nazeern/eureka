import { insertPost } from "@/app/lib/posts";
import FormButton from "./form-button";

export default function AddPost() {
  return (
    <div className="min-w-96 w-6/12 bg-white rounded-3xl shadow p-10 border border-complement bg-opacity-25">
      <p className="text-2xl font-bold mb-4">Have a great idea?</p>
      <form>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Post Title..."
          required
          className="block w-full bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2 mb-3"
        />
        <textarea
          id="body"
          name="body"
          placeholder="Your Idea Here..."
          required
          className="block w-full h-36 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2 mb-3"
        />
        <FormButton action={insertPost} loadingText="Posting...">
          Post
        </FormButton>
      </form>
    </div>
  );
}
