"use client";
import React, { useEffect, useState } from "react";
import styles from "./loginPage.module.css";
import Link from "next/link";
import { toast } from "react-toastify";
import { signIn } from "@/services/userService";
import { doLogin, isLoggedIn } from "@/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const router = useRouter();

  //const [login, setLogin] = useState(false);

  const { login, setLogin } = useAuth();

  useEffect(() => {
    if (login) {
      router.push("/");
    }
  }, [login]);

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;

    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  let success = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(loginDetail);

    //validation

    signIn(loginDetail)
      .then((data) => {
        //save data to local storage
        doLogin(data, () => {
          console.log("login detail is saved to local storage");
          success = true;
          setLogin(true);

          router.push("/");
        });

        toast.success("Giris basarili. Hosgeldin!");
      })
      .catch((error) => {
        console.log(error);

        setError({
          errors: error,
          isError: true,
        });

        if (error) {
          toast.error(error.response.data);
        } else {
          toast.error("Yeniden deneyin");
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        {/* {error.errors?.response?.data && (
          <span className={styles.error}>{error.errors.response.data}</span>
        )} */}
        <h3 className={styles.title}>Giris</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            required
            type="email"
            id="email"
            value={loginDetail.email}
            placeholder="E-posta"
            className={styles.input}
            onChange={(e) => handleChange(e, "email")}
          />
          <input
            required
            type="password"
            id="password"
            value={loginDetail.password}
            placeholder="Sifre"
            className={styles.input}
            onChange={(e) => handleChange(e, "password")}
          />
          <button className={styles.button}>Giris</button>

          {/* <p className={styles.error}>This is an error!</p> */}
          <span className={styles.register}>
            Hesabin yok mu?{" "}
            <Link href="/register" className={styles.link}>
              Hesap olustur
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
