import { Route, Routes, Link } from "react-router-dom";
import Todo from "./pages/Todo";
import Users from "./pages/Users";
import Form from "./pages/Form";
const App = () => {
  return (
    <div>
      <div>
        <Link to="/todo">Todo</Link>
        <Link to="/users">Users</Link>
      </div>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
