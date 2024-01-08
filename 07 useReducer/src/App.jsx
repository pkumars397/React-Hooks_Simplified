import { useReducer } from "react";
const ACTION = {
  INCRE: "INCREMENT",
  DECRE: "DECREMENT",
};

const reducerFn = (state, action) => {
  if (action.type == ACTION.INCRE) {
    return { count: state.count + 1 };
  }
  if (action.type == ACTION.DECRE) {
    return { count: state.count - 1 };
  }
  return { count: 0 };
};

function App() {
  const [state, dispatchFn] = useReducer(reducerFn, { count: 0 });
  const increaseHandler = () => {
    dispatchFn({ type: ACTION.INCRE });
  };
  const decrementHandler = () => {
    dispatchFn({ type: ACTION.DECRE });
  };
  return (
    <>
      <button onClick={decrementHandler}>-</button>
      <div>{state.count}</div>
      <button onClick={increaseHandler}>+</button>{" "}
    </>
  );
}

export default App;
