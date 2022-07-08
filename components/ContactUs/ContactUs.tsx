import React from "react";
import LeftContent from "./LeftContent";
import RightContact from "./RightContact";
import Link from "next/link";
import { GrUp } from "react-icons/gr";
function ContactUs() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-20 w-full">
        <p className="text-xl tracking-widest uppercase text-[#fbb800]">
          Contact
        </p>
        <h2 className="py-4">Call Me Maybe</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <LeftContent />
          <RightContact />
        </div>
        <div className="flex justify-center py-12">
          <Link passHref href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <GrUp size={30} className="text-[#fbb800]" color="#fbb800" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
