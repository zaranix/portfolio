import { Grid } from "@mui/material";
import Item from "./Item";
import educationorg from "/home/zaranix/portfolio/src/assets/Images/eduOrange.svg";
import experience from "/home/zaranix/portfolio/src/assets/Images/exp.svg";

interface Theme {
  palette: {
    background: { default: string; paper: string };
    text: { primary: string; secondary: string };
  };
}
interface Props {
  theme: Theme;
}

const Experience = ({ theme }: Props) => {
  return (
    <Grid
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        paddingLeft: "6%",
        marginTop: "0",
        flexDirection: "row-reverse",
      }}
      container
      spacing={2}
    >
      <Grid item sx={{ justifyContent: "center" }} md={7}>
        <h1
          style={{ marginLeft: "1rem", color: "#f56539", fontSize: "3.5rem" }}
        >
          Experience
        </h1>
        <Item
          date="2007-2020"
          title="scrum master"
          school="Marble Hills Middle School"
          imageUrl={experience}
        />
        <Item
          date="2007-2020"
          title="frontend developer"
          school="Marble Hills Middle School"
          imageUrl={experience}
        />
        <Item
          date="2007-2020"
          title="backend developer"
          school="Marble Hills Middle School"
          imageUrl={experience}
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

export default Experience;
