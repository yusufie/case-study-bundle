"use client";
import React, { useState } from "react";
import Image from "next/image";
import images from "./images";

const Slider = () => {

  const [currentImage, setCurrentImage] = useState("cobalt");

  return (
    <>
      <article className="flex flex-col items-center gap-4">

        <div className="flex flex-row items-center gap-14">

          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFC02E]">
            <Image src={"/icons/arrow-right.svg"} width={24} height={24} alt="left" className="rotate-180" />
          </div>

          <Image
            src={images[currentImage].src}
            width={216}
            height={216}
            alt={images[currentImage].alt}
          />

        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFC02E]">
            <Image src={"/icons/arrow-right.svg"} width={24} height={24} alt="arrow" />
          </div>
        </div>

        <h1 className="font-bold text-center text-2xl">
          {images[currentImage].alt.split(" - ")[1]}
        </h1>

      </article>

      <div className="flex flex-row items-center justify-between gap-6 px-8 py-2 rounded-[3rem] border border-gray-300 bg-[#fafafa]">
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-t from-[#8D8AA8] to-[#3F3B59]"
          onClick={() => setCurrentImage("cobalt")}
        >
          {""}
        </button>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-t from-[#FEF2D5] to-[#E5D09C]"
          onClick={() => setCurrentImage("amber")}
        >
          {""}
        </button>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-t from-[#E7E5E5] to-[#9B9898]"
          onClick={() => setCurrentImage("marble")}
        >
          {""}
        </button>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-t from-[#787878] to-[#272727]"
          onClick={() => setCurrentImage("onyx")}
          >
          {""}
        </button>
      </div>
    </>
  );
};

export default Slider;