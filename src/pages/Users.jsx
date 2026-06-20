import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="container">
        <h2 className="loading">
          Loading users...
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

      <div className="page-header">
        <h1>👥 Registered Users</h1>
        <p>
          Manage and view all platform users.
        </p>
      </div>

      {users.length === 0 ? (
        <h3 className="empty-state">
          No users found.
        </h3>
      ) : (
        <div className="users-grid">
          {users.map((user) => (
            <div
              key={user._id}
              className="user-card"
            >
              <div className="user-avatar">
                👤
              </div>

              <h3>{user.name}</h3>

              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Users;