import styles from "./CorePrinciples.module.css";

const subThresholdContent = `The bulk of your quality work is done below your lactate threshold(LT2). 
This is generally between 2.5-3.5 mmol/L, allowing for high volume without burnout.`;
const controlledIntensityContent = `It is crucial to keep easy runs extremely easy so you are ready for the next sub-threshold session. A good rule of thumb is below 70% max HR.`;
const simplifiedStructureContent = `There is no need for frequent lactate testing as this approach replaces complex, intense VO2 max and tempo workouts with a consistent repeatable sub-threshold pattern.`;
const highVolumeLowStrainContent = `Aims to accumulate more training stress sustainably by keeping workout intensity at a controlled state (typically 20-30% of weekly time), which builds a strong aerobic engine.`;

const CorePrinciples = () => {
  return (
    <div className={styles.core__principles__container}>
      <div className={styles.core__principles__title}>Core Principles</div>
      <div className={styles.core__principles__grid}>
        <div className={styles.core__principles__grid__item}>
          <div className={styles.core__principles__grid__item__title}>
            Sub-threshold
          </div>
          <div className={styles.core__principles__grid__item__content}>
            {subThresholdContent}
          </div>
        </div>
        <div className={styles.core__principles__grid__item}>
          <div className={styles.core__principles__grid__item__title}>
            Controlled Intensity
          </div>
          <div className={styles.core__principles__grid__item__content}>
            {controlledIntensityContent}
          </div>
        </div>
        <div className={styles.core__principles__grid__item}>
          <div className={styles.core__principles__grid__item__title}>
            Simplified Structure
          </div>
          <div className={styles.core__principles__grid__item__content}>
            {simplifiedStructureContent}
          </div>
        </div>
        <div className={styles.core__principles__grid__item}>
          <div className={styles.core__principles__grid__item__title}>
            High Volume, Low Strain
          </div>
          <div className={styles.core__principles__grid__item__content}>
            {highVolumeLowStrainContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorePrinciples;
