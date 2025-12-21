import styles from "./VdotHeader.module.css";
import { HiQuestionMarkCircle } from "react-icons/hi";
import VdotPopup from "./VdotPopup";
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const VdotHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuestionMarkClick = () => {
    setIsOpen(!isOpen);
  };

  const isOutsideClickRef = useOutsideClick(handleQuestionMarkClick, isOpen);

  return (
    <div>
      <div className={styles.vdot__title}>
        Calculate VDOT
        <div style={{ position: "relative" }}>
          <div ref={isOutsideClickRef}>
            <HiQuestionMarkCircle
              style={{ cursor: "pointer" }}
              onClick={handleQuestionMarkClick}
            />
          </div>
          <VdotPopup isOpen={isOpen} />
        </div>
      </div>
      <div className={styles.vdot__subtext}>
        A running performance score to gauge current fitness level
      </div>
    </div>
  );
};

export default VdotHeader;
