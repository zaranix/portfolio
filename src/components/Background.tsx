import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@mui/material";
import zahra from "/home/zaranix/portfolio/src/assets/Images/zahra.jpeg";

const useStyles = makeStyles({
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(to right, #F56539 35%, #212121 35%)`,
    backgroundSize: "cover",
    zIndex: -1,
    "&::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "35%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundImage: `url(${zahra})`,
    },
  },
  mobileBackground: {
    background: `linear-gradient(to bottom, #F56539 30%, #212121 30%)`,
    "&::after": {
      top: "30%",
      left: "50%",
      width: "200px",
      height: "200px",
    },
  },
});

const Background = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();
  return (
    <div
      className={`${classes.background} ${isMobile ? classes.mobileBackground : ""}`}
    />
  );
};

export default Background;
