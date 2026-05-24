import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetchPosts();

  }, []);

  const fetchPosts = async () => {

    const res = await axios.get(
      "http://localhost:7100/api/posts"
    );

    setPosts(res.data);

  };

  return (

    <div>

      <Hero />

      <div className="container">

        <h1 className="section-title">
          Trending Blogs 🔥
        </h1>

        <div className="posts-grid">

          {
            posts.map((post) => (

              <BlogCard
  key={post.id}
  post={post}
  refreshPosts={fetchPosts}
/>

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default Home;