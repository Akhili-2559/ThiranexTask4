import { Link } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <nav className="navbar">

      <div className="logo">
        Blogify 🚀
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        {
          token && (

            <Link to="/create">
              Create Post
            </Link>
            
          )
        }

        {
          !token ? (

            <>

              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Signup
              </Link>

            </>

          ) : (

            <>
<Link to="/myblogs">
  My Blogs
</Link>
              <span className="username">
                👤 {user?.name}
              </span>

              <button
                className="logout-btn"
                onClick={() => {

                  localStorage.clear();

                  window.location.reload();

                }}
              >
                Logout
              </button>

            </>

          )
        }

      </div>

    </nav>

  );

}

export default Navbar;