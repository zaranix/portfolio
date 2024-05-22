import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <div>
      <Grid
        id="contact"
        sx={{ backgroundColor: theme.palette.background.default }}
        container
        spacing={4}
        alignItems="center"
      >
        <Grid item>
          <Box
            display={"flex"}
            sx={{
              alignItems: "center",
              marginBottom: "0.5rem",
              marginLeft: "1rem",
            }}
          >
            <MailOutlineIcon
              sx={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                marginRight: "0.5rem",
                backgroundColor: "#F56539",
                padding: "0.65rem",
              }}
            />
            <p>Zahrakhodabakhshian54@gmail.com</p>
          </Box>
          <Box
            display={"flex"}
            sx={{
              alignItems: "center",
              marginBottom: "0.5rem",
              marginLeft: "1rem",
            }}
          >
            <PhoneIphoneIcon
              sx={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                marginRight: "0.5rem",
                backgroundColor: "#F56539",
                padding: "0.65rem",
              }}
            />
            <p>+49-17659718109</p>
          </Box>
          <Box
            display={"flex"}
            sx={{
              alignItems: "center",
              marginBottom: "0.5rem",
              marginLeft: "1rem",
            }}
          >
            <PlaceIcon
              sx={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                marginRight: "0.5rem",
                backgroundColor: "#F56539",
                padding: "0.65rem",
              }}
            />
            <p>Kaiserslautern, Germany</p>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body1"
        align="center"
        sx={{
          margin: "0 auto",
          backgroundColor: theme.palette.background.default,
        }}
      >
        Made with love by Zara
      </Typography>
    </div>
  );
};

export default Footer;
