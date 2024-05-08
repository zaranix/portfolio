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

    text: {
      primary: "#000",
      secondary: "#A7A7A7",
    },
    background: { default: "#F56539", paper: "#fff" },
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
      default: "#F56539",
      paper: "#212121",
    },
    text: {
      primary: "#EEEEEE",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
