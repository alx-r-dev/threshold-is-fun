import styles from "./VdotPaces.module.css";
import VdotScore from "./VdotScore";
import type { VdotFormData } from "../../types/vdot";

type VdotPacesProps = {
  vdotFormData: VdotFormData;
  isDataAvailable: boolean;
};

const UnderLine = () => {
  return (
    <div style={{ borderBottom: "1px solid lightgray", marginTop: "20px" }} />
  );
};

const VdotPaces = ({ vdotFormData, isDataAvailable }: VdotPacesProps) => {
  if (isDataAvailable === false) {
    return;
  }
  return (
    <>
      <UnderLine />
      <div className={styles.vdot__paces__container}>
        <VdotScore vdotScore={vdotFormData.formattedVdotScore} />

        <div className={styles.vdot__paces__table}>
          <div className={styles.vdot__paces__headers}>
            <span>Pace</span>
            <span>Per Mile</span>
            <span>Per Kilometer</span>
          </div>
          <div className={styles.vdot__paces__row}>
            <span>Easy</span>
            <span>{vdotFormData.formatMileEasyPace}</span>
            <span>{vdotFormData.formatKilometerEasyPace}</span>
          </div>
          <div className={styles.vdot__paces__row}>
            <span>Threshold</span>
            <span>{vdotFormData.formatMileThresholdPace}</span>
            <span>{vdotFormData.formatKilometerThresholdPace}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VdotPaces;
