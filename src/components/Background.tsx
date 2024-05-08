import { Box } from "@mui/material";
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columnSpacing={{ xs: 5, sm: 2, md: 12 }}>
        <Grid
          item
          xs={4}
          sm={5}
          sx={{
            backgroundColor: theme.palette.background.default,
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              width: "300PX",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              right: "45%",
            }}
            src={zahra}
            alt="Your Image"
          />
        </Grid>
        <Grid
          item
          xs={8}
          sm={7}
          sx={{
            backgroundColor: theme.palette.background.paper,
            height: "100vh",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <div style={{ width: "25rem" }}>
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
                attention. It was the clouds. The deep green that isn't the
                color of clouds, but came with these. She knew what was coming
                and she hoped she was prepared.
              </h3>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Background;
