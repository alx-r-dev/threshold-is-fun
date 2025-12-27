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
};

const CalculateVdot = ({
  vdotFormData,
  setVdotFormData,
  setRaceTimeFormatCheckSucceeded,
  raceTimeFormatCheckSucceeded,
  isDataAvailable
}: CalculateVdotProps) => {
  return (
    <RoundedCard>
      <VdotHeader />
      <VdotForm
        vdotFormData={vdotFormData}
        setVdotFormData={setVdotFormData}
        setRaceTimeFormatCheckSucceeded={setRaceTimeFormatCheckSucceeded}
        raceTimeFormatCheckSucceeded={raceTimeFormatCheckSucceeded}
      />
      <VdotPaces
        vdotFormData={vdotFormData}
        isDataAvailable={isDataAvailable}
      />
    </RoundedCard>
  );
};

export default CalculateVdot;
