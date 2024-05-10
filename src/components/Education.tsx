import { Grid } from "@mui/material";
import Item from "./Item";
import education from "/home/zaranix/portfolio/src/assets/Images/eduImg.svg";
import educationorg from "/home/zaranix/portfolio/src/assets/Images/eduOrange.svg";

interface Theme {
  palette: {
    background: { default: string; paper: string };
    text: { primary: string; secondary: string };
  };
}
interface Props {
  theme: Theme;
}

const Education = ({ theme }: Props) => {
  return (
    <Grid
      id="education"
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        paddingLeft: "6%",
        marginTop: "0",
      }}
      container
      spacing={2}
    >
      <Grid item sx={{ justifyContent: "center" }} md={7}>
        <h1 style={{ marginLeft: "1rem", color: "#f56539", fontSize: "3rem" }}>
          Education
        </h1>
        <Item
          date="2007-2020"
          title="Higher Secondary Education"
          school="Marble Hills Middle School"
          imageUrl={education}
        />
        <Item
          date="2007-2020"
          title="Higher Secondary Education"
          school="Marble Hills Middle School"
          imageUrl={education}
        />
        <Item
          date="2007-2020"
          title="Higher Secondary Education"
          school="Marble Hills Middle School"
          imageUrl={education}
        />
      </Grid>
      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        item
        md={5}
        xs={12}
        sm={5}
      >
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          src={educationorg}
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default Education;
