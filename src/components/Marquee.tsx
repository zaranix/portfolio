import { Box, Grid, useTheme } from "@mui/material";
import FastMarquee from "react-fast-marquee";
import SkillBox from "./SkillBox";
import css from "/home/zaranix/portfolio/src/assets/Images/css.svg";
import git from "/home/zaranix/portfolio/src/assets/Images/git.svg";
import github from "/home/zaranix/portfolio/src/assets/Images/github.svg";
import html from "/home/zaranix/portfolio/src/assets/Images/html.svg";
import Javascript from "/home/zaranix/portfolio/src/assets/Images/javascript.svg";
import material from "/home/zaranix/portfolio/src/assets/Images/material.svg";
import nginx from "/home/zaranix/portfolio/src/assets/Images/nginx.svg";
import react from "/home/zaranix/portfolio/src/assets/Images/react.svg";
import typescript from "/home/zaranix/portfolio/src/assets/Images/typescript.svg";
import wordpress from "/home/zaranix/portfolio/src/assets/Images/wordpress.svg";

const Skill = () => {
  const theme = useTheme();
  return (
    <Grid
      id="skill"
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "100vh",
      }}
      container
      spacing={4}
    >
      <FastMarquee>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            padding: "5%",
            gap: "3rem",
          }}
        >
          <SkillBox skill={"HTML"} imageUrl={html} />
          <SkillBox skill={"CSS"} imageUrl={css} />
          <SkillBox skill={"JavaScript"} imageUrl={Javascript} />
          <SkillBox skill={"TypeScript"} imageUrl={typescript} />
          <SkillBox skill={"Github"} imageUrl={github} />
          <SkillBox skill={"MaterialUi"} imageUrl={material} />
          <SkillBox skill={"React"} imageUrl={react} />
          <SkillBox skill={"Nginx"} imageUrl={nginx} />
          <SkillBox skill={"WordPress"} imageUrl={wordpress} />
          <SkillBox skill={"Git"} imageUrl={git} />
        </Box>
      </FastMarquee>
    </Grid>
  );
};

export default Skill;
