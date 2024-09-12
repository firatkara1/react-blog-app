"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const status = "notsauth";
  return (
    <div className={styles.container}>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Anasayfa</Link>
          <Link href="/">Hakkimizda</Link>
          <Link href="/">Iletisim</Link>

          {status === "notauth" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Olustur</Link>
            </>
          )}
        </div>
      )}
      <div className={styles.logo}>
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <RiMenu2Line />
        </div>

        <Link href="/" className={styles.logoText}>
          <Image
            src="/logo.png"
            alt="aksaray haber"
            width={50}
            height={50}
            className={styles.image}
          />
          Aksaray Haber
        </Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          AnaSayfa
        </Link>
        <Link href="/" className={styles.link}>
          İletişim
        </Link>
        <Link href="/" className={styles.link}>
          Hakkımızda
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
