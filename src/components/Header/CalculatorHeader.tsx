import { FaRunning } from "react-icons/fa";
import styles from "./Header.module.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const CalculatorHeader = () => {
  return (
    <header className={styles.header}>
      {<FaRunning size="50px" />}
      <h1 className={styles.header__title__container}>
        The <span className={styles.header__title}>Norwegian Singles</span>{" "}
        Method
      </h1>
      <h6 className={styles.header__title__subtext}>
        The sub-threshold training methodology gaining popularity amongst the
        running world that transformed one runner's 5k from 28 down to 15
        minutes
      </h6>
      <Link style={{ textDecoration: "none" }} to="/about">
        <div className={styles.header__button__container}>
          <button className={styles.header__button__get__started}>
            How it Works{" "}
            <span style={{ marginLeft: "5px" }}>
              <MdArrowOutward />
            </span>
          </button>
        </div>
      </Link>
    </header>
  );
};

export default CalculatorHeader;
