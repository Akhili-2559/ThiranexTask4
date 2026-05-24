import { useEffect, useState } from "react";

import axios from "axios";

import {
  useNavigate,
  useParams
} from "react-router-dom";

function EditPost() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState({
    title:"",
    content:""
  });

  useEffect(() => {

    fetchPost();

  }, []);

  const fetchPost = async () => {

    const res = await axios.get(
      `http://localhost:7100/api/posts/${id}`
    );

    setPost(res.data);

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.put(
      `http://localhost:7100/api/posts/${id}`,
      post
    );

    alert("Post Updated 🚀");

    navigate("/");

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>
          Edit Blog ✍️
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            value={post.title}
            onChange={(e)=>
              setPost({
                ...post,
                title:e.target.value
              })
            }
          />

          <textarea
            rows="8"
            value={post.content}
            onChange={(e)=>
              setPost({
                ...post,
                content:e.target.value
              })
            }
          />

          <button className="auth-btn">
            Update Blog
          </button>

        </form>

      </div>

    </div>

  );

}

export default EditPost;