import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./VdotForm.module.css";
import VdotInputs from "./VdotInputs";
import { checkRaceTimeFormat } from "../../utils/regex";
import type { VdotFormData } from "./CalculateVdot";

type VdotFormProps = {
  handleFormDataInput: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  vdotFormData: VdotFormData;
  setRaceTimeFormatCheckSucceeded: Dispatch<SetStateAction<boolean | null>>;
  raceTimeFormatCheckSucceeded: boolean | null;
};

const VdotForm = ({
  handleFormDataInput,
  vdotFormData,
  setRaceTimeFormatCheckSucceeded,
  raceTimeFormatCheckSucceeded
}: VdotFormProps) => {
  const handleVdotFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkRaceTimeFormat(vdotFormData.recentRaceTime)) {
      setRaceTimeFormatCheckSucceeded(true);
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
