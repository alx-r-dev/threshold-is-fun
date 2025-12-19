import styles from "./VdotPaces.module.css";
import type { VdotTime } from "../../types/vdot";
import VdotScore from "./VdotScore";

type VdotPacesProps = {
  vdotScore: number;
  vdotPaces: VdotTime;
};

const UnderLine = () => {
  return <div style={{ borderBottom: "1px solid lightgray" }} />;
};

const VdotPaces = ({ vdotScore, vdotPaces }: VdotPacesProps) => {
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
