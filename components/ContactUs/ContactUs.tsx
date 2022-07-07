import React from "react";
import LeftContent from "./LeftContent";
import RightContact from "./RightContact";

function ContactUs() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-10 w-full">
        <p className="text-xl tracking-widest uppercase text-[#fbb800]">
          Contact
        </p>
        <h2 className="py-4">Call Me Maybe</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <LeftContent />
          <RightContact />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
