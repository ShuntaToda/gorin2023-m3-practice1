import React from "react";
import { logout, clearUserData } from "../api/auth";

export const Logout = ({ setIsLogin }) => {
  const handleLogout = async () => {
    try {
      await logout();
      clearUserData();
      setIsLogin(false);
    } catch (error) {
      console.error("Logout failed", error);
      alert("ログアウトに失敗しました。もう一度お試しください。");
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-outline-danger">
      Logout
    </button>
  );
};