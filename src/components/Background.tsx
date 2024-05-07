import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
interface Theme {
  palette: {
    background: { default: string; paper: string };
  };
}
interface Props {
  theme: Theme;
}
const Background = ({ theme }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid
          item
          xs={4}
          sx={{
            backgroundColor: theme.palette.background.default,
            height: "100vh",
          }}
        ></Grid>
        <Grid
          item
          xs={8}
          sx={{
            backgroundColor: theme.palette.background.paper,
            height: "100vh",
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Background;
