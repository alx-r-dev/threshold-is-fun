import styles from "./VdotInputs.module.css";
import FormatError from "../FormatError/FormatError";
import type { Ref } from "react";

import { type VdotFormData } from "../../types/vdot";

type VdotInputsProps = {
  raceTimeRef: Ref<HTMLInputElement>;
  raceDistanceRef: Ref<HTMLSelectElement>;
  vdotFormData: VdotFormData;
  raceTimeFormatCheckSucceeded: boolean | null;
};

const VdotInputs = ({
  raceTimeRef,
  raceDistanceRef,
  vdotFormData,
  raceTimeFormatCheckSucceeded
}: VdotInputsProps) => {
  return (
    <>
      <label className={styles.vdot__input__label}>
        Recent Race Time
        <input
          ref={raceTimeRef}
          className={styles.vdot__input__race}
          name="recentRaceTime"
          defaultValue={vdotFormData.recentRaceTime}
          placeholder="00:00:00(HH:MM:SS)"
          required
        />
        {raceTimeFormatCheckSucceeded === false && <FormatError />}
      </label>
      <label className={styles.vdot__input__label}>
        Distance
        <select
          ref={raceDistanceRef}
          defaultValue={vdotFormData.recentRaceDistance}
          className={styles.vdot__input__distance}
          name="recentRaceDistance"
          required
        >
          <option value={1609.34}>Mile</option>
          <option value={3218.69}>2 Mile</option>
          <option value={5000}>5k</option>
          <option value={10000}>10k</option>
          <option value={15000}>15k</option>
          <option value={21082.41}>Half Marathon</option>
          <option value={42164.81}>Marathon</option>
        </select>
      </label>
    </>
  );
};

export default VdotInputs;
