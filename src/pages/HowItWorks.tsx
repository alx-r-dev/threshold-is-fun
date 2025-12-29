import MainLayout from "../layout/MainLayout";
import HowItWorksHeader from "../components/Header/HowItWorksHeader";
import WhatIsIt from "../components/NorwegianApproachCards/WhatIsIt";
import TheScience from "../components/NorwegianApproachCards/TheScience";
import HowToGetStarted from "../components/NorwegianApproachCards/HowToGetStarted";

const HowItWorks = () => {
  return (
    <MainLayout>
      <HowItWorksHeader />
      <WhatIsIt />
      <HowToGetStarted />
      <TheScience />
    </MainLayout>
  );
};

export default HowItWorks;
