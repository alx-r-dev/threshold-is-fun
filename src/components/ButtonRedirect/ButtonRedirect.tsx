import { Link } from "react-router";
import styles from "./ButtonRedirect.module.css";
import { FaArrowRight } from "react-icons/fa6";

type ButtonRedirectProps = {
  text: string;
  redirectPath: string;
};

const ButtonRedirect = ({ text, redirectPath }: ButtonRedirectProps) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column"
      }}
      to={redirectPath}
    >
      <button className={styles.button__redirect}>
        <div className={styles.button__redirect__content}>
          {text}
          {<FaArrowRight />}
        </div>
      </button>
    </Link>
  );
};

export default ButtonRedirect;
