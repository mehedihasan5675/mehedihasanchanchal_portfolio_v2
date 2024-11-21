import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import ContactMe from "../../Components/ContactMe/ContactMe";
import Footer from "../../Components/Footer/Footer";
import MySkill from "../../Components/MySkill/MySkill";
import ProjectSlider from "../../Components/Projects/ProjectSlider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <MySkill></MySkill>
      <ProjectSlider></ProjectSlider>
      <ContactMe></ContactMe>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
