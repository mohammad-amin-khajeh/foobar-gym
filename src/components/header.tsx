"use client";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import MobileNav from "./mobileNav";
import Nav from "./nav";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderActive(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${headerActive ? "h-24" : "h-32"} fixed top-0 bg-primary-200 w-full transition-all duration-300 z-50 max-w-[1920px`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        {/* mobile nav, hidden on small devices */}
        <MobileNav
          className={` ${openNav ? "max-h-max pt-8 pb-10 border-t border-white/10" : "max-h-0 py-0 overflow-hidden border-white/0"}
                       ${headerActive ? "top-20" : "top-24"} 
          flex flex-col text-center gap-8 fixed bg-primary-200 lg:hidden w-full left-0 text-white text-base uppercase font-medium transition-all`}
        />
        {/* desktop nav, hidden on small devices */}
        <Nav className="gap-4 hidden text-white text-base uppercase font-medium transition-all lg:flex" />
        {/* toggle menu button */}
        <div>
          <button
            onClick={() => setOpenNav(!openNav)}
            type="button"
            className="text-white lg:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a href="" className="h2">
          <h2 className="h2 font-oswald text-white">
            <span className="text-accent">foobar</span> gym
          </h2>
        </a>
      </div>
    </header>
  );
};

export default Header;
