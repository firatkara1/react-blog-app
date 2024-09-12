"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { RiUploadLine } from "react-icons/ri";
import { getCurrentUserDetail, isLoggedIn } from "@/auth";
import { useAuth } from "@/context/AuthContext";

const AuthLinks = () => {
  const status = "notauth";

  //const [login, setLogin] = useState(false);
  //const [user, setUser] = useState(undefined);

  // useEffect(() => {
  //   setLogin(isLoggedIn());
  //   setUser(getCurrentUserDetail());
  //   console.log("useeffce");
  // }, [login]);

  //const login = isLoggedIn();
  const { login } = useAuth();

  return (
    <>
      {login === true ? (
        <>
          <Link href="/write" className={styles.create}>
            <RiUploadLine />
            <span className={styles.profileText}>Olustur</span>
          </Link>
          <Link href="/dashboard/profile" className={styles.profile}>
            <BiUser />
            <span className={styles.profileText}>Profilim</span>
          </Link>
        </>
      ) : (
        <Link href="/login">Giris</Link>
      )}
    </>
  );
};

export default AuthLinks;
