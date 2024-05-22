import { Grid, Grow, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import Item from "./Item";
import education from "/home/zaranix/portfolio/src/assets/Images/eduImg.svg";
import educationorg from "/home/zaranix/portfolio/src/assets/Images/eduOrange.svg";

const items = [
  {
    date: "2014 - 2018",
    title: "Bachelor of Science in Computer Engineering",
    school: "University of Tehran",
    imageUrl: education,
  },
  {
    date: "2018 - 2020",
    title: "Master of Science in Computer Engineering",
    school: "University of Tehran",
    imageUrl: education,
  },
];

const Education = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      id="education"
      ref={setRef}
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

        {items.map((item, index) => (
          <Grow
            key={index}
            in={visible}
            timeout={{
              enter: 1000 + index * 500, // Delay each item by 500ms after the previous one
            }}
          >
            <div>
              <Item
                date={item.date}
                title={item.title}
                school={item.school}
                imageUrl={item.imageUrl}
              />
            </div>
          </Grow>
        ))}
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
            maxWidth: isXs ? "70vw" : "100%",
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
