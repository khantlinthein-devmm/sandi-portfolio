import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from './About';
import Experience from './Experience';
import Contact from './Contact';

const Main = () => {
  return (
    <>
      <section className="bg-indigo-300  ">
        <Navbar  />
      </section>
        <Profile/>
        <About/>
        <Experience/>
        <Contact/>
    </>
  );
};

export default Main;
