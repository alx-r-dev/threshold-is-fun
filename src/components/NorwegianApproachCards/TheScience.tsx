import { MdScience } from "react-icons/md";
import RoundedCard from "../ui/Card/RoundedCard";
import IconHeader from "../ui/Header/IconHeader";
import CheckMarkList from "../ui/CheckMarkList";

const theScienceList = [
  "The Norwegian style of training was popularized by Marius Bakken in the early 2000s",
  "The Ingebrigtsen brothers came along and popularized the double threshold method (mostly used by elite athletes)",
  "To maximize training load and minimize fatigue and injury, a Norwegian singles method was created for non-elite athletes",
  "Research suggests a correlation between training load and your race performance, with sub-threshold providing that sweet spot of stress vs recovery",
  "This method delays the onset of lactic acid build up and expands aerobic capacity which are both crucial for endurance performance",
  "This approach provides up to 50% more training volume, 48hr turnaround between workouts, and neuromusclar preservation",
  "LT2 (88% of VO2 max) is the sweet spot that has been proven to produce similar physiological adaptations of high intensity intervals while allowing for high volume and fast recovery"
];

const TheScience = () => {
  return (
    <div>
      <RoundedCard>
        <IconHeader icon={MdScience} text="The History and Science" size="25" />
        <CheckMarkList list={theScienceList} />
      </RoundedCard>
    </div>
  );
};

export default TheScience;
