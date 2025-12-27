import {
  useRef,
  type Dispatch,
  type FormEvent,
  type SetStateAction
} from "react";
import styles from "./VdotForm.module.css";
import VdotInputs from "./VdotInputs";
import { checkRaceTimeFormat } from "../../utils/regex";
import { type VdotFormData } from "../../types/vdot";
import { formattedVdotPaces } from "../../utils/paceUnit";

type VdotFormProps = {
  vdotFormData: VdotFormData;
  setRaceTimeFormatCheckSucceeded: Dispatch<SetStateAction<boolean | null>>;
  raceTimeFormatCheckSucceeded: boolean | null;
  setVdotFormData: (
    value: VdotFormData | ((val: VdotFormData) => VdotFormData)
  ) => void;
};

const VdotForm = ({
  vdotFormData,
  setRaceTimeFormatCheckSucceeded,
  raceTimeFormatCheckSucceeded,
  setVdotFormData
}: VdotFormProps) => {
  const raceTimeRef = useRef<HTMLInputElement>(null);
  const raceDistanceRef = useRef<HTMLSelectElement>(null);

  const handleVdotFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (raceTimeRef.current && raceDistanceRef.current && raceTimeRef.current) {
      const raceTime = raceTimeRef.current.value;
      const raceDistance = Number(raceDistanceRef.current.value);
      if (checkRaceTimeFormat(raceTime)) {
        setRaceTimeFormatCheckSucceeded(true);
        const vdotPaces = formattedVdotPaces(raceDistance, raceTime);
        setVdotFormData((prevFormData) => {
          return {
            ...prevFormData,
            recentRaceTime: raceTime,
            recentRaceDistance: raceDistance,
            ...vdotPaces
          };
        });
      } else {
        setRaceTimeFormatCheckSucceeded(false);
      }
    }
  };

  return (
    <form onSubmit={handleVdotFormSubmit} className={styles.vdot__form}>
      <div className={styles.vdot__input_flexbox}>
        <VdotInputs
          raceTimeRef={raceTimeRef}
          raceDistanceRef={raceDistanceRef}
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
