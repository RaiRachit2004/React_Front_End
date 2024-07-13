"use client"
import React from 'react';
import Navbar from "./Components/Navbar";
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function page() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Cards/>
      <Footer/>
      </div>
    </>
  );
};

export default page