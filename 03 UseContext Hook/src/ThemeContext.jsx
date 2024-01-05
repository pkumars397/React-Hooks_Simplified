import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();
const updateThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useUpdateThemeContext() {
  return useContext(updateThemeContext);
}

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(true);

  const updateTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <updateThemeContext.Provider value={updateTheme}>
        {children}
      </updateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
