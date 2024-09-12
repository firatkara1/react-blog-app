import React from "react";
import styles from "./singlePost.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:8080/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);
  console.log("post", post);

  const milliseconds = post.addedDate;

  const dateObject = new Date(milliseconds);

  const formattedDate = dateObject.toLocaleString();

  const postImage = post.imageName;
  const imageSrc = `http://localhost:8080/api/post/image/${postImage}`;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}>{formattedDate}</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>{post.content}</p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
