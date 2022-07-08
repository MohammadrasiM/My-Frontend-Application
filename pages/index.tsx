import type { NextPage } from "next";

import React from "react";

import Main from "../components/Main/Main";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import ContactUs from "../components/ContactUs/ContactUs";

const Home: NextPage = () => {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default Home;
