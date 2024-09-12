import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Populer Kategoriler</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style} `}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Tasarim
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding} `}
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Kodlama
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture} `}
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Kultur
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion} `}
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Moda
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel} `}
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Gezi
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food} `}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Yemek
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
