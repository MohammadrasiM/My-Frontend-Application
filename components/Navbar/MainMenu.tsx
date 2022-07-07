import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
interface MenuProps {
  // 👇️ turn off type checking
  handleNav: () => any;
}

function MainMenu({ handleNav }: MenuProps) {
  return (
    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <Image
        src="/../public/assets/smrm.png"
        alt="/"
        width="125"
        height="120"
      />
      <div>
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
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
