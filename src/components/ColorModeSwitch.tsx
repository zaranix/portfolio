import { Switch } from "@mui/material";

interface Props {
  toggleDarkMode: boolean;
  toggleDarkTheme: () => void;
}

const ColorModeSwitch = ({ toggleDarkMode, toggleDarkTheme }: Props) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch
        size="medium"
        checked={toggleDarkMode}
        onChange={toggleDarkTheme}
      />
    </div>
  );
};

export default ColorModeSwitch;
