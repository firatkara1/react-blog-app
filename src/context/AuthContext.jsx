// AuthContext.js
"use client";
import { doLogout, isLoggedIn } from "@/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      router.push("/login");
    });
  };

  useEffect(() => {
    setLogin(isLoggedIn());
  }, [login]);

  return (
    <AuthContext.Provider value={{ login, setLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
