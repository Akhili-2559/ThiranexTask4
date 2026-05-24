import axios from "axios";

import { useNavigate } from "react-router-dom";

function BlogCard({ post, refreshPosts }) {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const deletePost = async () => {

    await axios.delete(
      `http://localhost:7100/api/posts/${post.id}`
    );

    refreshPosts();

  };

  const likePost = async () => {

    await axios.put(
      `http://localhost:7100/api/posts/${post.id}`,
      {
        ...post,
        likes:(post.likes || 0) + 1
      }
    );

    refreshPosts();

  };

  return (

    <div className="post-card">

      <img
        src={
          post.image ||
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
        }
        alt=""
      />

      <div className="post-content">

        <span className="category">
          {post.category}
        </span>

        <h2>
          {post.title}
        </h2>

        <p>
          {post.content}
        </p>

        <small>
          ✍️ {post.author}
        </small>

        <div className="post-footer">

          <button
            className="btn like-btn"
            onClick={likePost}
          >
            ❤️ {post.likes || 0}
          </button>

          {
            user?.name === post.author && (

              <div
                style={{
                  display:"flex",
                  gap:"10px"
                }}
              >

                <button
                  className="btn edit-btn"
                  onClick={() =>
                    navigate(`/edit/${post.id}`)
                  }
                >
                  Edit
                </button>

                <button
                  className="btn delete-btn"
                  onClick={deletePost}
                >
                  Delete
                </button>

              </div>

            )
          }

        </div>

      </div>

    </div>

  );

}

export default BlogCard;