import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./VdotForm.module.css";
import VdotInputs from "./VdotInputs";
import { checkRaceTimeFormat } from "../../utils/regex";
import { type VdotFormData } from "../../types/vdot";
import { formattedVdotPaces } from "../../utils/paceUnit";
import { type LocalStorageValue } from "../../hooks/useLocalStorage";
import Vdot from "../../utils/vdot";

type VdotFormProps = {
  handleFormDataInput: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  vdotFormData: VdotFormData;
  setRaceTimeFormatCheckSucceeded: Dispatch<SetStateAction<boolean | null>>;
  raceTimeFormatCheckSucceeded: boolean | null;
  setVdotFormData: (
    value: LocalStorageValue | ((val: LocalStorageValue) => LocalStorageValue)
  ) => void;
};

const VdotForm = ({
  handleFormDataInput,
  vdotFormData,
  setRaceTimeFormatCheckSucceeded,
  raceTimeFormatCheckSucceeded,
  setVdotFormData
}: VdotFormProps) => {
  const handleVdotFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkRaceTimeFormat(vdotFormData.recentRaceTime)) {
      setRaceTimeFormatCheckSucceeded(true);
      const vdotPaces = formattedVdotPaces(vdotFormData);
      const workoutPaces = Vdot.calculateMasBands(
        vdotFormData.recentRaceDistance,
        vdotFormData.recentRaceTime,
        "miles"
      );

      const vdotData = { ...vdotFormData, ...vdotPaces, ...workoutPaces };
      setVdotFormData(vdotData);
    } else {
      setRaceTimeFormatCheckSucceeded(false);
    }
  };

  return (
    <form onSubmit={handleVdotFormSubmit} className={styles.vdot__form}>
      <div className={styles.vdot__input_flexbox}>
        <VdotInputs
          handleFormDataInput={handleFormDataInput}
          vdotFormData={vdotFormData}
          raceTimeFormatCheckSucceeded={raceTimeFormatCheckSucceeded}
        />
      </div>
      <button className={styles.vdot__calculate__button} type="submit">
        Analyze Race
      </button>
    </form>
  );
};

export default VdotForm;
