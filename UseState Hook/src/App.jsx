import { useState } from "react";

function App() {
  const [state, setState] = useState({ count: 1, theme: "blue" });

  const increaseCountHandler = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };
  // const decreaseCountHandler = () => {
  //   setCount((prevState) => prevState - 1);
  // };
  return (
    <>
      <span>
        {state.count} {state.theme}
      </span>
      <button onClick={increaseCountHandler}>+</button>
    </>
  );
}

export default App;
