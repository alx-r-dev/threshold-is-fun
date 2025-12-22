import styles from "./VdotScore.module.css";

type VdotScoreProps = {
  vdotScore?: number;
};

const VdotScore = ({ vdotScore }: VdotScoreProps) => {
  return (
    <div className={styles.vdot__score__circle}>
      <span style={{ fontWeight: 500 }}>VDOT</span>
      <span style={{ fontWeight: 700, fontSize: "35px" }}>{vdotScore}</span>
    </div>
  );
};

export default VdotScore;
