"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const router = useRouter();
  const { logout, login } = useAuth();

  const dataString = localStorage.getItem("data");
  const dataObject = JSON.parse(dataString);
  console.log("dataObject", dataObject);

  return (
    <div>
      {login ? (
        <>
          <div>
            <h3>Profil Sayfasi</h3>
            <p>
              <span>Kullanici Adi: </span>
              {dataObject.userDto.name}
            </p>
            <p>
              <span>E-posta: </span>
              {dataObject.userDto.email}
            </p>
            <p>
              <span>Hakkimda: </span>
              {dataObject.userDto.about}
            </p>
            <button onClick={logout}>Cikis yap</button>{" "}
          </div>
        </>
      ) : (
        <>
          <div>Lutfen Giris Yapiniz!</div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
