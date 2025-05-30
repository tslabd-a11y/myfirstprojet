import React from "react";
import { RiArrowRightDownLine } from "react-icons/ri";
import { Buttons } from "../../ui/Buttons";
import { Link } from "react-scroll";
import { NavLinks } from "./NavBarItems";

export default function NavBarButton() {
  return (
    <div>
      <Link to="contact" spy={true} offset={-130} smooth={true} duration={500}>
        <Buttons className="bg-gradient-to-r from-cyan to-orange  hover:border-orange hover:shadow-cyanShadow">
          <span>Hire Me</span>
          <div className="sm:hidden md:block">
            <RiArrowRightDownLine size={"18px"} />
          </div>
        </Buttons>
      </Link>
    </div>
  );
}
