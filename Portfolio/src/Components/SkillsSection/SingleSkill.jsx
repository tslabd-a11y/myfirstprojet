export const SingleSkill = ({ skill, icon }) => {
  return (
    <div className="hover:-translate-y-10 transform transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="text-cyan hover:text-darkGrey h-[100px] w-[100px] bg-white flex items-center justify-center border-4 border-orange  rounded-full hover:scale-105 transform transition-all duration-500 text-6xl  ">
          {icon}
        </div>
        <p className="text-white font-bold">{skill}</p>
      </div>
      <div className="w-[100px] h-[200px] absolute top-[50px] -z-10 bg-orange"></div>
    </div>
  );
};
