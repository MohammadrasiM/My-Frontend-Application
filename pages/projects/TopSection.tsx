import Image from "next/image";
import React from "react";

interface InputProps {
  src?: string;
  title?: string;
  tech?: string;
}
function TopSection({ src, title, tech }: InputProps) {
  return (
    <div className="w-screen h-[30vh] lg:g-[40vh]  relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={src || "/"}
        alt="/"
        width="8000em"
        height="5000em"
      />
      <div className="z-10 p-2 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
        <h2 className="py-2">{title}</h2>
        <h3>{tech}</h3>
      </div>
    </div>
  );
}

export default TopSection;
