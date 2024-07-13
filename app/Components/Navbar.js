"use client"
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full px-20 py-8 text-l font-[neue_montreal] flex justify-between items-center">
      DUNE
      <div className="flex space-x-6">
        {["Services", "Our Work", "About Us", "Insights","Contact"].map((item, index) => (
          <a key={index} className="text-md font-light capitalize">{item}</a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
