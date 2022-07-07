import React, { useState } from "react";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <MainMenu handleNav={handleNav} />
      <MobileMenu handleNav={handleNav} nav={nav} />
    </div>
  );
};

export default Navbar;
