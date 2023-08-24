"use client";

import React, { useState } from "react";
import "./styles.css";

const Page = () => {
  const [rotateY, setRotateY] = useState(0);

  const rotate = () => {
    let newRotateY = rotateY + 90;
    setRotateY(newRotateY);
  };

  return (
    <div className=" p-10 flex flex-col gap-10">
      <nav>
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Services
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
      </nav>
      <div
        className="cube"
        style={{ transform: `rotateX(${rotateY}deg)` }}
        onClick={rotate}
      >
        <div className="side front">1</div>
        <div className="side back">2</div>
        <div className="side right">3</div>
        <div className="side left">4</div>
        <div className="side top">5</div>
        <div className="side bottom">6</div>
      </div>
    </div>
  );
};

export default Page;
