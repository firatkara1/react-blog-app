import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Herkese Selam! </b>
        Gulpinar Habere Hosgeldiniz.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            cupiditate neque minima voluptate magni ut necessitatibus non
            accusamus consectetur molestiae!
          </p>
          <button className={styles.button}>read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
