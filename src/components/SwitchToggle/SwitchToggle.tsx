import type { NorwegianGridData } from "../../types/vdot";
import styles from "./SwitchToggle.module.css";
import { type ChangeEvent, useState } from "react";

type SwitchToggleProps = {
  paceUnit: string;
  setNorwegianGridData: (
    value: NorwegianGridData | ((val: NorwegianGridData) => NorwegianGridData)
  ) => void;
};

const SwitchToggle = ({
  paceUnit,
  setNorwegianGridData
}: SwitchToggleProps) => {
  const [isChecked, setIsChecked] = useState(paceUnit === "kilometers");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    const unit = event.target.checked ? "kilometers" : "miles";
    setNorwegianGridData({ paceUnit: unit });
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
