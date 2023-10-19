import { checkToken } from "./auth";
import { path } from "./path";

export const fieldAPI = async () => {
  if (checkToken()) {
    try {
      const res = await fetch(`${path}/fields`, {
        method: "GET",
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
  console.log("token nothing");
};
