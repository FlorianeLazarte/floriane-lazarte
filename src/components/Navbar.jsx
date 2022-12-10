import React from "react";

function Navbar() {
  return (
    <div className="fixed w-full bg-[#3f9ca8] z-10 px-5">
      <div className="max-w-[1200px] h-[80px] items-center mx-auto flex justify-between">
        <h1 className="text-[30px]">FLORIANE LAZARDE</h1>
        <ul className="flex space-x-[40px] text-[18px]">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
