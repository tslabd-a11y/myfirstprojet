import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, image, aligne }) => {
  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8  justify-center ${
        aligne === "left" ? "md:flex-row-reverse" : "md:flex-row"
      } justify-end`}
    >
      <div>
        <h2 className="text-orange lg:text-3xl sm:text-2xl"> {name} </h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            aligne === "left" ? "md:text-left" : "md:text-right"
          }`}
        >
          {year}
        </h2>
        <a
          href="#"
          className={`text-cyan  font-bold gap-2 flex items-center sm:justify-center ${
            aligne === "left" ? "md:justify-start" : "md:justify-end"
          }`}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 cursor-pointer border border-white relative top-0 left-0">
        <div className=" bg-cyan opacity-30 hover:opacity-0 absolute top-0 left-0 w-full h-full transition-all duration-500 md:block sm:hidden"></div>
        <div className="w-full h-full ">
          <img src={image} alt={name} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
