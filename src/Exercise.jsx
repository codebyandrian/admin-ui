import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("[Exercise] Gagal memuat posts:", error.message);
      }
    };

    fetchPostsData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Post Cards
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;