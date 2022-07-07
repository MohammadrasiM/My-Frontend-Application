import React from "react";
import Contact from "./Contact";
import Intruduction from "./Intruduction";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <Intruduction />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Main;
