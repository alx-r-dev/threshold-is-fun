import type { ReactNode } from "react";
import styles from "./RoundedCard.module.css";

type RoundedCardProps = {
  children: ReactNode;
};

const RoundedCard = ({ children }: RoundedCardProps) => {
  return <div className={styles.rounded__card}>{children}</div>;
};

export default RoundedCard;
