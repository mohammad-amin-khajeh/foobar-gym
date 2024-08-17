"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { id: 0, name: "بالا", target: "home", offset: -100 },
  { id: 1, name: "درباره ما", target: "about", offset: -80 },
  { id: 2, name: "کلاس ها", target: "class", offset: -80 },
  { id: 3, name: "تیم ما", target: "team", offset: -80 },
  { id: 4, name: "عضویت", target: "prices", offset: -40 },
  { id: 5, name: "رضایت", target: "testimonial", offset: -160 },
  { id: 6, name: "مقاله ها", target: "blog", offset: -95 },
  { id: 7, name: "تماس با ما", target: "contact", offset: 100 },
];

const Nav = ({ className }: { className: string }) => {
  return (
    <nav className={className}>
      {links.map((link) => (
        <ScrollLink
          offset={link.offset}
          to={link.target}
          smooth
          spy
          activeClass="active"
          key={link.id}
          className="navbar"
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default Nav;
