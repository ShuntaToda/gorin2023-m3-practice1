import React from "react";
import { logout } from "../api/auth";

export const Logout = ({ setIsLogin }) => {
  const handleLogout = async () => {
    const data = logout();

    setIsLogin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    console.log(data);
  };
  return (
    <div>
      <div onClick={handleLogout} className="btn btn-outline-danger">
        Logout
      </div>
    </div>
  );
};
