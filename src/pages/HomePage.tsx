import MainLayout from "../layout/MainLayout";
import CalculatorHeader from "../components/Header/CalculatorHeader";
import NorwegianMainContainer from "../components/Vdot/NorweiganMainContainer";

const HomePage = () => {
  return (
    <MainLayout>
      <CalculatorHeader />
      <NorwegianMainContainer />
    </MainLayout>
  );
};

export default HomePage;
