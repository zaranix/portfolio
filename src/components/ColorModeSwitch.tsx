import { Switch } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { darkTheme, lightTheme } from "../theme";

const ColorModeSwitch = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const selectedTheme = toggleDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider  theme={selectedTheme}>
      <CssBaseline />
  <div style={{display:'flex' , alignItems:'center'}}>
        <h3>Dark mode</h3>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
  </div>
 
     
    </ThemeProvider>
  );
}

export default ColorModeSwitch;
