import { checkToken } from "./auth";
import { path } from "./path";

export const storeResultAPI = async (result) => {
  if (checkToken()) {
    try {
      const res = await fetch(`${path}/results`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(result),
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
export const getResultsAPI = async () => {
  if (checkToken()) {
    try {
      const res = await fetch(`${path}/results`, {
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
