import { useState } from "react";
import "./App.css";

import "./bootstrap.min.css";
import { checkToken } from "./api/auth";
import { Login } from "./components/Login";
import { Main } from "./components/Main";
import { Logout } from "./components/Logout";
function App() {
  const [isLogin, setIsLogin] = useState(() => checkToken());
  return (
    <div className="App mt-5 container text-start">
      <div className="d-flex justify-content-between">
        <h1>M3 Frontend</h1>
        {isLogin && <Logout setIsLogin={setIsLogin} />}
      </div>
      {!isLogin ? <Login setIsLogin={setIsLogin} /> : <Main />}
    </div>
  );
}

export default App;
