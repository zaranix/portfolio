import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EEEEEE",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#000",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#EEEEEE",
    },
    background: {
      default: "#616161",
    },
    text: {
      primary: "#EEEEEE",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
