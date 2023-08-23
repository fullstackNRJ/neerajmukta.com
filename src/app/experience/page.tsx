"use client";
import React, { useState } from "react";
import "./styles.css";

const elements = [
  { id: 1, name: "Component1", content: "This is Component 1" },
  { id: 2, name: "Component2", content: "This is Component 2" },
  { id: 3, name: "Component3", content: "This is Component 3" },
  { id: 4, name: "Component4", content: "This is Component 4" },
  { id: 5, name: "Component5", content: "This is Component 5" },

  // Add more components here...
];

const Page = () => {
  const [rotateX, setRotateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotate = (index: number) => {
    let newRotateX = -90 * index;
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
            {el.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
