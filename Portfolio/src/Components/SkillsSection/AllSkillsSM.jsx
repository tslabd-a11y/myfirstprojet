import { Skills } from "./SkillsData";

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 mx-auto px-4 max-w-[1200px] gap-12 my-12">
      {Skills.map((item, idx) => {
        return (
          <div key={idx} className="flex flex-col items-center ">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
