import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="/sunspark.png"
          alt="no image"
          width="100"
          height="100"
          style={{ marginTop: "20px" }}
        />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
