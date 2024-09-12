"use client";
import React, { useEffect, useState } from "react";
import styles from "./registerPage.module.css";
import Link from "next/link";
import { signUp } from "@/services/userService";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const { login } = useAuth();

  useEffect(() => {
    if (login) {
      router.push("/");
    }
  }, [login]);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  //handle change event

  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //data to sending api
    signUp(data)
      .then((response) => {
        console.log(response);
        toast.success("Kullanici basariyla kaydedildi");
      })
      .catch((error) => {
        console.log(error);

        //handle error

        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <h3 className={styles.title}>Kaydol</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Kullanici adi"
            id="name"
            className={styles.input}
            value={data.name}
            onChange={(e) => handleChange(e, "name")}
          />
          {error.errors?.response?.data?.name && (
            <span className={styles.errorSpan}>
              {error.errors.response.data.name}
            </span>
          )}
          <input
            required
            type="email"
            placeholder="E-posta"
            id="email"
            className={styles.input}
            value={data.email}
            onChange={(e) => handleChange(e, "email")}
          />
          {error.errors?.response?.data?.email && (
            <span className={styles.errorSpan}>
              {error.errors.response.data.email}
            </span>
          )}
          <input
            required
            type="password"
            placeholder="Sifre"
            id="password"
            className={styles.input}
            value={data.password}
            onChange={(e) => handleChange(e, "password")}
          />
          {error.errors?.response?.data?.password && (
            <span className={styles.errorSpan}>
              {error.errors.response.data.password}
            </span>
          )}
          <button className={styles.button}>Olustur</button>
          <p className={styles.error}>This is an error!</p>
          <span className={styles.login}>
            Zaten kayitli misiniz?{" "}
            <Link href="/login" className={styles.link}>
              Giris yapin
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
