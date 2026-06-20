import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts, getUsers } from "../services/api";

function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const postsData = await getPosts();
        const usersData = await getUsers();

        setPosts(postsData);
        setUsers(usersData);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1>✨ Share Your Stories With The World</h1>

        <p>
          Create amazing posts, upload images,
          and connect with your community.
        </p>

        <div className="hero-buttons">
          <Link to="/create">
            <button className="primary-btn">
              Create Post
            </button>
          </Link>

          <Link to="/posts">
            <button>
              Explore Posts
            </button>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>📝 Total Posts</h3>
          <p>{posts.length}</p>
        </div>

        <div className="stat-card">
          <h3>👥Total Users</h3>
          <p>{users.length}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>📝 Create Posts</h3>
          <p>Publish content with images.</p>
        </div>

        <div className="feature-card">
          <h3>☁️ Cloudinary Uploads</h3>
          <p>Store images securely.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Performance</h3>
          <p>Built with React and Node.js.</p>
        </div>
      </section>

      <footer className="footer">
        <p>
          © 2026 PostHub | Built with React,
          Express, MongoDB & Cloudinary
        </p>
      </footer>
    </div>
  );
}

export default Home;