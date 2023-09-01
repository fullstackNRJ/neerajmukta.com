"use client";
import Github from "@/components/Icons/Github";
import Linkedin from "@/components/Icons/Linkedin";
import Mail from "@/components/Icons/Mail";
import Twitter from "@/components/Icons/Twitter";
import LikeButton from "@/components/LikeButton";
import useLikeButton from "@/hooks/useLikeButton";
import Link from "next/link";

const navigation = [
  { name: "Modern", href: "/experience", target: "" },
  {
    name: "Classic Resume",
    href: "https://resume.neerajmukta.com",
    target: "blank",
  },
];

const jacks = [
  { title: "React", color: "#0ea5e9" },
  { title: "Next", color: "#64748b" },
  { title: "React Native", color: "#375EDF" },
  { title: "Angular", color: "#9D1730" },
  { title: "Node", color: "#16a34a" },
  { title: "AWS", color: "#d97706" },
];
const masters = [
  { title: "Javascript", color: "#facc15" },
  { title: "Typescript", color: "#104AEB" },
];

const Home = () => {
  const { isLiked, likesCount, handleLikeButtonClick } = useLikeButton();

  return (
    <div className="flex flex-col gap-10 p-2 items-center justify-center w-screen min-h-screen overflow-scroll bg-gradient-to-tl from-black via-zinc-950/10 to-black">
      <div className="absolute flex items-center justify-center top-0 w-full h-8 bg-orange-400 text-white text-center">
        <Link
          href="https://medium.com/@niraj.mukta123"
          target="_blank"
          className="text-center"
        >
          Checkout my new blogs. Click here!
        </Link>
      </div>
      {/* <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.target}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul> 
      </nav> */}
      {/* affine like text animation
       <h4 className="p-4 animate-fade-in animate-shiny-text animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
        Experienced Freelancer | Fullstack JS developer | Webflow developer
      </h4> */}
      <div className="mt-20 p-4 animate-fade-in">
        <h4 className="animate-shiny-text animate-text bg-gradient-to-r from-purple-800 via-slate-300 to-orange-500 bg-clip-text text-transparent text-xl font-black">
          Experienced Freelancer | Fullstack JS developer | Webflow developer{" "}
        </h4>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      {/*  <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
      <h1 className="z-10 text-4xl py-2 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text bg-gradient-to-tr from-slate-400 via-slate-600 to-stone-300  ">
        Neeraj Mukta
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="mt-8 z-0 p-10 flex flex-col shadow-md shadow-white border-slate-300 rounded-md delay-1000 animate-fade-in">
        <div className="my-8 text-center animate-fade-in delay-500 h-8 md:h-10 overflow-hidden">
          <h2 className="flex text-center sm:text-lg text-xl text-white-500 ">
            Jack of all trades [
            <ul className="list-none animate-rotation">
              {jacks.map(
                ({ title, color }: { title: string; color: string }) => {
                  return (
                    <li
                      className="leading-4 p-2 text-2xl font-semibold bg-gradient-to-tl bg-clip-text text-transparent"
                      style={{ backgroundColor: color }}
                      key={title}
                    >
                      {title}
                    </li>
                  );
                }
              )}
            </ul>
            ]
          </h2>
        </div>
        <div className="animate-fade-in delay-700 h-8 overflow-hidden">
          <h2 className="flex text-center text-xl text-white-500 bg-clip-text ">
            Master of [
            <ul className="list-none animate-rotation-2">
              {masters.map(
                ({ title, color }: { title: string; color: string }) => {
                  return (
                    <li
                      className="leading-4 p-2 text-2xl font-semibold bg-gradient-to-bl bg-clip-text text-transparent"
                      style={{ backgroundColor: color }}
                      key={title}
                    >
                      {title}
                    </li>
                  );
                }
              )}
            </ul>
            ]
          </h2>
        </div>
      </div>

      <div className="mt-8 p-2 flex  flex-col gap-6 items-center animate-fade-in delay-700 ">
        <h3 className="text-xl font-medium text-center">
          {" "}
          Interested in hiring?
        </h3>
        <Link
          className="px-6 py-4 text-gray-100 rounded-full bg-gradient-to-r from-sky-600 to-sky-950 hover:from-sky-950 hover:to-sky-600 hover:-translate-y-4 duration-1000 hover:duration-100"
          href={"https://calendly.com/niraj-mukta123/introductory-call"}
          target="_blank"
        >
          Schedule a call
        </Link>
        <span className="text-xl font-medium">or</span>

        <Link
          className="px-6 py-4 rounded-full text-slate-300 bg-gradient-to-r from-yellow-600 to-yellow-900 hover:from-yellow-900 hover:to-yellow-600 hover:-translate-y-4 duration-1000 hover:duration-100"
          href={"https://resume.neerajmukta.com"}
          target="_blank"
        >
          Checkout Resume
        </Link>
      </div>
      <div className="p-2 mt-10 border-b-2 border-teal-200 flex animate-fade-in-right delay-1000">
        <span>
          <Link href="mailto:nirajunofficial@gmail.com">
            <Mail />
          </Link>
        </span>
        <span>
          <Link href="https://twitter.com/devnrj07" target="_blank">
            <Twitter />
          </Link>
        </span>
        <span>
          <Link href="https://linkedin.com/in/devnrj07" target="_blank">
            <Linkedin />
          </Link>
        </span>
        <span>
          <Link href="https://github.com/devnrj07" target="_blank">
            <Github />
          </Link>
        </span>
      </div>
      <div className="my-2 flex flex-col items-center animate-fade-in-left">
        <h5>If you like my website, hit the like button</h5>
        <LikeButton
          liked={isLiked}
          likesCount={likesCount}
          onLike={handleLikeButtonClick}
        />
      </div>
      <div className="my-4 flex flex-col items-center">
        <span>Made with ❤️ after sanitizing hands 🤲</span>
        <p className="text-center text-sm mt-6 mb-2">
          © {new Date().getFullYear()} devNRJ.
        </p>
      </div>
      {/* 
      <div>
        social media icons on the right vertically, links to other domains
      </div> */}
    </div>
  );
};

export default Home;
