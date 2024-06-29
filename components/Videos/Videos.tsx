"use client";
import React, { useState } from "react";
import Image from "next/image";
import videos from "./video";

const Videos = () => {
  const [currentVideo, setCurrentVideo] = useState("circle");

  return (
    <div className="flex flex-col items-center">
      <video key={currentVideo} className="w-[26rem] mt-24" controls={false}>
        <source 
          src={videos[currentVideo].src}
          type="video/mp4"
        />
      </video>

      <div className="flex flex-row items-center justify-center mt-[-2.5rem] border-b border-blue-300">

        <button 
          className={`flex flex-col items-center justify-center gap-2 px-3 pb-6 
          ${currentVideo === "circle" ? "border-b-2" : ""}`}
          onClick={() => setCurrentVideo("circle")}
          >
          <Image
            src="/icons/circle.png"
            width={80}
            height={80}
            alt="circle"
            className={`rounded-xl ${currentVideo === "circle" ? "bg-white" : "bg-[#FFC02E]"}`}
          />
          <span className={`text-sm text-white w-20 ${currentVideo === "circle" ? "font-bold" : "opacity-50"}`} >
            Circle to Search
          </span>
        </button>

        <button 
          className={`flex flex-col items-center justify-center gap-2 px-3 pb-6 
          ${currentVideo === "translate" ? "border-b-2" : ""}`}
          onClick={() => setCurrentVideo("translate")}
        >
          <Image
            src="/icons/translate.png"
            width={80}
            height={80}
            alt="translate"
            className={`rounded-xl ${currentVideo === "translate" ? "bg-white" : "bg-[#FFC02E]"}`}
          />
          <span className={`text-sm text-white w-20 ${currentVideo === "translate" ? "font-bold" : "opacity-50"}`}>Live Translate</span>
        </button>

        <button 
          className={`flex flex-col items-center justify-center gap-2 px-3 pb-6 
          ${currentVideo === "ses" ? "border-b-2" : ""}`}
          onClick={() => setCurrentVideo("ses")}
        >
          <Image
            src="/icons/ses.png"
            width={80}
            height={80}
            alt="ses"
            className={`rounded-xl ${currentVideo === "ses" ? "bg-white" : "bg-[#FFC02E]"}`}
          />
          <span className={`text-sm text-white w-20 ${currentVideo === "ses" ? "font-bold" : "opacity-50"}`}>Ses Kaydı Asistanı</span>
        </button>

        <button 
          className={`flex flex-col items-center justify-center gap-2 px-3 pb-6 
          ${currentVideo === "foto" ? "border-b-2" : ""}`}
          onClick={() => setCurrentVideo("foto")}
        >
          <Image
            src="/icons/foto.png"
            width={80}
            height={80}
            alt="foto"
            className={`rounded-xl ${currentVideo === "foto" ? "bg-white" : "bg-[#FFC02E]"}`}
          />
          <span className={`text-sm text-white w-20 ${currentVideo === "foto" ? "font-bold" : "opacity-50"}`}>Foto Asistanı</span>
        </button>
      </div>

      <h1 className="font-bold text-center text-2xl text-white px-10 py-4">
        {videos[currentVideo].text}
      </h1>
    </div>
  );
};

export default Videos;
