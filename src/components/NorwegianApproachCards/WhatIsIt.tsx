import { TbZoomQuestionFilled } from "react-icons/tb";
import RoundedCard from "../ui/Card/RoundedCard";
import IconHeader from "../ui/Header/IconHeader";
import CorePrinciples from "../CorePrinciples/CorePrinciples";

const norwegianSinglesMethodDefinition = `The Norwegian Singles Method is a popular, simplified running approach 
that focuses on 2-3 sub-threshold interval sessions per week with the rest of the week being easy running. This approach ditches intense V02 max work and
was derived from Norwegian elites but adapted for hobby joggers to help build massive aerobic bases and to break through plateaus.`;

const WhatIsIt = () => {
  return (
    <div>
      <RoundedCard>
        <IconHeader icon={TbZoomQuestionFilled} text="What Is It" size="25" />
        <div>{norwegianSinglesMethodDefinition}</div>
        <CorePrinciples />
      </RoundedCard>
    </div>
  );
};

export default WhatIsIt;
