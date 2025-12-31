import { Link } from "react-router";
import styles from "./Header.module.css";
import { MdArrowOutward } from "react-icons/md";

const letsRunForumUrl =
  "https://www.letsrun.com/forum/flat_read.php?thread=12130781#post-9";

const HowItWorksHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title__container}>
        The <span className={styles.header__title}>Norwegian Singles</span>{" "}
        Approach
      </h1>
      <Link style={{ textDecoration: "none" }} to={letsRunForumUrl}>
        <div className={styles.header__button__container}>
          <button className={styles.header__button__get__started}>
            The Original LetsRun Thread
            <span style={{ marginLeft: "5px" }}>
              <MdArrowOutward />
            </span>
          </button>
        </div>
      </Link>
    </header>
  );
};

export default HowItWorksHeader;
