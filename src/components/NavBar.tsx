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
import Resume from "./Resume";

interface Props {
  toggleDarkMode: boolean;
  toggleDarkTheme: () => void;
}
const NavBar = ({ toggleDarkMode, toggleDarkTheme }: Props) => {
  const [state, setState] = useState(false);

  return (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="menu"
        onClick={() => setState(true)}
      >
        <MenuIcon />
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
        <Box sx={{ width: "30vw" }}>
          <List>
            {["Home", "Resume", "Work", "Education", "Contact"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {text === "Resume" && <Resume />}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Toolbar>
  );
};

export default NavBar;
