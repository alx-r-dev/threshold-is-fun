import styles from "./VdotPaces.module.css";
import VdotScore from "./VdotScore";
import type { VdotFormData } from "./CalculateVdot";
import Vdot from "../../utils/vdot";

type VdotPacesProps = {
  vdotFormData: VdotFormData;
};

const UnderLine = () => {
  return <div style={{ borderBottom: "1px solid lightgray" }} />;
};

const VdotPaces = ({ vdotFormData }: VdotPacesProps) => {
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
  return (
    <>
      <UnderLine />
      <div className={styles.vdot__paces__container}>
        <VdotScore vdotScore={formattedVdotScore} />

        <div className={styles.vdot__paces__table}>
          <div className={styles.vdot__paces__headers}>
            <span>Pace</span>
            <span>Per Mile</span>
            <span>Per Kilometer</span>
          </div>
          <div className={styles.vdot__paces__row}>
            <span>Easy</span>
            <span>{formatMileEasyPace}</span>
            <span>{formatKilometerEasyPace}</span>
          </div>
          <div className={styles.vdot__paces__row}>
            <span>Threshold</span>
            <span>{formatMileThresholdPace}</span>
            <span>{formatKilometerThresholdPace}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VdotPaces;
