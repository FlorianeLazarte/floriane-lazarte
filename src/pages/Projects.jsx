import React from "react";
import { Project } from "../components";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full flex flex-col max-w-[1200px] mx-auto my-[50px] space-y-2 px-[15px] md:px-[30px]"
    >
      <div className="mx-auto text-center">
        <h1 className="text-primary text-[32px]">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-2 place-items-center w-full py-[50px] gap-[32px] px-5">
        <Project
          title="Note taking App"
          alt="notes"
          link="https://github.com/FlorianeLazarte/it-elec-3-note-app-starter-main/"
          image="https://images.ctfassets.net/lzny33ho1g45/5iJ10OKtmYa4BZpYvhb2xw/e890aa9115b53ef2d41c9135902285a2/Best_note_taking_apps.jpg"
        />
        <Project
          title="Weather App"
          alt="weather app"
          image="https://s3.amazonaws.com/www-inside-design/uploads/2018/05/weather-app-4_feature.jpg"
        />
        <Project
          title="Chat App"
          alt="chat app"
          image="https://media.timeout.com/images/105631955/image.jpg"
        />
        <Project
          title="Portfolio"
          alt="portfolio image"
          image="https://line25.com/wp-content/uploads/2016/05/Portfolio-Booklet.jpg"
        />
      </div>
    </div>
  );
};

export default Projects;
