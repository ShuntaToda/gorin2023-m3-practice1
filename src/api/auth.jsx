import { path } from "./path";

export const loginApi = async (username, password) => {
  if (!checkToken()) {
    const res = await fetch(`${path}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });

    const data = await res.json();
    console.log(data);
    return data;
  }
  console.log("token nothing");
};

export const logout = async () => {
  console.log(localStorage.getItem("token"));
  if (checkToken()) {
    const res = await fetch(`${path}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await res.json();
    console.log(data);
    return data;
  }
};

export const checkToken = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
