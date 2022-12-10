import React from "react";
import { CSS, HTML, JS } from "../img";

function About() {
  return (
    <div name="about" className="max-w-[1200px] mx-auto px-5 mb-[100px]">
      <div className="mx-auto text-center">
        <h1 className="text-primary text-[32px]">ABOUT</h1>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="font-bold text-[30px]">EXPERTISE</h1>
          <p>
            I studied BS Information Technology where I expertise on Web and
            System Development. I use tools such as Bootstrap, HTML5, and CSS.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center gap-[100px]">
          <img src={HTML} className="w-[100px]" alt="HTML icon" />
          <img src={CSS} className="w-[100px]" alt="CSS icon" />
          <img src={JS} className="w-[100px]" alt="Javascript icon" />
        </div>
      </div>
    </div>
  );
}

export default About;
