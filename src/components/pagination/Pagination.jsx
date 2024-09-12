import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Onceki</button>
      <button className={styles.button}>Sonraki</button>
    </div>
  );
};

export default Pagination;