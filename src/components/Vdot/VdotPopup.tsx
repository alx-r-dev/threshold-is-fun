import styles from "./VdotPopup.module.css";

type VdotPopupProps = {
  isOpen: boolean;
};

const VdotPopup = ({ isOpen }: VdotPopupProps) => {
  return (
    <>
      {isOpen && (
        <div className={styles.vdot__popup__container}>
          An index of running fitness developed by Dr. Jack Daniels, used to
          determine training paces based on a recent race time. This offers a
          more holistic view than V02 max alone.{" "}
        </div>
      )}
    </>
  );
};

export default VdotPopup;
