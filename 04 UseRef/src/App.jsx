import { useEffect } from "react";
import { useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  const focusFunc = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <div>
        My name is {name} and my previous Name was {prevName.current}
      </div>
      <button onClick={focusFunc}>focus</button>
    </>
  );
}

export default App;
