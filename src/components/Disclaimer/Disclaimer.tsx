import { FaCircleInfo } from "react-icons/fa6";
import styles from "./Disclaimer.module.css";

const Disclaimer = () => {
  return (
    <div className={styles.disclaimer__container}>
      {<FaCircleInfo fontSize="23px" />}
      These training paces are guidelines. Please listen to your body and adjust
      based on perceived effort, altitude, and weather.
    </div>
  );
};

export default Disclaimer;
