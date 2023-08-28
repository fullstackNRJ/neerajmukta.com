"use client";
import React, { useMemo, useState } from "react";
import "./styles.css";
import Aboutme from "@/components/Aboutme";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ConnectForm from "@/components/ConnectForm";

const elements = [
  { id: 1, name: "About me", component: Aboutme },
  { id: 2, name: "Skill set", component: Skills },
  { id: 3, name: "Experience", component: Experience },
  { id: 4, name: "Projects", component: Projects },
  //{ id: 5, name: "Reach out", component: ConnectForm }, this overlaps with component 1
];

const Page = () => {
  const [rotateX, setRotateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasInteractedWithNav, sethasInteractedwithNav] = useState(false); //repalce with useLocalStorage

  const rotate = (index: number) => {
    let newRotateX = 90 * index;
    setRotateX(newRotateX);
    setCurrentIndex(index);
  };

  const getTranslateX = useMemo(() => {
    switch (currentIndex) {
      case 0:
        return `translate-x-0`;
      case 1:
        return `translate-x-24`;
      case 2:
        return `translate-x-48`;
      case 3:
        return `translate-x-72`;
    }
  }, [currentIndex]);

  return (
    <div className="bg-blue-600 w-full h-screen flex flex-col justify-center items-center animate-fade-in">
      {/* Create the rotating container */}
      <div className="bg-blue-700 w-fit h-fit p-4 flex flex-col justify-center items-center gap-10 ">
        <div className="cube " style={{ transform: `rotateX(${rotateX}deg)` }}>
          {elements.map((el, index) => (
            <div
              key={el.id}
              className={`side 
               side${index} ${currentIndex === index ? "active" : ""}`}
            >
              <el.component />
            </div>
          ))}
        </div>
        {/* {!hasInteractedWithNav ? (
          <span className="p-2">
            Tip: click or touch on menu items below to navigate between section
          </span>
        ) : null} */}
        {/* Render the links to the components */}
        <div
          className="flex gap-4 px-1 py-2 border-2 rounded-full border-white "
          onClick={() => sethasInteractedwithNav(true)}
        >
          <div
            className={`absolute px-12 py-5 rounded-full bg-gray-900 transition-all duration-700 z-0 blur-sm ${getTranslateX} `}
          />
          {elements.map((el, index) => (
            <button
              key={el.id}
              onClick={() => rotate(index)}
              className={`p-2 z-10 `}
            >
              {el.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
