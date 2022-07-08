import React from "react";
import Image from "next/image";
import { skillsImages } from "./SkillsData";
function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto fflex flex-col justify-center h-full py-20">
        <p className="text-xl tracking-widest uppercase text-[#fbb800]">
          Skills
        </p>
        <h2 className="py-4">I have acquired from years of practice</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsImages?.map((skill) => (
            <div
              key={skill?.title}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={skill?.src} alt="/" width="70px" height="70px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill?.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
