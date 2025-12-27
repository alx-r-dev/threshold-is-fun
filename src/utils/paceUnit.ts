import Vdot from "./vdot";

function formatPacesBasedOnPaceUnit(paces: string[], paceUnit: string) {
  const unit = paceUnit === "miles" ? "mi" : "km";
  const paceRanges = `${paces[0]} - ${paces[1]}/${unit}`;
  return paceRanges;
}

function formattedVdotPaces(
  recentRaceDistance: number,
  recentRaceTime: string
) {
  const vdotPaces = Vdot.convertToRacePace(recentRaceDistance, recentRaceTime);
  const vdotScore = Vdot.calculateVdot(recentRaceDistance, recentRaceTime);

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
