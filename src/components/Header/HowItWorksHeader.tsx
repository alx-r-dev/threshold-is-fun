import styles from "./Header.module.css";
import { MdArrowOutward } from "react-icons/md";

const HowItWorksHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title__container}>
        The <span className={styles.header__title}>Norwegian Singles</span>{" "}
        Approach
      </h1>
      <div className={styles.header__button__container}>
        <button className={styles.header__button__get__started}>
          The Original LetsRun Thread
          <span style={{ marginLeft: "5px" }}>
            <MdArrowOutward />
          </span>
        </button>
      </div>
    </header>
  );
};

export default HowItWorksHeader;
