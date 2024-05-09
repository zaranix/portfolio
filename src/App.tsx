import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Background from "./components/Background";
import Education from "./components/Education";
import Experience from "./components/Experience";
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
      <Education theme={selectedTheme}></Education>
      <Experience theme={selectedTheme}></Experience>
    </ThemeProvider>
  );
};
export default App;
