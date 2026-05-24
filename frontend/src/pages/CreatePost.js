import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function CreatePost() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [post, setPost] = useState({
    title:"",
    content:"",
    image:"",
    category:"Technology"
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(
      "http://localhost:7100/api/posts",
      {
        ...post,
        author:user.name
      }
    );

    alert("Blog Published 🚀");

    navigate("/");

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>Create Blog ✍️</h1>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Blog Title"
            onChange={(e)=>
              setPost({
                ...post,
                title:e.target.value
              })
            }
          />

          <textarea
            rows="8"
            placeholder="Write blog..."
            onChange={(e)=>
              setPost({
                ...post,
                content:e.target.value
              })
            }
          />

          <input
            placeholder="Paste Image URL"
            onChange={(e)=>
              setPost({
                ...post,
                image:e.target.value
              })
            }
          />

          <select
            onChange={(e)=>
              setPost({
                ...post,
                category:e.target.value
              })
            }
          >

            <option>
              Technology
            </option>

            <option>
              Travel
            </option>

            <option>
              Food
            </option>

            <option>
              Education
            </option>

          </select>

          <button className="auth-btn">
            Publish Blog
          </button>

        </form>

      </div>

    </div>

  );

}

export default CreatePost;