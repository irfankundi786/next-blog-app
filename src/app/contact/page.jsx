"use client";
import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () => {
  console.log("test to irfan contact");
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button
            onClick={() => {
              console.log("click the button");
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
