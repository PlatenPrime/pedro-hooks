import { useReducer } from "react";
import { reducer } from "./reducer";


export const ReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "double" })}>*</button>
    </div>
  );
};
