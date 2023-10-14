const getUser = () => {};

export const checkUser = () => {
  if (checkToken()) {
  }
  return false;
};

const checkToken = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
