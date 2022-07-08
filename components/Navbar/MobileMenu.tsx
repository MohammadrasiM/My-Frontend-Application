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
  setNav: any;
}
function MobileMenu({ handleNav, nav, setNav }: MenuProps) {
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
            <Link passHref href="/">
              <a>
                <Image
                  src="/../public/assets/smrm.png"
                  alt="/"
                  width="120"
                  height="120"
                />
              </a>
            </Link>
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
            <Link passHref href="/">
              <a>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </a>
            </Link>
            <Link passHref href="/#about">
              <a>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </a>
            </Link>
            <Link passHref href="/#skills">
              <a>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </a>
            </Link>
            <Link passHref href="/#projects">
              <a>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </a>
            </Link>
            <Link passHref href="/#contact">
              <a>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </a>
            </Link>
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Connect with us!
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <a href="https://www.linkedin.com/in/mohammad-rasi-masoudi/">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <GrLinkedinOption />
                </div>
              </a>
              <a href="https://github.com/MohammadrasiM">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <GrGithub />
                </div>
              </a>

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
