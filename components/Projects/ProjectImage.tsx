import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projectsImages } from "./ProjectsData";

function ProjectImage() {
  return (
    <>
      {projectsImages?.map((project) => (
        <div
          key={project?.id}
          className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#fbb800] to-[#faecc1]"
        >
          <Image
            className="rounded-xl group-hover:opacity-70"
            src={project?.src}
            width="8000em"
            height="5000em"
            alt="/"
          />
          <div className="hidden group-hover:flex  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex-col content-center items-center">
            <h3 className="text-2xl text-white tracking-wider text-center">
              {project?.title}
            </h3>
            <p className="pb-4 pt-2 text-white text-center">{project?.tech}</p>
            <Link href={project?.link}>
              <p className="w-52 text-center py-3 rounded-lg bg-white  text-gray-700 font-bold text-lg cursor-pointer">
                More info
              </p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectImage;
