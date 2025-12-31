import { FaRunning } from "react-icons/fa";
import RoundedCard from "../ui/Card/RoundedCard";
import IconHeader from "../ui/Header/IconHeader";
import NumberTitle from "../ui/NumberTitle";
import CheckMarkList from "../ui/CheckMarkList";
import styles from "./HowToGetStarted.module.css";
import ButtonRedirect from "../ButtonRedirect/ButtonRedirect";

const howToGetStartedSubtext = `Follow these steps to start implementing the Norwegian Singles Method effectively.`;
const establishBaselineCheckMarkList = [
  "Run a 5k or 10k time trial or race at maximum effort level",
  "Use our Norwegian method calculator to determine your VDOT score and LT2 paces"
];
const buildingYourScheduleCheckMarkList = [
  "Schedule 2-3 sub-threshold sessions per week (Tuesday, Thursday, Saturday are popular choices)",
  "Fill the rest of the week with easy runs (keep these very easy)",
  "At the end of the week, usually Sunday, add an easy long run"
];
const monitoringAndImprovingCheckMarkList = [
  "Every 4-8 weeks, try to do another 5k/10k to retest your LT2 paces",
  "Adjust mileage, easy pace, and sub-threshold pace as you get more fit (use the calculator)"
];

const HowToGetStarted = () => {
  return (
    <div>
      <RoundedCard>
        <IconHeader icon={FaRunning} text="How To Get Started" size="25" />
        <div>{howToGetStartedSubtext}</div>
        <div className={styles.how__to__get__started__number__container}>
          <NumberTitle
            number={1}
            title="Establish your baseline fitness level"
          />
          <CheckMarkList
            list={establishBaselineCheckMarkList}
            component={
              <ButtonRedirect text="Go To Calculator" redirectPath="/" />
            }
          />
        </div>
        <div className={styles.how__to__get__started__number__container}>
          <NumberTitle number={2} title="Building your schedule" />
          <CheckMarkList list={buildingYourScheduleCheckMarkList} />
        </div>
        <div className={styles.how__to__get__started__number__container}>
          <NumberTitle number={3} title="Monitoring and improving" />
          <CheckMarkList list={monitoringAndImprovingCheckMarkList} />
        </div>
      </RoundedCard>
    </div>
  );
};

export default HowToGetStarted;
