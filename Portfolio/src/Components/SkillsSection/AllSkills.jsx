import { SingleSkill } from "./SingleSkill";
import { Skills } from "./SkillsData";

export const AllSkills = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-2 max-w-[1200px] mx-auto">
        {Skills.map((item, idx) => {
          return (
            <SingleSkill key={idx} skill={item.skill} icon={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};
