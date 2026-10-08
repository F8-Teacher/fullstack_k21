import { useState } from "react";
import Todos from "./components/Todos/Todos";
import { AppContext } from "./context/AppContext";

const App = () => {
  const [message, setMessage] = useState<string>("Hello anh em");
  return (
    <div>
      <AppContext.Provider value={{ message, setMessage }}>
        <Todos />
      </AppContext.Provider>
    </div>
  );
};

export default App;

//1. Object Context -> createContext
//2. Provider
//3. Consumer -> use(TenContext)
