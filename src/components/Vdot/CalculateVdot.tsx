import type { Dispatch, SetStateAction } from "react";
import type { VdotFormData } from "../../types/vdot";
import RoundedCard from "../ui/Card/RoundedCard";
import VdotForm from "./VdotForm";
import VdotHeader from "./VdotHeader";
import VdotPaces from "./VdotPaces";

type CalculateVdotProps = {
  vdotFormData: VdotFormData;
  setRaceTimeFormatCheckSucceeded: Dispatch<SetStateAction<boolean | null>>;
  raceTimeFormatCheckSucceeded: boolean | null;
  setVdotFormData: (
    value: VdotFormData | ((val: VdotFormData) => VdotFormData)
  ) => void;
  isDataAvailable: boolean;
  handleClearAllData: () => void;
  setIsDataAvailable: Dispatch<React.SetStateAction<boolean>>;
};

const CalculateVdot = ({
  vdotFormData,
  setVdotFormData,
  setRaceTimeFormatCheckSucceeded,
  raceTimeFormatCheckSucceeded,
  isDataAvailable,
  handleClearAllData,
  setIsDataAvailable
}: CalculateVdotProps) => {
  return (
    <RoundedCard>
      <VdotHeader
        isDataAvailable={isDataAvailable}
        handleClearAllData={handleClearAllData}
      />
      <VdotForm
        vdotFormData={vdotFormData}
        setVdotFormData={setVdotFormData}
        setRaceTimeFormatCheckSucceeded={setRaceTimeFormatCheckSucceeded}
        raceTimeFormatCheckSucceeded={raceTimeFormatCheckSucceeded}
        setIsDataAvailable={setIsDataAvailable}
      />
      <VdotPaces
        vdotFormData={vdotFormData}
        isDataAvailable={isDataAvailable}
      />
    </RoundedCard>
  );
};

export default CalculateVdot;
