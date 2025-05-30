import React from "react";
import SkillsTxt from "./SkillsTxt";
import { AllSkills } from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";

export const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden ">
        <SkillsTxt />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%]  md:hidden sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="lg:hidden md:block sm:block">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};