import MainLayout from "../layout/MainLayout";
import CalculateVdot from "../components/Vdot/CalculateVdot";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <MainLayout>
      <Header />
      <CalculateVdot />
    </MainLayout>
  );
};

export default HomePage;
