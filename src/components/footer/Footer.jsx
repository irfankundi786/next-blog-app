import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}> SunSpark</div>
      <div className={styles.text}>
        {" "}
        SunSpark solar solution company @ All rights reserve
      </div>
    </div>
  );
};

export default Footer;
