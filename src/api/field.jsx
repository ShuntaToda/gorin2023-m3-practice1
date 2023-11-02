import { checkToken } from "./auth";
import { path } from "./path";

export const fieldAPI = async () => {
  // 先にチェック判定
  if (!checkToken()) {
    console.error("トークンがない、または無効");
    throw new Error("トークンがない、または無効");
  }

  try {
    const res = await fetch(`${path}/fields`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    // ステータス確認
    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    // throwで投げる
    console.error(e);
    throw e; // エラーを投げることで、呼び出し元でキャッチできるようにする
  }
};