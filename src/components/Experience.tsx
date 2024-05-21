import { useTheme } from "@material-ui/core/styles";
import { Grid, Grow } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import Item from "./Item";
import educationorg from "/home/zaranix/portfolio/src/assets/Images/eduOrange.svg";
import experience from "/home/zaranix/portfolio/src/assets/Images/exp.svg";

const Experience = () => {
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

  const items = [
    {
      date: "Jul 2016 - Apr 2020",
      title: "Insurance agent",
      school: "Pasargad Insurance Agency",
      imageUrl: experience,
    },
    {
      date: "Oct 2020 - Oct 2021",
      title: "Real estate agent",
      school: "Dolati Real Estate Agency",
      imageUrl: experience,
    },
    {
      date: "Jun 2021 - Dec 2021",
      title: "Front-end Developer (Internship)",
      school: "Shahre Wordpress",
      imageUrl: experience,
    },
    {
      date: "Jul 2022 - Jul 2023",
      title: "Front-end Developer",
      school: "Kian Development Holding (Abzar Wordpress)",
      imageUrl: experience,
    },
  ];

  return (
    <Grid
      id="experience"
      ref={setRef}
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        paddingLeft: "6%",
        marginTop: "0",
        flexDirection: "row-reverse",
        overflow: "hidden",
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
