import "./App.css";
import ReduxCounter from "./components/ReduxCounter/ReduxCounter";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(auth);
  const handleLogin = () => {
    dispatch({ type: "Login" });
  };

  return (
    <div className="App">
      <ReduxCounter />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default App;
