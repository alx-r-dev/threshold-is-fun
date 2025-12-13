import { FaRunning } from "react-icons/fa";
import styles from "./Header.module.css";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <header className={styles.header}>
      {<FaRunning size="50px" />}
      <h1 className={styles.header__title__container}>
        The <span className={styles.header__title}>Norwegian Singles</span>{" "}
        Method
      </h1>
      <h6 className={styles.header__title__subtext}>
        The sub-threshold training methodology taking the running world by storm
        that took one runner from a 28 minute to a 15 minute 5k.
      </h6>
      <div className={styles.header__button__container}>
        <button className={styles.header__button__get__started}>
          Get Started
        </button>
        <button className={styles.header__button__how__it__works}>
          How it Works{" "}
          <span style={{ marginLeft: "5px" }}>
            <MdArrowOutward />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
