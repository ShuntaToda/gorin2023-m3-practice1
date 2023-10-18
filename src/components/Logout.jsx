import React from "react";
import { logout } from "../api/auth";

export const Logout = ({ setIsLogin }) => {
  const handleLogout = async () => {
    const data = await logout();

    setIsLogin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };
  return (
    <div>
      <div onClick={handleLogout} className="btn btn-outline-danger">
        Logout
      </div>
    </div>
  );
};
