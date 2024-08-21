import React from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";

const Admin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <AdminPosts />
        </div>
        <div className={styles.col}>
          <AdminPostForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <AdminUsers />
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default Admin;
