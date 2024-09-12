import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ post }) => {
  const milliseconds = post.addedDate;

  const dateObject = new Date(milliseconds);

  const formattedDate = dateObject.toLocaleString("tr-TR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  //console.log(post);

  //const imageSrc = `http://localhost:8080/api/post/image/${post.imageName}`;
  const postImage = post.imageName;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"http://localhost:8080/api/post/image/" + postImage}
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <Link className={styles.customLink} href={`/blog/${post.postId}`}>
          {post.title}
        </Link>
        <p className={styles.desc}>{post.content}</p>
        <div className={styles.detail}>
          <span className={styles.date}>{formattedDate}</span>
          <span className={styles.category}>{post.category.categoryTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
