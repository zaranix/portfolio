interface Props {
  date: string;
  title: string;
  school: string;
  imageUrl: string;
}

const EducationItem = ({ date, title, school, imageUrl }: Props) => {
  return (
    <div
      style={{
        background: "#8b422d",
        display: "flex",
        padding: "1rem",
        borderRadius: "10px",
        margin: "1rem",
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          display: "flex",
          marginRight: "0.5rem",
          backgroundColor: "#F56539",
          padding: "0.4rem",
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

export default EducationItem;
