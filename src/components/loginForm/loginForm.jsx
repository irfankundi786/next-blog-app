"use client";
import React, { useState } from "react";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(""); // To display success or error messages
  const [isLogin, setIsLogin] = useState(false); // Track login status
  const router = useRouter(); // Initialize the router

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataEntries = new FormData(event.target);
      console.log(formDataEntries);
      const result = await login(null, formDataEntries);

      if (result.isLogin) {
        setMessage(result.user); // Display success message
        setIsLogin(true);
        router.push("/");
        // Optionally, redirect or perform other actions on successful login
      } else {
        setMessage(result.error); // Display error message
        setIsLogin(false);
      }
    } catch (error) {
      setMessage("An unexpected error occurred");
      setIsLogin(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
      {message && (
        <p className={isLogin ? styles.success : styles.error}>{message}</p>
      )}
    </form>
  );
};

export default LoginForm;
