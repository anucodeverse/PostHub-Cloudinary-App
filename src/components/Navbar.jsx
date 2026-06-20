import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        📝 PostHub
      </div>

      <nav>
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/posts">
          Posts
        </NavLink>

        <NavLink to="/create">
          Create Post
        </NavLink>

        <NavLink to="/users">
          Users
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;