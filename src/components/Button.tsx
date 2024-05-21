import { useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import pdf from "/home/zaranix/portfolio/src/assets/Pdf/CV.pdf";

const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,

  border: "1px solid",
  borderRadius: "20px",
  lineHeight: 1.5,
  backgroundColor: "#212121",
  borderColor: "#F56539",
  "&:hover": {
    backgroundColor: "#EAEAEA",
    borderColor: "#F56539",
    boxShadow: "none",
    color: "#000",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#F56539",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#EAEAEA",
    borderColor: "#F56539",
    color: "#000",
  },
}));
const handleClick = () => {
  const contact = document.getElementById("contact");
  contact?.scrollIntoView({ behavior: "smooth" });
};

export default function CustomizedButtons() {
  const them = useTheme();
  const isXs = useMediaQuery(them.breakpoints.down("sm"));
  return (
    <Stack sx={{ marginTop: "1rem" }} spacing={2} direction="row">
      <a href={pdf} target="_blank">
        <ColorButton
          sx={{ padding: isXs ? "6px 11px" : "6px 16px" }}
          variant="contained"
        >
          {" "}
          Download CV
        </ColorButton>
      </a>

      <CustomButton variant="contained" onClick={() => handleClick()}>
        Contact
      </CustomButton>
    </Stack>
  );
}
