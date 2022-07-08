import Image from "next/image";
import React from "react";
import contactImage from "../../public/assets/contact.jpg";
import {
  GrLinkedinOption,
  GrGithub,
  GrMailOption,
  GrUserManager,
} from "react-icons/gr";
function LeftContent() {
  return (
    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400  rounded-xl p-4">
      <div className="lg:p-4 h-full">
        <div>
          <Image
            className="rounded-xl hover:scale-105 ease-in duration-300"
            src={contactImage}
            alt="/"
          />
        </div>
        <div>
          <h2 className="py-2">Seyed Mohammad Rasi Masoudi</h2>
          <p>Front-End Developer</p>
          <p className="py-4">
            I am available for full-time positions. Contact me THX.
          </p>
        </div>
        <p className="uppercase pt-8">Connect With Me</p>
        <div className="flex items-center justify-between py-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohammad-rasi-masoudi/"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <GrLinkedinOption />
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MohammadrasiM"
          >
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
      </div>
    </div>
  );
}

export default LeftContent;
