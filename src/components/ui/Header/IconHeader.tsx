import type { IconType } from "react-icons";

type IconHeaderProps = {
  icon: IconType;
  text: string;
  size?: string;
};

const IconHeader = ({ icon: Icon, text, size }: IconHeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: ".5rem",
        alignItems: "center"
      }}
    >
      <Icon size={size} />
      <div style={{ fontSize: `${size}px` }}>{text}</div>
    </div>
  );
};

export default IconHeader;
