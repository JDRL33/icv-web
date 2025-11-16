import Bg_mask_y from "../components/Bg_mask_y";
import Address from "../components_group/Address";
import AdsOfTheWeekend from "../components_group/AdsOfTheWeekend";
import Footer from "../components_group/Footer";
import Hero from "../components_group/Hero";
import Presentation from "../components_group/Presentation";
import {
  Vision,
  Mision,
  ValoresDoctrinales,
  ValoresPersonales,
} from "../components_group/Information";
import Welcome from "../components_group/Welcome";

function Home() {
  return (
    <div id="home" style={{ overflow: "hidden" }}>
      <Hero />
      <div className=" mt-40 px-10">
        <Welcome />
        <div className="mb-30"></div>
        <Presentation />
        <div className="mb-30"></div>
        <Vision />
        <div className="mb-30"></div>
        <Mision />
        <div className="mb-30"></div>
        <ValoresDoctrinales />
        <div className="mb-30"></div>
        <ValoresPersonales />
      </div>
      <Bg_mask_y>
        {/* <AdsOfTheWeekend />
        <div className="mb-30"></div> */}
        <Address />
      </Bg_mask_y>
      <Footer />
    </div>
  );
}

export default Home;
