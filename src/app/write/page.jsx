"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./write.module.css";
import { getAllCategories } from "@/services/categoryService";
import { doCreatePost, uploadPostImage } from "@/services/postService";
import { getCurrentUserDetail } from "@/auth";
import { toast } from "react-toastify";

const WritePage = () => {
  const [categories, setCategories] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [image, setImage] = useState(null);
  useEffect(() => {
    setCurrentUser(getCurrentUserDetail());

    getAllCategories()
      .then((data) => {
        //console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const fieldChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
    //console.log(e);
  };

  const contentFieldChange = (e) => {
    setPost({ ...post, content: e });
  };

  const createPost = (e) => {
    e.preventDefault();

    //console.log(post);

    if (post.title === "") {
      alert("Lutfen baslik giriniz!");
      return;
    }
    if (post.content === "") {
      alert("Lutfen icerik giriniz!");
      return;
    }
    if (post.categoryId === "") {
      alert("lutfen kategori seciniz!");
      return;
    }

    post["userId"] = currentUser.id;

    doCreatePost(post)
      .then((data) => {
        uploadPostImage(image, data.postId)
          .then((data) => {
            toast.success("Gorsel Yuklendi!");
          })
          .catch((err) => {
            toast.error("Gorsel yuklenemedi!!!");
            console.log(err);
          });

        toast.success("Gonderi paylasildi!");
        setPost({
          title: "",
          content: "",
          categoryId: "",
        });
        //console.log(post);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleImageChange = (e) => {
    //console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <div className={styles.add}>
      <form onSubmit={createPost}>
        <div className={styles.content}>
          <input
            type="text"
            placeholder="Baslik giriniz..."
            id="title"
            name="title"
            className={styles.titleInput}
            onChange={fieldChange}
          />
          <div className={styles.editorContainer}>
            <ReactQuill
              required
              className={styles.editor}
              theme="snow"
              value={post.content}
              onChange={contentFieldChange}
            />
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.item}>
            <h1 className={styles.title}>Yayinla</h1>
            <span>
              <b>Durum: </b> Taslak
            </span>
            <span>
              <b>Gorunurluk: </b> Herkes
            </span>
            <input
              type="file"
              name=""
              id="file"
              className={styles.input}
              onChange={handleImageChange}
            />
            <label htmlFor="file" className={styles.file}>
              Gorsel yukle
            </label>
            <div className={styles.buttons}>
              <button>Guncelle</button>
              <button type="submit">Paylas</button>
            </div>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>Kategori</h1>

            <div className={styles.cat}>
              {categories.map((category) => (
                <div key={category.categoryId}>
                  <input
                    type="radio"
                    name="categoryId"
                    value={category.categoryId}
                    id={category.categoryId}
                    onChange={fieldChange}
                  />
                  <label htmlFor="food">{category.categoryTitle}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WritePage;
