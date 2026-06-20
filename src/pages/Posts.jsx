import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/api";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load posts.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) return;

    try {
      await deletePost(id);

      setPosts(
        posts.filter((post) => post._id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Failed to delete post.");
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="container">
        <h2 className="loading">
          Loading posts...
        </h2>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="container">
        <h2 className="error">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="container">

      <h1>📚 All Posts</h1>

      {posts.length === 0 ? (
        <h3 className="empty-state">
          No posts available.
        </h3>
      ) : (
        <div className="grid">
          {posts.map((post) => (
            <div
              key={post._id}
              className="post-card"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="post-image"
                />
              )}

              <div className="post-body">
                <h3>{post.title}</h3>

                <p>{post.content}</p>

                <p className="author">
                  👤{" "}
                  {post.authorId?.name ||
                    "Admin"}
                </p>

                <button
                  onClick={() =>
                    handleDelete(post._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Posts;