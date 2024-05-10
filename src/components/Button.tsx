import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import pdf from "/home/zaranix/portfolio/src/assets/Pdf/Minimal_CV.pdf";

const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "8px 16px",
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

export default function CustomizedButtons() {
  return (
    <Stack sx={{ marginTop: "1rem" }} spacing={2} direction="row">
      <ColorButton variant="contained" href={pdf} formTarget="_blank">
        Download CV
      </ColorButton>
      <CustomButton variant="contained">Contact</CustomButton>
    </Stack>
  );
}
