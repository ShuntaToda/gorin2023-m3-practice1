import { useState } from "react";
import "./App.css";

import "./bootstrap.min.css";
import { checkToken } from "./api/auth";
import { Login } from "./components/Login";
import { Main } from "./components/Main";
import { Logout } from "./components/Logout";
function App() {
  const [isLogin, setIsLogin] = useState(checkToken());
  return (
    <div className="App mt-5 container text-start">
      <h1>M3 Frontend</h1>
      {!isLogin ? <Login setIsLogin={setIsLogin}></Login> : <Main></Main>}
      {isLogin && <Logout setIsLogin={setIsLogin}></Logout>}
    </div>
  );
}

export default App;
