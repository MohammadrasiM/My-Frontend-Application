import React from "react";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-10">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#fbb800]">
            About
          </p>
          <h2 className="py-4">Me</h2>
          <p className="py-2 text-gray-600">I'm a civil engineer </p>
          <p className="py-2 text-gray-600">
            After graduation I got acquainted with the world of programming I
            started studying in this field. Due to the attractions it had for
            me, and the interest in participating with professional teams and
            gaining more skills I decided to continue my career in this field
            and became a front-end developer like you have never seen before.
          </p>
        </div>
        <div className="h-full w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            alt="/"
            src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/best-desktop-computer-for-programming-and-coding1619724622982369.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
