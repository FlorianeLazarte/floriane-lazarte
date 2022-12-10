import React from "react";
import { Profile } from "../img";
import { Typewriter } from "react-simple-typewriter";

export default function () {
  return (
    <div className="h-screen max-w-[1200px] mx-auto flex items-center justify-between font-semibold">
      <div className="flex flex-col">
        <span className="text-[30px]">Hi, I'm</span>
        <span className="text-[70px]">Floriane Lazarte</span>
        <span className="text-[35px] opacity-50">
          <Typewriter
            words={["Aspiring web developer", "Beautiful", "Explorer"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className="w-[155px] h-[60px] bg-[#1243F1] py-4 px-7 rounded-[10px] mt-[30px] hover:bg-opacity-70">
          Contact me
        </div>
      </div>
      <img src={Profile} alt="profile picture" />
    </div>
  );
}
