import { useState, useRef  } from "react";

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();
 const handleSubmit = (e) => {
  e.preventDefault();

  if (!title.trim() || !content.trim()) {
    alert("Title and Content are required");
    return;
  }

  onAddPost({
    title,
    content,
    image: image || null, // safe fallback
  });

  setTitle("");
  setContent("");
  setImage(null);

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
};

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Create Post</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
  type="file"
  accept="image/*"
  ref={fileInputRef}
  onChange={(e) => setImage(e.target.files[0])}
/>

      <button type="submit">
        Create Post
      </button>
    </form>
  );
}

export default PostForm;