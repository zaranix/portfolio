import { Box } from "@mui/material";

interface Props {
  skill: string;
  imageUrl: string;
}
const SkillBox = ({ skill, imageUrl }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#212121",
        width: "200px",
        height: "160px",
        padding: "2rem 1rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "15px",
        justifyContent: "space-between",
        boxShadow: "rgba(245, 101, 57, 0.3) 0px 0px 20px",
      }}
    >
      <img style={{ width: "50px" }} src={imageUrl} alt="123" />
      <p>{skill}</p>
    </Box>
  );
};

export default SkillBox;
