import FunctionalComp from "./FunctionalComp";
import { ThemeContextProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <FunctionalComp />
      </ThemeContextProvider>
    </>
  );
}

export default App;
