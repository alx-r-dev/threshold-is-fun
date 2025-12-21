import styles from "./CalculateVdot.module.css";
import { useState, type ChangeEvent } from "react";
import { type VdotTime } from "../../types/vdot";
import VdotPaces from "./VdotPaces";
import WorkoutGrid from "../WorkoutGrid/WorkoutGrid";
import VdotHeader from "./VdotHeader";
import VdotForm from "./VdotForm";

export type VdotFormData = {
  recentRaceTime: string;
  recentRaceDistance: number;
};

export type VdotData = {
  vdotScore: number | null;
  vdotPaces: VdotTime | null;
};

const CalculateVdot = () => {
  const [vdotFormData, setVdotFormData] = useState<VdotFormData>({
    recentRaceTime: "",
    recentRaceDistance: 1609.34
  });
  const [raceTimeFormatCheckSucceeded, setRaceTimeFormatCheckSucceeded] =
    useState<boolean | null>(null);

  const handleFormDataInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setVdotFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  return (
    <>
      <section className={styles.vdot}>
        <VdotHeader />
        <VdotForm
          handleFormDataInput={handleFormDataInput}
          vdotFormData={vdotFormData}
          setRaceTimeFormatCheckSucceeded={setRaceTimeFormatCheckSucceeded}
          raceTimeFormatCheckSucceeded={raceTimeFormatCheckSucceeded}
        />
        {raceTimeFormatCheckSucceeded && (
          <VdotPaces vdotFormData={vdotFormData} />
        )}
      </section>

      {raceTimeFormatCheckSucceeded && (
        <WorkoutGrid vdotFormData={vdotFormData} />
      )}
    </>
  );
};

export default CalculateVdot;
