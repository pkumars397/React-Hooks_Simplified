import { useState, useEffect } from "react";
function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const resizeHandler = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("resize", resizeHandler);

    return () => {
      console.log("clean up called");
      window.removeEventListener("resize", resizeHandler);
    };
  }, [windowSize]);

  console.log("render");
  return (
    <>
      <div>{windowSize}</div>
    </>
  );
}

export default App;
