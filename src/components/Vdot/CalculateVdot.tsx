import { HiQuestionMarkCircle } from "react-icons/hi";
import styles from "./CalculateVdot.module.css";
import { useState } from "react";
import Vdot from "../../utils/vdot";
import { checkRaceTimeFormat } from "../../utils/regex";

const CalculateVdot = () => {
  const [recentRaceTime, setRecentRaceTime] = useState<string>("");
  const [recentRaceDistance, setRecentRaceDistance] = useState<number>(1609.34);
  const [raceTimeFormatCheck, setRaceTimeFormatCheck] =
    useState<boolean>(false);
  const handleRecentRaceTimeInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecentRaceTime(e.target.value);
  };
  const handleRecentRaceDistanceInput = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRecentRaceDistance(Number(e.target.value));
  };
  console.log(raceTimeFormatCheck);
  const handleVdotFormSubmit = (e) => {
    e.preventDefault();
    if (checkRaceTimeFormat(recentRaceTime)) {
      setRaceTimeFormatCheck(true);
    }
    const vdotScore = Vdot.convertToRacePace(
      recentRaceDistance,
      recentRaceTime
    );
    return vdotScore;
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
              required
            />
          </label>
          <label className={styles.vdot__input__label}>
            Distance
            <select
              value={recentRaceDistance}
              className={styles.vdot__input__distance}
              name="recent-race-distance"
              onChange={handleRecentRaceDistanceInput}
              required
            >
              <option value={1609.34}>Mile</option>
              <option value={3218.69}>2 Mile</option>
              <option value={5000}>5k</option>
              <option value={10000}>10k</option>
              <option value={15000}>15k</option>
              <option value={21082.41}>Half Marathon</option>
              <option value={42164.81}>Marathon</option>
            </select>
          </label>
        </div>
        <button className={styles.vdot__calculate__button} type="submit">
          Analyze Race
        </button>
      </form>
      {raceTimeFormatCheck && <p>hello</p>}
    </section>
  );
};

// 1 mile = 1609.34 m
// 2 mile = 3218.69 m
// 5k = 5000m
// 10k = 10000m
// 15k = 15000m
// half marathon = 21082.41 m
// marathon = 42164.81 m
export default CalculateVdot;
