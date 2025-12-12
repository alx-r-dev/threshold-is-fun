import styles from "./CalculateVdot.module.css";

const CalculateVdot = () => {
  return (
    <section className={styles.vdot}>
      <div className={styles.vdot__title}>
        Calculate VDOT add question mark thing with popup
      </div>
      <div className={styles.vdot__subtext}>
        A running performance score to gauge current fitness level
      </div>
      <form className={styles.vdot__form}>
        <div className={styles.vdot__input_flexbox}>
          <label className={styles.vdot__input}>
            Recent Race Time
            <input name="recent-race-time" placeholder="00:00:00" />
          </label>
          <label className={styles.vdot__input}>
            Distance
            <select name="recent-race-distance">
              <option value="mile">Mile</option>
              <option value="2mile">2 Mile</option>
              <option value="5k">5k</option>
              <option value="10k">10k</option>
              <option value="half">Half Marathon</option>
              <option value="Marathon">Marathon</option>
            </select>
          </label>
        </div>
        <button className={styles.vdot__calculate__button} type="submit">
          Calculate
        </button>
      </form>
    </section>
  );
};

export default CalculateVdot;
