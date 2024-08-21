import React from "react";
import styles from "./login.module.css";
import { login } from "@/lib/action";
import LoginForm from "@/components/loginForm/loginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
