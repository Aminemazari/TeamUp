import { useNavigate } from "react-router-dom";
import NavBarLandingPage from "../../component/LandingPage/NavBarLandingPage";
import Header from "../../component/LandingPage/Header";
import Benifits from "../../component/LandingPage/Benifits/Benifits";

const landingPage = () => {
  const Navigate = useNavigate();

  return (
    <>
      <NavBarLandingPage />
      <Header />
      <Benifits />
    </>
  );
};

export default landingPage;
