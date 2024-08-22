import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

/// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
const Blog = async () => {
  // const posts = await getPosts();
  const posts = await getData();
  console.log("Posts", posts);
  return (
    <div className={styles.parentContainer}>
      <div className={styles.post}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
