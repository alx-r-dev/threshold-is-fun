import { useState, type ChangeEvent } from "react";
import VdotPaces from "./VdotPaces";
import WorkoutGrid from "../WorkoutGrid/WorkoutGrid";
import VdotHeader from "./VdotHeader";
import VdotForm from "./VdotForm";
import useLocalStorage, {
  initialLocalStorageValue,
  localStorageKey
} from "../../hooks/useLocalStorage";
import LocalStorage from "../../utils/localStorage";
import WorkoutWeek from "../WorkoutWeek/WorkoutWeek";
import RoundedCard from "../ui/Card/RoundedCard";

const CalculateVdot = () => {
  const [vdotFormData, setVdotFormData] = useLocalStorage(
    localStorageKey,
    initialLocalStorageValue
  );

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

  const showAllComponents =
    raceTimeFormatCheckSucceeded ||
    LocalStorage.getLocalStorage(localStorageKey);

  //TODO: refactor so section isnt needed and showallcomponents isnt needed so
  //much
  //1. Create a common ui component for the rounded white sections that the
  //   other components go inside of
  //2. Put vdotheader and form and paces inside a component so rounded card
  //   doesnt show
  //3. Refactor with plain objects instead of a class?
  return (
    <>
      <RoundedCard>
        <VdotHeader />
        <VdotForm
          handleFormDataInput={handleFormDataInput}
          vdotFormData={vdotFormData}
          setVdotFormData={setVdotFormData}
          setRaceTimeFormatCheckSucceeded={setRaceTimeFormatCheckSucceeded}
          raceTimeFormatCheckSucceeded={raceTimeFormatCheckSucceeded}
        />
        {showAllComponents && <VdotPaces vdotFormData={vdotFormData} />}
      </RoundedCard>

      {showAllComponents && <WorkoutGrid vdotFormData={vdotFormData} />}
      {showAllComponents && <WorkoutWeek />}
    </>
  );
};

export default CalculateVdot;
