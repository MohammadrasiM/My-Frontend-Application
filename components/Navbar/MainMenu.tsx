import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
interface MenuProps {
  // 👇️ turn off type checking
  handleNav: () => any;
  linkColor: string;
}

function MainMenu({ handleNav, linkColor }: MenuProps) {
  return (
    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <Link passHref href="/">
        <a>
          <Image
            src="/../public/assets/smrm.png"
            alt="/"
            width="125"
            height="120"
          />
        </a>
      </Link>
      <div>
        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
          <Link passHref href="/">
            <a>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </a>
          </Link>
          <Link passHref href="/#about">
            <a>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </a>
          </Link>
          <Link passHref href="/#skills">
            <a>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </a>
          </Link>
          <Link passHref href="/#projects">
            <a>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </a>
          </Link>
          <Link passHref href="/#contact">
            <a>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </a>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <GrMenu size={25} />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
