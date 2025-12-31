import SwitchToggle from "../SwitchToggle/SwitchToggle";
import WorkoutGridNotes from "./WorkoutGridNotes";
import { formatPacesBasedOnPaceUnit } from "../../utils/paceUnit";
import styles from "./WorkoutGrid.module.css";
import type { VdotFormData, NorwegianGridData } from "../../types/vdot";
import RoundedCard from "../ui/Card/RoundedCard";
import Vdot from "../../utils/vdot";
import Disclaimer from "../Disclaimer/Disclaimer";

type WorkoutGridProps = {
  vdotFormData: VdotFormData;
  isDataAvailable: boolean;
  norwegianGridData: NorwegianGridData;
  setNorwegianGridData: (
    value: NorwegianGridData | ((val: NorwegianGridData) => NorwegianGridData)
  ) => void;
};

const Notes = () => {
  return (
    <>
      <li>Recovery can be standing, walking, or very slow jogging</li>
      <li>Keep recovery between 60-90s</li>
      <li>Keep easy runs extremely easy</li>
    </>
  );
};

const WorkoutGrid = ({
  vdotFormData,
  isDataAvailable,
  norwegianGridData,
  setNorwegianGridData
}: WorkoutGridProps) => {
  const workoutPaces = Vdot.calculateMasBands(
    vdotFormData.recentRaceDistance,
    vdotFormData.recentRaceTime,
    norwegianGridData.paceUnit
  );
  const shortIntervalRange = formatPacesBasedOnPaceUnit(
    workoutPaces.shortRanges,
    norwegianGridData.paceUnit
  );
  const mediumIntervalRange = formatPacesBasedOnPaceUnit(
    workoutPaces.mediumRanges,
    norwegianGridData.paceUnit
  );
  const longIntervalRange = formatPacesBasedOnPaceUnit(
    workoutPaces.longRanges,
    norwegianGridData.paceUnit
  );

  const data = [
    {
      Workout: "Short Interval",
      Structure: "8-12 x 1k",
      "Target Pace": shortIntervalRange,
      Recovery: "60s"
    },
    {
      Workout: "Medium Interval",
      Structure: "4-6 x 2k",
      "Target Pace": mediumIntervalRange,
      Recovery: "60s"
    },
    {
      Workout: "Long Interval",
      Structure: "3 x 3k",
      "Target Pace": longIntervalRange,
      Recovery: "60-90s"
    }
  ];

  if (isDataAvailable === false) {
    return;
  }
  const workoutHeaders = Object.keys(data[0]);
  return (
    <RoundedCard>
      <div className={styles.workout__chart__container__header}>
        <span style={{ fontWeight: 500, fontSize: "1.25rem" }}>
          Norwegian Singles Workouts
        </span>
        <SwitchToggle
          paceUnit={norwegianGridData.paceUnit}
          setNorwegianGridData={setNorwegianGridData}
        />
      </div>
      <div className={styles.workout__chart__header}>
        {workoutHeaders.map((item, index) => {
          return (
            <span key={index} style={{ flex: 1 }}>
              {item}
            </span>
          );
        })}
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.workout__chart__rows}>
            {Object.values(item).map((value, index) => {
              return (
                <span key={index} style={{ flex: 1 }}>
                  {value}
                </span>
              );
            })}
          </div>
        );
      })}
      <WorkoutGridNotes>
        <Notes />
      </WorkoutGridNotes>
      <Disclaimer />
    </RoundedCard>
  );
};

export default WorkoutGrid;
