import React, { useState } from "react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import NavBarButton from "./NavBarButton";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="bg-black flex justify-between max-w-[1200px]  p-6 mx-auto border-[0.5px] border-orange items-center rounded-full w-full">
        <Logo />
        <div className={` ${isMenuOpen ? "sm:block" : "sm:hidden"} lg:block `}>
          <NavbarLinks />
        </div>
        <NavBarButton />
      </div>
      <div className="flex bg-black p-6 justify-center items-center rounded-full border-orange border-[0.5px] lg:hidden sm:block">
        <button
          onClick={toggleMenu}
          className="text-2xl border-orange border-[0.5px] p-4  rounded-full text-white"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}
