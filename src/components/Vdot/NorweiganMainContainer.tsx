import { useState } from "react";
import WorkoutGrid from "../WorkoutGrid/WorkoutGrid";
import useLocalStorage, {
  initialNorwegianLocalStorageValue,
  initialVdotLocalStorageValue,
  norwegianLocalStorageKey,
  vdotLocalStorageKey
} from "../../hooks/useLocalStorage";
import LocalStorage from "../../utils/localStorage";
import WorkoutWeek from "../WorkoutWeek/WorkoutWeek";
import CalculateVdot from "./CalculateVdot";

const NorwegianMainContainer = () => {
  const [vdotFormData, setVdotFormData] = useLocalStorage(
    vdotLocalStorageKey,
    initialVdotLocalStorageValue
  );
  const [norwegianGridData, setNorwegianGridData] = useLocalStorage(
    norwegianLocalStorageKey,
    initialNorwegianLocalStorageValue
  );
  const [raceTimeFormatCheckSucceeded, setRaceTimeFormatCheckSucceeded] =
    useState<boolean | null>(null);

  const isDataAvailable =
    raceTimeFormatCheckSucceeded ||
    LocalStorage.getLocalStorage(vdotLocalStorageKey);

  return (
    <>
      <CalculateVdot
        vdotFormData={vdotFormData}
        setVdotFormData={setVdotFormData}
        setRaceTimeFormatCheckSucceeded={setRaceTimeFormatCheckSucceeded}
        raceTimeFormatCheckSucceeded={raceTimeFormatCheckSucceeded}
        isDataAvailable={isDataAvailable}
      />
      <WorkoutGrid
        vdotFormData={vdotFormData}
        norwegianGridData={norwegianGridData}
        setNorwegianGridData={setNorwegianGridData}
        isDataAvailable={isDataAvailable}
      />
      <WorkoutWeek isDataAvailable={isDataAvailable} />
    </>
  );
};

export default NorwegianMainContainer;
