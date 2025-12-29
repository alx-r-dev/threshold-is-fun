import { FaCheck } from "react-icons/fa6";

type CheckMarkListProps = {
  list: string[];
  component?: React.ReactNode;
};

const CheckIconListItem = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center"
      }}
    >
      <FaCheck />
      {text}
    </div>
  );
};

const CheckMarkList = ({ list, component }: CheckMarkListProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#f2f2f2",
        padding: ".5rem",
        borderRadius: "8px",
        marginBottom: "12px"
      }}
    >
      {list.map((item, index) => {
        return <CheckIconListItem key={index} text={item} />;
      })}
      {component}
    </div>
  );
};

export default CheckMarkList;
