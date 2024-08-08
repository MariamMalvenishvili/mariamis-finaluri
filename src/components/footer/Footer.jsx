import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h4>Malvena</h4>
      <p className={styles.text}>
        Mariami © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

