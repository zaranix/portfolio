import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  toggleDarkMode: boolean;
  toggleDarkTheme: () => void;
}
const NavBar = ({ toggleDarkMode, toggleDarkTheme }: Props) => {
  const [state, setState] = useState(false);

  const scrollToExperience = (text: string) => {
    const experienceSection = document.getElementById(text.toLowerCase());

    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
      setState(false);
    }
  };

  return (
    <Toolbar
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        borderTopRightRadius: "20px",
      }}
    >
      <IconButton
        edge="end"
        aria-label="menu"
        sx={{ order: 2 }}
        onClick={() => setState(true)}
      >
        <MenuIcon sx={{ fontSize: "3rem" }} />
      </IconButton>
      <ColorModeSwitch
        toggleDarkMode={toggleDarkMode}
        toggleDarkTheme={toggleDarkTheme}
      />

      <Drawer
        anchor="left"
        variant="temporary"
        open={state}
        onClose={() => setState(false)}
      >
        <Box
          sx={{
            width: "20rem",
            height: "100vh",
            backgroundColor: "#212121",
            borderTopRightRadius: "20px",
          }}
        >
          <CloseIcon
            onClick={() => setState(false)}
            fontSize="large"
            sx={{
              color: "#F56539",
              display: "block",
              margin: "2rem 1rem 1rem auto",
            }}
          />
          <List>
            {["Home", "Skill", "Experience", "Education", "Contact"].map(
              (text) => (
                <ListItem sx={{ width: "300px", margin: "0 auto" }} key={text}>
                  <ListItemButton
                    sx={{
                      border: "solid 3px #F56539",
                      borderRadius: "30px",
                      color: "#F56539",
                      margin: "1rem",
                      textAlign: "center",
                    }}
                    onClick={() => {
                      scrollToExperience(text);
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Toolbar>
  );
};

export default NavBar;
