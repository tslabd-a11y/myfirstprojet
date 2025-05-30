import AboutImg from "./AboutImg";
import AboutMeTxt from "./AboutMeTxt";

const AboutMeMain = () => {
  return (
    <div id="about" className="flex md:flex-row sm:flex-col max-w-[1200px] px-4 justify-between items-center mx-auto mt-20">
      <div>
        <AboutMeTxt />
      </div>
      <div>
        <AboutImg />
      </div>
    </div>
  );
};

export default AboutMeMain;
