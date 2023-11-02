import React, { useRef, useState } from "react";
import { loginApi } from "../api/auth";

export const Login = ({ setIsLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = await loginApi(usernameRef.current.value, passwordRef.current.value);
    if (data && data.success !== false) {
      setIsLogin(true);
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
    } else {
      setMessage(data ? data.message : "Login failed");
    }
  };

  return (
    <div className="mt-5 d-flex align-items-center justify-content-center">
      <div className="border rounded shadow d-flex flex-column p-3" style={{ width: "400px" }}>
        <div className="mb-3">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="input-group mb-2">
            <span className="input-group-text">Username</span>
            <input ref={usernameRef} className="form-control" type="text" required />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Password</span>
            <input ref={passwordRef} className="form-control" type="password" required />
          </div>
          <div>
            <div className="text-danger">{message}</div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};