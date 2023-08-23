"use client";
import dynamic from "next/dynamic";
import React from "react";
import {
  FadeIn,
  ScrollContainer,
  ScrollPage,
  batch,
} from "react-scroll-motion";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const page = () => {
  return (
    <ScrollContainer snap="proximity">
      <ScrollPage debugBorder>
        <div className="flex-1 items-center justify-center">
          Flexbox inside scroll page
          <Animator animation={FadeIn()}>
            <span className=" font-medium">
              Let me show you scroll animation 😀
            </span>
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default page;
