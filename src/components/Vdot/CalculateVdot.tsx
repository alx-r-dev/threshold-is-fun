import { HiQuestionMarkCircle } from "react-icons/hi";
import styles from "./CalculateVdot.module.css";
import { useState } from "react";

const CalculateVdot = () => {
  const [recentRaceTime, setRecentRaceTime] = useState<string>("");
  const [recentRaceDistance, setRecentRaceDistance] = useState<string>("mile");
  const handleRecentRaceTimeInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecentRaceTime(e.target.value);
  };
  const handleRecentRaceDistanceInput = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRecentRaceDistance(e.target.value);
  };
  const handleVdotFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.vdot}>
      <div className={styles.vdot__title}>
        Calculate VDOT {<HiQuestionMarkCircle />}
      </div>
      <div className={styles.vdot__subtext}>
        A running performance score to gauge current fitness level
      </div>
      <form onSubmit={handleVdotFormSubmit} className={styles.vdot__form}>
        <div className={styles.vdot__input_flexbox}>
          <label className={styles.vdot__input__label}>
            Recent Race Time
            <input
              className={styles.vdot__input__race}
              name="recent-race-time"
              onChange={handleRecentRaceTimeInput}
              value={recentRaceTime}
              placeholder="00:00:00"
            />
          </label>
          <label className={styles.vdot__input__label}>
            Distance
            <select
              value={recentRaceDistance}
              className={styles.vdot__input__distance}
              name="recent-race-distance"
              onChange={handleRecentRaceDistanceInput}
            >
              <option value="mile">Mile</option>
              <option value="2mile">2 Mile</option>
              <option value="5k">5k</option>
              <option value="10k">10k</option>
              <option value="15k">15k</option>
              <option value="half">Half Marathon</option>
              <option value="Marathon">Marathon</option>
            </select>
          </label>
        </div>
        <button className={styles.vdot__calculate__button} type="submit">
          Analyze Race
        </button>
      </form>
    </section>
  );
};

export default CalculateVdot;
