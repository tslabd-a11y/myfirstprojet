import { HeroGradiant } from "./HeroGradiant";
import { HeroPic } from "./HeroPic";
import { HeroTxt } from "./HeroTxt";

export const HeroMain = () => {
  return (
    <div id="home" className="h-full pt-40">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 ">
        <HeroTxt />
        <HeroPic />
      </div>
    </div>
  );
};
