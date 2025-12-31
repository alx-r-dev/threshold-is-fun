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
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(
    LocalStorage.getLocalStorage(vdotLocalStorageKey) !== null ? true : false
  );

  // const isDataAvailable =
  //   LocalStorage.getLocalStorage(vdotLocalStorageKey) !== null ? true : false;
  // // raceTimeFormatCheckSucceeded ||
  const handleClearAllData = () => {
    setRaceTimeFormatCheckSucceeded(null);
    setIsDataAvailable(false);
    LocalStorage.clearLocalStorage();
  };
  return (
    <>
      <CalculateVdot
        vdotFormData={vdotFormData}
        setVdotFormData={setVdotFormData}
        setRaceTimeFormatCheckSucceeded={setRaceTimeFormatCheckSucceeded}
        raceTimeFormatCheckSucceeded={raceTimeFormatCheckSucceeded}
        isDataAvailable={isDataAvailable}
        handleClearAllData={handleClearAllData}
        setIsDataAvailable={setIsDataAvailable}
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
