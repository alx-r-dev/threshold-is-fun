import styles from "./ClearData.module.css";

type ClearDataProps = {
  isDataAvailable: boolean;
  handleClearAllData: () => void;
};

const ClearData = ({ isDataAvailable, handleClearAllData }: ClearDataProps) => {
  if (!isDataAvailable) {
    return;
  }
  return (
    <button onClick={handleClearAllData} className={styles.clear__data__button}>
      Clear Data
    </button>
  );
};

export default ClearData;
