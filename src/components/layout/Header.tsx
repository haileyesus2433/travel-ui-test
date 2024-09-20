
import React from "react";
import { Button } from "../ui/button";
import Hero from "../sections/Hero";

const Header: React.FC = () => {
  return (
    <header className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 pt-4">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-16 max-w-[956px]">
          Start selling travel today on your own website
        </h1>
        <p className="text-xs md:text-sm text-gray-400">
          Customize your travel website, and start selling. Let's get your
          business off the ground with our intuitive tools!
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-[24px] px-16 rounded-[8px] text-lg">
          Try it now
        </Button>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
