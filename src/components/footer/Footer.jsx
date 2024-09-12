import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="aksaray haber"
            width={50}
            height={50}
            className={styles.image}
          />
          <h1 className={styles.logoText}>Aksaray Haber</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          recusandae officiis libero ad esse enim aut earum quod expedita ut!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Linkler</span>
          <Link href="/">AnaSayfa</Link>
          <Link href="/">Hakkimizda</Link>
          <Link href="/">Iletisim</Link>
          <Link href="/">Gizlilik Politikasi</Link>
          <Link href="/">Reklam</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Etiketler</span>
          <Link href="/">AnaSayfa</Link>
          <Link href="/">Hakkimizda</Link>
          <Link href="/">Iletisim</Link>
          <Link href="/">Gizlilik Politikasi</Link>
          <Link href="/">Reklam</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Sosyal</span>
          <Link href="/">Fabebook</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
