import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={styles.header}>
        The <span className={styles.header__span}>Norwegian</span> Singles
        Method add icon
      </h1>
      <button className={styles.header__button}>How it works icon</button>
    </header>
  );
};

export default Header;
