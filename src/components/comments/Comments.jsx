import React from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Yorumlar</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            name=""
            id=""
            placeholder="Yorum ozelligi yakinda eklenecek..."
            className={styles.input}
          />
          <button className={styles.button}>Gonder</button>
        </div>
      ) : (
        <Link href="/login">Yorum yapmak icin giris yapiniz!</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2030</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            accusantium officiis deleniti, dolore laborum temporibus quidem
            minima ut ipsa inventore fugiat ipsam veniam iusto est nam animi
            ipsum eius nihil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
