import React, { useRef, useState } from "react";
import { loginApi } from "../api/auth";
export const Login = ({ setIsLogin }) => {
  const username = useRef(null);
  const password = useRef(null);
  const [message, setMessage] = useState("");

  const handleOnSubmit = async () => {
    console.log(username.current.value);
    console.log(password.current.value);
    const data = await loginApi(username.current.value, password.current.value);
    if (data.success !== false) {
      setIsLogin(true);
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
    } else {
      setMessage(data.message);
    }
  };
  return (
    <div className="mt-5 d-flex content-items-center justify-content-center">
      <div className="border rounded shadow d-flex flex-column p-3" style={{ width: "400px" }}>
        <div className="mb-3">
          <h2>Login</h2>
        </div>
        <div>
          <div className="input-group mb-2">
            <span className="input-group-text">Username</span>
            <input ref={username} className="form-control" type="text"></input>
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Password</span>
            <input ref={password} className="form-control" type="password"></input>
          </div>
          <div>
            <div className="text-danger">{message}</div>
            <div className="btn btn-outline-primary" onClick={handleOnSubmit}>
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
