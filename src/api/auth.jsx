import { path } from "./path";

export const loginApi = async (username, password) => {
  if (checkToken()) {
    console.error("Already logged in");
    return;
  }

  try {
    const res = await fetch(`${path}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
    throw e; 
  }
};

export const logout = async () => {
  if (!checkToken()) {
    console.error("Not logged in");
    return;
  }

  try {
    const res = await fetch(`${path}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const checkToken = () => {
  return !!localStorage.getItem("token");
};

export const clearUserData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
};