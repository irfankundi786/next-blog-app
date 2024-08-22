import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>SunSpark Solar Solution Company</h2>
        <p className={styles.desc}>
          Sunaprk is a leading solar solutions company committed to providing
          sustainable energy alternatives. Specializing in solar panel
          installation, energy storage, and efficiency optimization, Sunaprk
          combines cutting-edge technology with expert service to deliver clean,
          reliable power for residential and commercial clients. Our mission is
          to harness the power of the sun to create a brighter, greener future.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" className={styles.brandImg} fill alt="no image" />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" className={styles.heroImg} fill alt="no image" />
      </div>
    </div>
  );
};

export default Home;
