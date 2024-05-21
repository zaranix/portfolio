import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import CustomizedButtons from "./Button.tsx";
import zahra from "/home/zaranix/portfolio/src/assets/Images/zahra.jpeg";

const Background = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{ backgroundColor: theme.palette.background.default }}
        >
          <img
            style={{
              borderRadius: "50%",
              width: isXs ? "150px" : "300px",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: isXs ? "20%" : "50%",
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
          sx={{ backgroundColor: theme.palette.background.paper }}
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
            <h1
              style={{ marginTop: "0px", fontSize: isXs ? "1.3rem" : "2rem" }}
            >
              Zahra Khodabakhshian
            </h1>
            <h3 style={{ color: theme.palette.text.secondary }}>
              There wasn't a bird in the sky, but that was not what caught her
              attention. It was the clouds. The deep green that isn't the color
              of clouds, but came with these. She knew what was coming and she
              hoped she was prepared.
            </h3>
            <CustomizedButtons />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Background;
