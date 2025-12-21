import { useState } from "react";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import WorkoutGridNotes from "./WorkoutGridNotes";
import Vdot from "../../utils/vdot";
import { formatPacesBasedOnPaceUnit } from "../../utils/paceUnit";
import styles from "./WorkoutGrid.module.css";
import type { VdotFormData } from "../Vdot/CalculateVdot";

type WorkoutGridProps = {
  vdotFormData: VdotFormData;
};

const WorkoutGrid = ({ vdotFormData }: WorkoutGridProps) => {
  const [paceUnit, setPaceUnit] = useState<string>("miles");
  const workoutPaces = Vdot.calculateMasBands(
    vdotFormData.recentRaceDistance,
    vdotFormData.recentRaceTime,
    paceUnit
  );
  const data = [
    {
      Workout: "Short Interval",
      Structure: "8-12 x 1k",
      "Target Pace": formatPacesBasedOnPaceUnit(workoutPaces, paceUnit)
        .shortRangeString,
      Recovery: "60s"
    },
    {
      Workout: "Medium Interval",
      Structure: "4-6 x 2k",
      "Target Pace": formatPacesBasedOnPaceUnit(workoutPaces, paceUnit)
        .mediumRangeString,
      Recovery: "60s"
    },
    {
      Workout: "Long Interval",
      Structure: "3 x 3k",
      "Target Pace": formatPacesBasedOnPaceUnit(workoutPaces, paceUnit)
        .longRangeString,
      Recovery: "60-90s"
    }
  ];

  const workoutHeaders = Object.keys(data[0]);
  return (
    <div className={styles.workout__chart__container}>
      <div className={styles.workout__chart__container__header}>
        <span style={{ fontWeight: "bold" }}>Norwegian Singles Workouts</span>
        <SwitchToggle paceUnit={paceUnit} setPaceUnit={setPaceUnit} />
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
      <WorkoutGridNotes />
    </div>
  );
};

export default WorkoutGrid;
