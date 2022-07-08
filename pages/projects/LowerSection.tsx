import React from "react";
import Link from "next/link";
import { GrRadialSelected } from "react-icons/gr";
interface InputProps {
  description?: string;
  website?: string;
  technologies?: any;
}
function LowerSection({ description, technologies, website }: InputProps) {
  return (
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-32">
      <div className="col-span-4">
        <p>Project</p>
        <h2>Overview</h2>
        <p>{description}</p>
        <a target="_blank" href={website}>
          <button className="px-8 py-2 mt-4 mr-8">Open Website</button>
        </a>
      </div>
      <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
        <div className="p-2">
          <p className="text-center font-bold pb-2">Technologies</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
            {technologies?.map((tech: string) => (
              <p key={tech} className="text-gray-600 py-2 flex items-center">
                <GrRadialSelected className="pr-2" /> {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
}

export default LowerSection;
