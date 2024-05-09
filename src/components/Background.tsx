import { Box, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import zahra from "/home/zaranix/portfolio/src/assets/Images/zahra.jpeg";

interface Theme {
  palette: {
    background: { default: string; paper: string };
    text: { primary: string; secondary: string };
  };
}
interface Props {
  theme: Theme;
}
const Background = ({ theme }: Props) => {
  const them = useTheme();
  const isXs = useMediaQuery(them.breakpoints.down("sm"));
  const isTablet = useMediaQuery(them.breakpoints.between("sm", "lg"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid style={{ height: "100vh" }} container>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            backgroundColor: theme.palette.background.default,
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              width: isXs ? "200px" : "300px",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: isXs ? "30%" : "50%",
              right: isXs ? "0" : "50%",
              left: isXs ? "50%" : isTablet ? "30%" : "40%",
            }}
            src={zahra}
            alt="Your Image"
          />
        </Grid>

        <Grid
          item
          sm={7}
          xs={12}
          sx={{
            backgroundColor: theme.palette.background.paper,
          }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <div style={{ width: "60%", marginRight: "2%" }}>
            <h3
              style={{
                color: theme.palette.text.secondary,
                marginBottom: "7px",
              }}
            >
              Front-end Developer
            </h3>
            <h1 style={{ marginTop: "0px" }}>Zahra khodabakhshian</h1>
            <h3 style={{ color: theme.palette.text.secondary }}>
              There wasn't a bird in the sky, but that was not what caught her
              attention. It was the clouds. The deep green that isn't the color
              of clouds, but came with these. She knew what was coming and she
              hoped she was prepared.
            </h3>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Background;
