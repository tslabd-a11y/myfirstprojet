import React from "react";
import ProjectsTxt from "./ProjectsTxt";
import SingleProject from "./SingleProject";

const ProjectsMain = () => {
  const ProjectDetails = [
    {
      name: "Full Stack E-commerce",
      year: "May,2025",
      image: "images/EccomerceProjectImg.png",
      aligne: "left",
    },
    {
      name: "Full Stack E-commerce",
      year: "May,2025",
      image: "images/EccomerceProjectImg.png",
      aligne: "right",
    },
    {
      name: "Full Stack E-commerce",
      year: "May,2025",
      image: "images/EccomerceProjectImg.png",
      aligne: "left",
    },
    {
      name: "Full Stack E-commerce",
      year: "May,2025",
      image: "images/EccomerceProjectImg.png",
      aligne: "right",
    },
    {
      name: "Full Stack E-commerce",
      year: "May,2025",
      image: "images/EccomerceProjectImg.png",
      aligne: "left",
    },
  ];
  return (
    <div id="projects" className="max-w-[1200px] px-4 mx-auto mt-[100px]">
      <ProjectsTxt />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {ProjectDetails.map((item, idx) => {
          return (
            <SingleProject
              key={idx}
              name={item.name}
              image={item.image}
              year={item.year}
              aligne={item.aligne}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
