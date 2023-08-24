import Link from "next/link";

const navigation = [
  { name: "Modern", href: "/experience", target: "" },
  {
    name: "Classic Resume",
    href: "https://resume.neerajmukta.com",
    target: "blank",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
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
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      {/*  <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
      <h1 className="z-10 text-4xl py-2 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Neeraj Mukta
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 bg-clip-text ">
          <div className="w-100">
            Jack of all trades(react, react-native, angular, x, y, x)
          </div>
          and master of js/ts/product mvp
        </h2>
      </div>
      <div>Like button with counts (worker storage)</div>
      <div>
        social media icons on the right vertically, links to other domains
      </div>
    </div>
  );
};

export default Home;
