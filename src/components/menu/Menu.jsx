import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* without images */}
      <h2 className={styles.subtitle}>{"Neler oluyor?"}</h2>
      <h1 className={styles.title}>Populer Haberler</h1>
      <MenuPosts withImage={false} />

      {/* categories */}
      <h2 className={styles.subtitle}>Haber Kesfet</h2>
      <h1 className={styles.title}>Kategoriler</h1>
      <MenuCategories />

      {/* with images */}
      <h2 className={styles.subtitle}>Editör tarafından seçilmiş</h2>
      <h1 className={styles.title}>Adminin Seçimi</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
