import "./App.css";
import { useReducer } from "react";

const App = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: (state.count = 0) };
      default:
        return { count: state.count };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    const action = { type: "increment" };
    dispatch(action);
  };
  const handleDecrement = () => {
    const action = { type: "decrement" };
    dispatch(action);
  };
  const handleReset = () => {
    const action = { type: "reset" };
    dispatch(action);
  };
  return (
    
    <div className="App">
      <h1>counter:{state.count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default App;
