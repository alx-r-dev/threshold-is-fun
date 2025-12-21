import styles from "./SwitchToggle.module.css";
import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useState
} from "react";

type SwitchToggleProps = {
  paceUnit: string;
  setPaceUnit: Dispatch<SetStateAction<string>>;
};

const SwitchToggle = ({ paceUnit, setPaceUnit }: SwitchToggleProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    const unit = event.target.checked ? "kilometers" : "miles";
    setPaceUnit(unit);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <span>Pace Unit: </span>
        <span style={{ fontWeight: 600 }}>{paceUnit}</span>
      </div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles.toggle_input}
      />
    </div>
  );
};

export default SwitchToggle;
