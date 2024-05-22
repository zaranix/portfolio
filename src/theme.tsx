import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EEEEEE",
      light: "#F78A69",
    },
    secondary: {
      main: "#fff",
    },

    text: {
      primary: "#151515",
      secondary: "#818181",
    },

    background: { default: "#F78A69", paper: "#eee" },
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
      light: "#8E371D",
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
