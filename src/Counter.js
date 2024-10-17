import React, { useReducer } from "react";
import "./Counter.css";
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return "";
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div className="box-container">
          <h1>Counter :{state.count}</h1>
        </div>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement{" "}
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset </button>
      </div>
    </div>
  );
};

export default Counter;
