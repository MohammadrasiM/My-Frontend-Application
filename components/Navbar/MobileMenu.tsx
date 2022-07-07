import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GrClose,
  GrLinkedinOption,
  GrGithub,
  GrMailOption,
  GrUserManager,
} from "react-icons/gr";
interface MenuProps {
  nav: boolean;
  // 👇️ turn off type checking
  handleNav: () => any;
}
function MobileMenu({ handleNav, nav }: MenuProps) {
  return (
    <div
      className={
        nav ? "md:hidden s fixed left-0 top-0 w-full h-screen bg-black/70" : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/smrm.png"
              alt="/"
              width="120"
              height="120"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <GrClose />
            </div>
          </div>
          <div className="border-b bprder-gray-300 my-4"></div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase">
            <Link href="/">
              <li className="py-4 text-sm">Home</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">About</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Skills</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Projects</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Contact</li>
            </Link>
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Connect with us!
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <GrLinkedinOption />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <GrGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <GrMailOption />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <GrUserManager />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
