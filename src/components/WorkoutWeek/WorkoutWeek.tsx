import RoundedCard from "../ui/Card/RoundedCard";
import WorkoutGridNotes from "../WorkoutGrid/WorkoutGridNotes";
import styles from "./WorkoutWeek.module.css";

const Notes = () => {
  return (
    <>
      <li>Sub-threshold training should be 20-30% of weekly running time</li>
      <li>2-3 quality sub-threshold sessions per week</li>
      <li>Maintain sub-threshold levels (2.5-3.5 mmol/L lactate)</li>
      <li>Keep easy days extremely easy</li>
    </>
  );
};

const WorkoutDayFormat = ({
  warmUp,
  subT,
  cooldown
}: {
  warmUp: string;
  subT: string;
  cooldown: string;
}) => {
  return (
    <>
      <div className={styles.workout__week__formatter}>
        <span>
          {" "}
          <span style={{ color: "grey" }}>Warm up:</span> {warmUp}
        </span>
        <span>
          {" "}
          <span style={{ color: "grey" }}>SubT:</span> {subT}
        </span>
        <span>
          {" "}
          <span style={{ color: "grey" }}>Cooldown:</span> {cooldown}
        </span>
      </div>
    </>
  );
};

const workoutWeekRows = [
  { Day: "Monday", Run: "rest" },
  {
    Day: "Tuesday",
    Run: (
      <WorkoutDayFormat
        warmUp="1 mile"
        subT="3 x 3k, 60-90s recovery"
        cooldown="1 mile"
      />
    )
  },
  { Day: "Wednesday", Run: "Easy run" },
  {
    Day: "Thursday",
    Run: (
      <WorkoutDayFormat
        warmUp="1 mile"
        subT="4 x 2k, 60s recovery"
        cooldown="1 mile"
      />
    )
  },
  { Day: "Friday", Run: "Easy Run" },
  {
    Day: "Saturday",
    Run: (
      <WorkoutDayFormat
        warmUp="1 mile"
        subT="8-12 x 1k, 60s recovery"
        cooldown="1 mile"
      />
    )
  },
  { Day: "Sunday", Run: "Easy Long run" }
];

const WorkoutWeek = ({ isDataAvailable }: { isDataAvailable: boolean }) => {
  if (isDataAvailable === false) {
    return;
  }

  const workoutWeekHeaders = Object.keys(workoutWeekRows[0]);
  return (
    <RoundedCard>
      <div className={styles.workout__week__chart__container__header}>
        <span style={{ fontWeight: 500, fontSize: "1.25rem" }}>
          Sample weekly training structure
        </span>
      </div>
      <div className={styles.workout__week__chart__header}>
        {workoutWeekHeaders.map((item, index) => {
          return (
            <span key={index} style={{ flex: 1 }}>
              {item}
            </span>
          );
        })}
      </div>
      {workoutWeekRows.map((item, index) => {
        return (
          <div key={index} className={styles.workout__week__chart__rows}>
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
    </RoundedCard>
  );
};

export default WorkoutWeek;
