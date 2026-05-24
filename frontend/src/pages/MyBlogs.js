import { useEffect, useState } from "react";

import axios from "axios";

import BlogCard from "../components/BlogCard";

function MyBlogs() {

  const [posts, setPosts] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    fetchMyPosts();

  }, []);

  const fetchMyPosts = async () => {

    const res = await axios.get(
      "http://localhost:7100/api/posts"
    );

    const myPosts = res.data.filter(
      (post) =>
        post.author === user.name
    );

    setPosts(myPosts);

  };

  return (

    <div className="container">

      <h1 className="section-title">
        My Blogs ✍️
      </h1>

      <div className="posts-grid">

        {
          posts.map((post) => (

            <BlogCard
              key={post.id}
              post={post}
              refreshPosts={fetchMyPosts}
            />

          ))
        }

      </div>

    </div>

  );

}

export default MyBlogs;