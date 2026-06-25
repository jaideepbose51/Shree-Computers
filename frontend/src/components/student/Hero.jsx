import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-cyan-100/70 to-white">

  <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 md:pt-32 lg:pt-40 pb-16">

    <div className="text-center">

      <h1 className="font-bold text-gray-900 leading-tight max-w-5xl mx-auto">

        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Build Your Career with
        </span>

        <span className="block mt-3 text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Professional Computer Courses
        </span>

      </h1>

      <p className="hidden md:block max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8">
        Learn industry-relevant skills through practical classroom training.
      </p>

      <p className="md:hidden max-w-xs mx-auto mt-6 text-base leading-7 text-gray-600">
        Learn practical computer skills through industry-ready courses.
      </p>

      <div className="mt-10">
        <SearchBar />
      </div>

    </div>

  </div>

</section>
  );
};

export default Hero;