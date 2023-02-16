import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      {todos.map((item) => (
        <div className="conteiner" key={item.id}>
          <p>{item.userId}</p>
          <p>{item.title}</p>
        </div>
      ))}
      ;
    </div>
  );
};

export default App;
