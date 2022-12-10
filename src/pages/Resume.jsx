import React from "react";
import { FaBook, FaCalendarAlt } from "react-icons/fa";

function Resume() {
  return (
    <div name="resume" className="w-full mb-[100px]">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-5">
        <div className="mx-auto text-center">
          <h1 className="text-primary text-[32px]">RESUME</h1>
        </div>
        <div className="flex w-full gap-5">
          <div className="bg-white bg-opacity-30 w-full p-5 flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2 text-3xl">
              <FaBook className="text-gray-800" /> EDUCATION
            </div>
            <div className="flex flex-col gap-5 ml-9">
              <div className="flex flex-col gap-2">
                <span className="flex gap-2 items-center">
                  <FaCalendarAlt className="text-gray-800" />{" "}
                  <span className="font-bold">Primary</span>
                </span>
                <p className="ml-5">Sta. Remedios Elementary School</p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="flex gap-2 items-center">
                  <FaCalendarAlt className="text-gray-800" />{" "}
                  <span className="font-bold">Secondary</span>
                </span>
                <p className="ml-5">Bulan National High School</p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="flex gap-2 items-center">
                  <FaCalendarAlt className="text-gray-800" />{" "}
                  <span className="font-bold">Tertiary</span>
                </span>
                <p className="ml-5">Sorsogon State University</p>
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-30 w-full p-5 flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2 text-3xl">
              <FaBook className="text-gray-800" /> EXPERIENCE
            </div>
            <div className="flex flex-col gap-5 ml-9">
              <div className="flex flex-col gap-2">
                <span className="flex gap-2 items-center ">
                  <FaCalendarAlt className="text-gray-800 text-[22px]" />
                  <span className="font-bold">
                    Rural Bank of San Jacinto Masbate Bulan Branch (Work
                    Immersion) January - February 2018
                  </span>
                </span>
                <ul className="ml-5 list-disc">
                  <li>Attaching of CFS</li>
                  <li>Listing of proof sheet</li>
                  <li>Operating the 2017 files to 2018</li>
                  <li>
                    Organizing the proof sheet based on date, month and year
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
