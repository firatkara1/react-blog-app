import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const getData = async () => {
  const res = await fetch(`http://localhost:8080/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

const CardList = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>

      <div className={styles.posts}>
        {posts.content.map((post) => (
          <Card post={post} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
