import React from "react";

function Navbar() {
  return (
    <div className="max-w-[1200px] h-[80px] items-center mx-auto flex justify-between">
      <h1 className="text-[30px]">FLORIANE LAZARDE</h1>
      <ul className="flex space-x-[40px] text-base">
        <li>Home</li>
        <li>Project</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
