import styles from "./ButtonRedirect.module.css";
import { FaArrowRight } from "react-icons/fa6";

type ButtonRedirectProps = {
  text: string;
  redirectPath: string;
};

const ButtonRedirect = ({ text, redirectPath }: ButtonRedirectProps) => {
  return (
    <button className={styles.button__redirect}>
      <div className={styles.button__redirect__content}>
        {text}
        {<FaArrowRight />}
      </div>
    </button>
  );
};

export default ButtonRedirect;
