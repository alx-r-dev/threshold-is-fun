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
  const kilometerThresholdPace = vdotPaces.kilometer;
  const formatKilometerThresholdPace = `${kilometerThresholdPace}/k`;
  const mileThresholdPace = vdotPaces.mile;
  const formatMileThresholdPace = `${mileThresholdPace}/m`;
  const formattedVdotScore = Math.round(vdotScore);
  return (
    <>
      <UnderLine />
      <div className={styles.vdot__paces__container}>
        <VdotScore vdotScore={formattedVdotScore} />

        <div className={styles.vdot__paces__table}>
          <div className={styles.vdot__paces__headers}>
            <span style={{ flex: 1 }}>Pace</span>
            <span style={{ flex: 1 }}>Per Mile</span>
            <span style={{ flex: 1 }}>Per Kilometer</span>
          </div>
          <div className={styles.vdot__paces__row}>
            <span style={{ flex: 1, color: "rgb(4, 116, 186)" }}>Easy</span>
            <span style={{ flex: 1 }}>8:45/m</span>
            <span style={{ flex: 1 }}>5:45/k</span>
          </div>
          <div className={styles.vdot__paces__row}>
            <span style={{ flex: 1, color: "rgb(4, 116, 186)" }}>
              Threshold
            </span>
            <span style={{ flex: 1 }}>6:09/m</span>
            <span style={{ flex: 1 }}>3:35/k</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VdotPaces;
