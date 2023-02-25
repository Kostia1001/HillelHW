import { useState, createContext } from "react";
import React from "react";
import Card from "./components/Card";

export const Context = createContext();
const App = () => {
  const [user, setUser] = useState({ name: "Username" });

  return (
    <div className="App">
      <Context.Provider value={{user, setUser}}>
        <Card></Card>
      </Context.Provider>
    </div>
  );
};

export default App;
