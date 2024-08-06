import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>Welcome to my website.</h1>
        <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
      
      </div>
  
  </div>

  
  );
}
