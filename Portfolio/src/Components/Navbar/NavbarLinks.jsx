import { NavLinks } from "./NavBarItems";
import { Link } from "react-scroll";
export default function NavbarLinks() {
  return (
    <ul className="flex gap-6  text-white lg:mt-0 sm:py-4 mt-16 lg:space-x-10 lg:flex-row sm:flex-col lg:relative sm:absolute left-[50%] -translate-x-[50%]  lg:text-md sm:text-xl sm:w-full  sm:bg-cyan/30 backdrop-blur-lg lg:bg-black">
      {NavLinks.map((links, idx) => {
        return (
          <li
            key={idx}
            className="hover:text-cyan group cursor-pointer scale-110 transition-all duration-500 text-center"
          >
            <Link
              to={links.section}
              spy={true}
              offset={-130}
              smooth={true}
              duration={500}
            >
              {links.Link}
            </Link>
            <div className="mw-auto w-0 bg-cyan group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
}
