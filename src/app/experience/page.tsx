"use client";
import React, { useState } from "react";
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
  { id: 5, name: "Reach out", component: ConnectForm },

  // Add more components here...
];

const Page = () => {
  const [rotateX, setRotateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotate = (index: number) => {
    let newRotateX = 90 * index;
    setRotateX(newRotateX);
    setCurrentIndex(index);
  };

  return (
    <div className="app">
      {/* Render the links to the components */}
      <div className="navigationBar">
        {elements.map((el, index) => (
          <button key={el.id} onClick={() => rotate(index)}>
            {el.name}
          </button>
        ))}
      </div>

      {/* Create the rotating container */}
      <div className="cube" style={{ transform: `rotateX(${rotateX}deg)` }}>
        {elements.map((el, index) => (
          <div
            key={el.id}
            className={`side side${index} ${
              currentIndex === index ? "active" : ""
            }`}
          >
            <el.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
