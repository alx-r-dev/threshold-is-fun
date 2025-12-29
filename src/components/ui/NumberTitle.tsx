type NumberTitleProps = {
  number: number;
  title: string;
};

const NumberTitle = ({ number, title }: NumberTitleProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center"
      }}
    >
      <div
        style={{
          borderRadius: "50%",
          border: "3px solid #f2f2f2",
          backgroundColor: "#f2f2f2",
          width: "30px",
          height: "30px",
          textAlign: "center"
        }}
      >
        {number}
      </div>
      <div style={{ fontWeight: "600" }}>{title}</div>
    </div>
  );
};

export default NumberTitle;
