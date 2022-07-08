import React from "react";
import {
  GrLinkedinOption,
  GrGithub,
  GrMailOption,
  GrUserManager,
} from "react-icons/gr";
function Contact() {
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/mohammad-rasi-masoudi/"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <GrLinkedinOption />
        </div>
      </a>
      <a target="_blank" href="https://github.com/MohammadrasiM">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <GrGithub />
        </div>
      </a>
      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        <GrMailOption />
      </div>
      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        <GrUserManager />
      </div>
    </div>
  );
}

export default Contact;
