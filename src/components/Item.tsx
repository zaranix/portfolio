import { useTheme } from "@mui/material";

interface Props {
  date: string;
  title: string;
  school: string;
  imageUrl: string;
}

const Item = ({ date, title, school, imageUrl }: Props) => {
  const theme = useTheme();
  return (
    <div
      style={{
        background: theme.palette.primary.light,
        display: "flex",
        padding: "2rem",
        borderRadius: "15px",
        margin: "1rem",
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          marginRight: "0.5rem",
          backgroundColor: "#F56539",
          padding: "0.65rem",
        }}
        src={imageUrl}
        alt=""
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h6 style={{ marginBottom: "10px" }}>{date}</h6>
        <h4>{title}</h4>
        <h5>{school}</h5>
      </div>
    </div>
  );
};

export default Item;
