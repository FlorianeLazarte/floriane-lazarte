import React from "react";

export const Project = ({ image, alt, title }) => {
  return (
    <div className="relative max-h-[330px] max-w-[387px] h-full w-full rounded-[10px] overflow-hidden duration-300">
      <img src={image} alt={alt} className="object-cover w-full h-full" />
      <div className="absolute flex flex-col top-0 left-0 h-full w-full bg-opacity-0 group hover:bg-opacity-40 bg-black items-center justify-center duration-300 hover:backdrop-blur-[5px] ease-in-out space-y-4">
        <h1 className="text-white opacity-0 group-hover:opacity-100 duration-500 ease font-bold">
          {title}
        </h1>
        <a
          href="#"
          className="max-w-[165px] bg-cyan-400 items-center text-center px-[20px] py-[10px] text-base text-zinc-900 rounded-[15px] opacity-0 duration-500 group-hover:opacity-100"
        >
          Github Code
        </a>
      </div>
    </div>
  );
};
