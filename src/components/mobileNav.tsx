"use client";
import { useMediaQuery } from "react-responsive";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { id: 0, name: "بالا", target: "home", offset: -100 },
  { id: 1, name: "درباره ما", target: "about", offset: -80 },
  { id: 2, name: "کلاس ها", target: "class", offset: -80 },
  { id: 3, name: "تیم ما", target: "team", offset: -80 },
  { id: 4, name: "عضویت", target: "prices", offset: -80 },
  { id: 5, name: "رضایت", target: "testimonial", offset: -160 },
  { id: 6, name: "مقاله ها", target: "blog", offset: -160 },
  { id: 7, name: "تماس با ما", target: "contact", offset: -100 },
];

const MobileNav = ({ className }: { className: string }) => {
  const isMobile = useMediaQuery({
    query: "only screen and (max-width:1024px)",
  });
  return (
    <nav className={className}>
      {links.map((link) => (
        <ScrollLink
          offset={link.offset}
          to={link.target}
          smooth
          spy
          activeClass={`${!isMobile && "active"}`}
          key={link.id}
          className="navbar"
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default MobileNav;
