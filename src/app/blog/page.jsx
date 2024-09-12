import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../../components/pagination/Pagination";
import Image from "next/image";
import Card from "@/components/card/Card";

const getData = async () => {
  const res = await fetch("http://localhost:8080/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

const CardList = async () => {
  const posts = await getData();

  //console.log(posts);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kesfet</h1>
      {posts.content.map((post) => (
        <div className={styles.posts} key={post.id}>
          <Card post={post} />
        </div>
      ))}

      <Pagination />
    </div>
  );
};

export default CardList;
