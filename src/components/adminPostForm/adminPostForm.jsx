"use client";

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useState } from "react";

const AdminPostForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    slug: "",
    img: "",
    desc: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPost(formData);
      setFormData({ userId: "", title: "", slug: "", img: "", desc: "" });
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1>Add New Post</h1>
      <input
        type="text"
        name="userId"
        placeholder="userid"
        onChange={handleChange}
        value={formData.userId}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={formData.title}
      />
      <input
        type="text"
        name="slug"
        placeholder="slug"
        onChange={handleChange}
        value={formData.slug}
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        onChange={handleChange}
        value={formData.img}
      />
      <textarea
        name="desc"
        placeholder="desc"
        rows={10}
        onChange={handleChange}
        value={formData.desc}
      />
      <button type="submit">Add</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AdminPostForm;
