import "./App.css";

import "./bootstrap.min.css";
import { UserProvider } from "./provider/user";
function App() {
  return (
    <div className="App">
      <UserProvider></UserProvider>
    </div>
  );
}

export default App;
