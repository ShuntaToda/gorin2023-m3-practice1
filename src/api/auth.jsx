import { path } from "./path";

export const loginApi = async (username, password) => {
  if (!checkToken()) {
    try {
      const res = await fetch(`${path}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  console.log("token nothing");
};

export const logout = async () => {
  console.log(localStorage.getItem("token"));
  if (checkToken()) {
    try {
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
    } catch (e) {
      console.error(e);
    }
  }
};

export const checkToken = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
