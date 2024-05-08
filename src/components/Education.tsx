import { Grid } from "@mui/material";
import EducationItem from "./EducationItem";
import education from "/home/zaranix/portfolio/src/assets/Images/eduImg.svg";

const Education = () => {
  return (
    <Grid
      sx={{ backgroundColor: "#212121", height: "100vh", paddingLeft: "6%" }}
      container
    >
      <Grid md={6}>
        <h1 style={{ marginLeft: "1rem" }}>Education</h1>
        <EducationItem
          date="2007-2020"
          title="Higher Secondary Education"
          school="Marble Hills Middle School"
          imageUrl={education}
        />
        <EducationItem
          date="2007-2020"
          title="Higher Secondary Education"
          school="Marble Hills Middle School"
          imageUrl={education}
        />
        <EducationItem
          date="2007-2020"
          title="Higher Secondary Education"
          school="Marble Hills Middle School"
          imageUrl={education}
        />
      </Grid>
      <Grid md={6}>2</Grid>
    </Grid>
  );
};

export default Education;
