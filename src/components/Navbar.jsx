import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed w-full bg-[#3f9ca8] z-10 px-5">
      <div className="max-w-[1200px] h-[80px] items-center mx-auto flex justify-between">
        <h1 className="text-[30px]">FLORIANE LAZARDE</h1>
        <ul className="flex space-x-[40px] text-[18px]">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            delay={300}
            isDynamic={true}
            className="link"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-74}
            duration={300}
            delay={500}
            isDynamic={true}
            className="link"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-73}
            duration={300}
            delay={500}
            isDynamic={true}
            className="link"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            delay={500}
            isDynamic={true}
            className="link"
          >
            Resume
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
            delay={500}
            isDynamic={true}
            className="link"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
