import React from "react";
import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/RegisterForm";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
