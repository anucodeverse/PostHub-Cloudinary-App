import PostForm from "../components/PostForm";
import { createPost } from "../services/api";
function CreatePost() {
  const handleAddPost = async (post) => {
    try {
      await createPost({
        ...post,
        authorId: "6a30ece2f1a10c5ffeea17fa",
      });

      alert("✅ Post Created Successfully!");
    } 
    catch (error) {
      console.error("Create post error:", error);
      alert(error.message || "Something went wrong while creating post");
    }
  };

  return (
    <div className="create-page">
      <div className="create-container">
        <h1>Create New Post</h1>
        <p>Share your story with the community.</p>
        <PostForm onAddPost={handleAddPost} />
      </div>
    </div>
  );
}

export default CreatePost;
