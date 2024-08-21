import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>
          We create digital ideas that are bigger ,bolder , braver and better.
        </h1>
        <p>
          {" "}
          We create digital ideas that are bigger ,bolder , braver and better.We
          believe in good ideas flexability and precision.We have World special
          team best consultancy and financial solution providers,wide range of
          web and software devleoments services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="no-image" width={500} height={500} />
      </div>
    </div>
  );
};

export default About;
