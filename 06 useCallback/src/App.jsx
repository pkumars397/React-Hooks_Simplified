import { useState } from "react";
import List from "./List";
import { useCallback } from "react";
function App() {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState(true);

  const getNum = useCallback(() => {
    return [num + 1, num + 2, num + 3];
  }, [num]);

  const themeStyle = {
    background: theme ? "lightred" : "lightblue",
    color: theme ? "black" : "red",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button style={themeStyle} onClick={() => setTheme(!theme)}>
        Toggle
      </button>
      <List getNum={getNum} />
    </>
  );
}

export default App;
