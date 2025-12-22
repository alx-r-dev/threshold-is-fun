import type { VdotFormData } from "../types/vdot";
import Vdot from "./vdot";

function formatPacesBasedOnPaceUnit(paces: string[], paceUnit: string) {
  const unit = paceUnit === "miles" ? "mi" : "km";
  const paceRanges = `${paces[0]} - ${paces[1]}/${unit}`;
  return paceRanges;
}

function formattedVdotPaces(vdotFormData: VdotFormData) {
  const vdotPaces = Vdot.convertToRacePace(
    vdotFormData.recentRaceDistance,
    vdotFormData.recentRaceTime
  );
  const vdotScore = Vdot.calculateVdot(
    vdotFormData.recentRaceDistance,
    vdotFormData.recentRaceTime
  );

  const kilometerThresholdPace = vdotPaces.kilometer.threshold;
  const kilometerEasyPace = vdotPaces.kilometer.easy;
  const formatKilometerThresholdPace = `${kilometerThresholdPace}/km`;
  const formatKilometerEasyPace = `${kilometerEasyPace}/km`;
  const mileThresholdPace = vdotPaces.mile.threshold;
  const mileEasyPace = vdotPaces.mile.easy;
  const formatMileThresholdPace = `${mileThresholdPace}/mi`;
  const formatMileEasyPace = `${mileEasyPace}/mi`;
  const formattedVdotScore = Math.round(vdotScore);

  return {
    formatKilometerEasyPace,
    formatKilometerThresholdPace,
    formatMileEasyPace,
    formatMileThresholdPace,
    formattedVdotScore
  };
}

export { formatPacesBasedOnPaceUnit, formattedVdotPaces };
