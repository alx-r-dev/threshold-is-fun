import styles from "./VdotHeader.module.css";
import { HiQuestionMarkCircle } from "react-icons/hi";
import VdotPopup from "./VdotPopup";
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import ClearData from "../ClearData/ClearData";

type VdotHeaderProps = {
  isDataAvailable: boolean;
  handleClearAllData: () => void;
};

const VdotHeader = ({
  isDataAvailable,
  handleClearAllData
}: VdotHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuestionMarkClick = () => {
    setIsOpen(!isOpen);
  };

  const isOutsideClickRef = useOutsideClick(handleQuestionMarkClick, isOpen);

  return (
    <div>
      <div className={styles.vdot__title}>
        <div className={styles.vdot__title__and__icon}>
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
        <ClearData
          isDataAvailable={isDataAvailable}
          handleClearAllData={handleClearAllData}
        />
      </div>
      <div className={styles.vdot__subtext}>
        A running performance score to gauge current fitness level
      </div>
    </div>
  );
};

export default VdotHeader;
