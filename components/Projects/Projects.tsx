import React from "react";

import ProjectImage from "./ProjectImage";
function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2  py-20">
        <p className="text-xl tracking-widest uppercase text-[#fbb800]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectImage />
        </div>
      </div>
    </div>
  );
}

export default Projects;
