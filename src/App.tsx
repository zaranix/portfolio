import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const selectedTheme = toggleDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />

      <NavBar
        toggleDarkMode={toggleDarkMode}
        toggleDarkTheme={toggleDarkTheme}
      />
      <Background theme={selectedTheme} />
    </ThemeProvider>
  );
};
export default App;
