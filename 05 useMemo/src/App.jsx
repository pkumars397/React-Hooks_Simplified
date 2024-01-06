import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [theme, setTheme] = useState(false);
  const doubledValue = useMemo(() => slowfunction(number), [number]);
  const backGroundColor = {
    background: theme ? "black" : "lightgreen",
    color: theme ? "white" : "black",
    padding: "2 rem",
    margin: "2rem",
  };
  return (
    <>
      <div className="container">
        <input value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
          Toggle
        </button>
        <div style={backGroundColor}>{doubledValue}</div>
      </div>
    </>
  );
}

export default App;

function slowfunction(n) {
  for (let i = 0; i < 1000000000; i++) {}
  return n * 2;
}
