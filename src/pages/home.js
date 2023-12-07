import { Link } from "react-router-dom";
import React from "react";
import "./home.css";
import homePagePic from "../assets/homepage.png";

export default function HomePage() {

  return (
    <div className="min-w-screen min-h-screen p-20">
      <div className="flex flex-col justify-center items-center">
        <span className="text-black text-4xl font-bold uppercase mb-5">Welcome to the next generation of Blog SEO</span>
        <span className="text-black text-2xl font-bold uppercase">Generate world class SEO optimized blogs in the matter of second with the cutting edge AI technology.</span>
        <img src={homePagePic} className="mt-10 mb-10 rounded-lg w-8/12" />
      </div>
    </div>
  );
}
