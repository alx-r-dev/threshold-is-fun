import { HiQuestionMarkCircle } from "react-icons/hi";
import styles from "./CalculateVdot.module.css";
import { useState, type FormEvent } from "react";
import Vdot from "../../utils/vdot";
import { checkRaceTimeFormat } from "../../utils/regex";
import type { VdotTime } from "../../types/vdot";
import VdotPaces from "./VdotPaces";
import useOutsideClick from "../../hooks/useOutsideClick";
import VdotPopup from "./VdotPopup";

const FormatError = () => {
  return (
    <span style={{ color: "red" }}>
      Please format the race time as HH:MM:SS (00:00:00)
    </span>
  );
};

const CalculateVdot = () => {
  const [recentRaceTime, setRecentRaceTime] = useState<string>("");
  const [recentRaceDistance, setRecentRaceDistance] = useState<number>(1609.34);
  const [raceTimeFormatCheckFailed, setRaceTimeFormatCheckFailed] =
    useState<boolean>(false);
  const [vdotPaces, setVdotPaces] = useState<VdotTime | null>(null);
  const [vdotScore, setVdotScore] = useState<number>(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleQuestionMarkClick = () => {
    setIsOpen(!isOpen);
  };
  const isOutsideClickRef = useOutsideClick(handleQuestionMarkClick, isOpen);

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

  const handleVdotFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkRaceTimeFormat(recentRaceTime)) {
      const vdotPaces = Vdot.convertToRacePace(
        recentRaceDistance,
        recentRaceTime
      );
      const vdotScore = Vdot.calculateVdot(recentRaceDistance, recentRaceTime);
      setRaceTimeFormatCheckFailed(false);
      setVdotPaces(vdotPaces);
      setVdotScore(vdotScore);
    } else {
      setRaceTimeFormatCheckFailed(true);
    }
  };

  return (
    <section className={styles.vdot}>
      <div>
        <div className={styles.vdot__title}>
          Calculate VDOT
          <div style={{ position: "relative" }}>
            <div ref={isOutsideClickRef}>
              <HiQuestionMarkCircle
                style={{ cursor: "pointer" }}
                onClick={handleQuestionMarkClick}
              />
            </div>
            <VdotPopup isOpen={isOpen} />
          </div>
        </div>
        <div className={styles.vdot__subtext}>
          A running performance score to gauge current fitness level
        </div>
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
              placeholder="00:00:00(HH:MM:SS)"
              required
            />
            {raceTimeFormatCheckFailed && <FormatError />}
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
      {vdotPaces && <VdotPaces vdotScore={vdotScore} vdotPaces={vdotPaces} />}
    </section>
  );
};

export default CalculateVdot;
