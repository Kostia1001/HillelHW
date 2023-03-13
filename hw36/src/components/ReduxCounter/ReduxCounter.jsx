import { createStore, combineReducers } from "redux";
import { useDispatch, useSelector } from "react-redux";

const initialStateCounter = { count: 0 };

const counterReducer = (state = initialStateCounter, action) => {
  const { type } = action;

  switch (type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialStateAuth = { isLogin: false };

const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case "Login":
      return { isLogin: true };
    case "Logaut":
      return { isLogin: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer
});

export const store = createStore(rootReducer);

const ReduxCounter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h1>counter:{count.count}</h1>
      <button onClick={handleIncrement}>increment+</button>
      <button onClick={handleDecrement}>decrement-</button>
    </div>
  );
};

export default ReduxCounter;
