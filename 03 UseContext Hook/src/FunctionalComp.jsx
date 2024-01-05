import { useThemeContext, useUpdateThemeContext } from "./ThemeContext";
export default function FunctionalComp() {
  const theme = useThemeContext();
  const toggleTheme = useUpdateThemeContext();
  const themeStyle = {
    background: theme ? "black" : "lightBlue",
    color: theme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  console.log(theme, useUpdateThemeContext(), themeStyle);
  return (
    <>
      <button onClick={toggleTheme}>Toggle</button>
      <div style={themeStyle}>FunctionalComp</div>
    </>
  );
}
