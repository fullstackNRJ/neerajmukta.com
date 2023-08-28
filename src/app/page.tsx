import Image from "next/image";
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
  return (
    <div className="flex flex-col gap-10 p-2 items-center justify-center w-screen min-h-screen overflow-scroll bg-gradient-to-tl from-black via-zinc-600/20 to-black">
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
      <div className="mt-8 z-0   p-10 flex flex-col items-center shadow-md shadow-white border-slate-300 rounded-md delay-1000 animate-fade-in">
        <div className="my-8 text-center animate-fade-in delay-500 h-8 md:h-10 overflow-hidden">
          <h2 className="flex text-center text-xl text-white-500 bg-clip-text ">
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
      <div className="p-2 mt-10 border-b-2 border-teal-200 flex animate-fade-in delay-1000">
        <span>
          <Link href="mailto:nirajunofficial@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              id="email"
              className="w-20 h-20 fill-current text-white hover:fill-red-500"
            >
              <path d="M112 105H16c-5.514 0-10-4.486-10-10V30c0-5.514 4.486-10 10-10h96c5.514 0 10 4.486 10 10v65c0 5.514-4.486 10-10 10zM16 24c-3.309 0-6 2.691-6 6v65c0 3.309 2.691 6 6 6h96c3.309 0 6-2.691 6-6V30c0-3.309-2.691-6-6-6H16z"></path>
              <path d="M64 65.04a5.989 5.989 0 0 1-3.456-1.101L8.003 33.734a2.001 2.001 0 0 1-.737-2.731 2.004 2.004 0 0 1 2.731-.737l52.816 30.379a1.997 1.997 0 0 0 2.373 0l.188-.123 52.629-30.256a2.001 2.001 0 0 1 1.994 3.468L67.456 63.939A5.989 5.989 0 0 1 64 65.04z"></path>
            </svg>
          </Link>
        </span>
        <span>
          <Link href="https://twitter.com/devnrj07" target="_blank">
            <svg
              id="twitterX"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-24 h-24 fill-current text-white hover:fill-slate-500"
            >
              <path d="M11 4c-3.854 0-7 3.146-7 7v28c0 3.854 3.146 7 7 7h28c3.854 0 7-3.146 7-7V11c0-3.854-3.146-7-7-7H11zm0 2h28c2.774 0 5 2.226 5 5v28c0 2.774-2.226 5-5 5H11c-2.774 0-5-2.226-5-5V11c0-2.774 2.226-5 5-5zm2.086 7 9.223 13.104L13 37h2.5l7.938-9.293L29.977 37h7.937L27.79 22.613 36 13h-2.5l-6.84 8.01L21.023 13h-7.937zm3.828 2h3.065l14.107 20H31.02L16.914 15z" />
            </svg>
          </Link>
        </span>
        <span>
          <Link href="https://linkedin.com/in/devnrj07" target="_blank">
            <svg
              id="linkedIn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-24 h-24 fill-current text-white hover:fill-blue-800"
            >
              <path d="M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5H9zm0 2h32c1.668 0 3 1.332 3 3v32c0 1.668-1.332 3-3 3H9c-1.668 0-3-1.332-3-3V9c0-1.668 1.332-3 3-3zm5 5.012c-1.095 0-2.08.327-2.81.941a3.297 3.297 0 0 0-1.178 2.514c0 1.867 1.62 3.323 3.68 3.467a.988.988 0 0 0 .003.002.988.988 0 0 0 .305.052c2.273 0 3.988-1.592 3.988-3.521a.988.988 0 0 0-.002-.053c-.101-1.9-1.796-3.402-3.986-3.402zm0 1.976c1.392 0 1.942.622 2.002 1.504-.012.856-.542 1.52-2.002 1.52-1.385 0-2.012-.71-2.012-1.545 0-.418.153-.733.473-1.002.32-.27.834-.477 1.539-.477zM11 19a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1h-6zm9 0a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V29c0-.83.226-1.655.625-2.195.399-.54.901-.865 1.857-.848.986.017 1.508.355 1.903.885S32 28.167 32 29v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V28.262c0-2.962-.877-5.308-2.38-6.895C36.114 19.78 34.023 19 31.812 19A8.729 8.729 0 0 0 27 20.424V20a1 1 0 0 0-1-1h-6zm-8 2h4v17h-4V21zm9 0h4v1.56a1 1 0 0 0 1.799.602S28.369 21 31.813 21c1.753 0 3.256.583 4.355 1.742 1.099 1.16 1.832 2.946 1.832 5.52V38h-4v-9c0-1.167-.28-2.373-1.01-3.354-.73-.98-1.958-1.663-3.472-1.689-1.522-.027-2.77.67-3.502 1.662C25.284 26.611 25 27.83 25 29v9h-4V21z" />
            </svg>
          </Link>
        </span>
        <span>
          <Link href="https://github.com/devnrj07" target="_blank">
            <svg
              id="github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-12 h-12 fill-current text-white hover:fill-stone-500"
            >
              <path
                stroke-miterlimit="10"
                d="M25 2C12.311 2 2 12.311 2 25s10.311 23 23 23 23-10.311 23-23S37.689 2 25 2zm0 2c11.607 0 21 9.393 21 21 0 .071-.005.142-.006.213a39.762 39.762 0 0 0-2.318-.149 59.321 59.321 0 0 0-4.903.061c.07-.49.12-.988.122-1.498.096-1.873-.532-3.625-1.555-5.172.247-.854.537-1.94.61-3.172.082-1.404-.04-2.961-1.167-4.013l-.289-.27H36.1c-2.683 0-4.52 1.123-5.643 2.014A15.026 15.026 0 0 0 25 12a15.82 15.82 0 0 0-5.553 1.018C18.325 12.127 16.487 11 13.801 11h-.393l-.289.268c-1.098 1.02-1.2 2.534-1.13 3.931.06 1.233.333 2.353.575 3.248-1.04 1.578-1.664 3.375-1.664 5.153 0 .511.048 1.01.118 1.502-1.806-.084-3.416-.1-4.694-.055-.94.033-1.679.089-2.318.148 0-.065-.006-.13-.006-.195C4 13.393 13.393 4 25 4zm-10.604 9.13c2.018.192 3.536 1.093 4.239 1.718l.469.414.578-.237C21.263 14.375 23.027 14 25 14c1.973 0 3.737.376 5.2 1.016l.585.257.479-.425c.703-.625 2.223-1.526 4.242-1.717.268.445.502 1.078.445 2.035-.067 1.146-.374 2.394-.605 3.135l-.15.482.298.408c.99 1.35 1.494 2.81 1.408 4.354l-.002.027v.028c0 2.495-.898 4.492-2.812 5.972C32.174 31.052 29.153 32 24.9 32c-4.252 0-7.275-.948-9.189-2.428-1.914-1.48-2.81-3.477-2.81-5.972 0-1.465.528-3.076 1.505-4.409l.293-.398-.14-.475c-.232-.788-.516-2.064-.573-3.216-.047-.96.18-1.565.41-1.971zM8.885 26.022a65.21 65.21 0 0 1 2.328.088c.077.312.166.619.273.918-3.307.07-5.781.403-7.306.688-.065-.5-.116-1.005-.145-1.516a44.842 44.842 0 0 1 4.85-.178zm32.23.016a44.94 44.94 0 0 1 4.848.178c-.029.503-.08 1-.143 1.494-1.58-.29-4.12-.622-7.513-.676.105-.293.193-.595.27-.9a64.184 64.184 0 0 1 2.538-.096zM11.912 28.02a9.029 9.029 0 0 0 2.576 3.134c1.54 1.192 3.544 2.024 5.989 2.469-.32.329-.611.69-.87 1.07l-.06-.052c.005-.007-.497.245-1.248.312S16.622 35 15.8 35c-1.225 0-1.765-.579-2.627-1.633a7.098 7.098 0 0 0-1.625-1.56c-.579-.406-1.073-.691-1.684-.793L9.783 31H9.7c-.466 0-.918.034-1.34.516-.21.24-.356.687-.261 1.064.094.378.333.61.547.752 1.366.911 1.608 2.715 2.464 4.318.8 1.594 2.527 2.35 4.291 2.35H18v4.803c-7.032-2.482-12.335-8.598-13.668-16.1 1.53-.288 4.095-.635 7.58-.683zm25.97.007c3.564.03 6.2.377 7.788.67C44.339 36.202 39.034 42.32 32 44.803V39.6c0-1.585-.52-3.332-1.426-4.79a7.52 7.52 0 0 0-.959-1.236c2.315-.457 4.217-1.275 5.698-2.42a9.004 9.004 0 0 0 2.57-3.127zM23.7 34.1H26.5c.813 0 1.68.647 2.375 1.765C29.57 36.983 30 38.485 30 39.6v5.798a21.078 21.078 0 0 1-10 0V39.6c0-1.091.468-2.589 1.209-3.711.741-1.123 1.677-1.79 2.49-1.79zM12.31 35.28C13.174 36.18 14.223 37 15.8 37c.779 0 1.751.028 2.676-.055l.01-.002c-.122.35-.213.703-.29 1.057H15.4c-1.233 0-2.104-.446-2.505-1.248l-.008-.014-.006-.011c-.165-.306-.38-.916-.572-1.446z"
                font-family="none"
                font-size="none"
                font-weight="none"
                text-anchor="none"
                transform="scale(2)"
              />
            </svg>
          </Link>
        </span>
      </div>
      <div className="mt-4">
        <span>Made with ❤️ after sanitizing hands 🤲</span>
      </div>
      {/* <div>Like button with counts (worker storage)</div>
      <div>
        social media icons on the right vertically, links to other domains
      </div> */}
    </div>
  );
};

export default Home;
