import { useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import pdf from "/home/zaranix/portfolio/src/assets/Pdf/CV.pdf";

const ColorButton = styled(Button)(() => ({
  borderRadius: "20px",
  border: "1px solid",

  "&:hover": {
    backgroundColor: "#EAEAEA",

    color: "#000",
  },
}));
const handleClick = () => {
  const contact = document.getElementById("contact");
  contact?.scrollIntoView({ behavior: "smooth" });
};

export default function CustomizedButtons() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack sx={{ marginTop: "1rem" }} spacing={2} direction="row">
      <a href={pdf} target="_blank">
        <ColorButton
          sx={{
            padding: isXs ? "6px 11px" : "6px 16px",
            backgroundColor: theme.palette.background.default,
            borderColor: theme.palette.background.default,
          }}
          variant="contained"
        >
          {" "}
          Download CV
        </ColorButton>
      </a>

      <ColorButton
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderColor: theme.palette.background.default,
        }}
        variant="contained"
        onClick={() => handleClick()}
      >
        Contact
      </ColorButton>
    </Stack>
  );
}
