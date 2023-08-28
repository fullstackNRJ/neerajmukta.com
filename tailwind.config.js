/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 4s ease-in forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        "typewriter-storymode":
          "typing 3s steps(20) infinite alternate, blink .7s infinite ",
        "shiny-text": "clipText 5s ease infinite",
        rotation: "3d-rotate-text 10s infinite",
        "rotation-2": "3d-rotate-text-2 6s ease infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "grey",
          },
          "100%": {
            borderColor: "white",
          },
        },
        clipText: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "3d-rotate-text": {
          "0%, 10.66%, 100%": { transform: "translate3d(0,0,0)" },
          "15.66%, 21.32%": { transform: "translate3d(0,-16%,0)" },
          "27.32%,37.98%": { transform: "translate3d(0,-32%,0)" },
          "43.98%,52.64% ": { transform: "translate3d(0,-50%,0)" },
          "58.32%, 68.98%": { transform: "translate3d(0,-67%,0)" },
          "74.64%,84.3%": { transform: "translate3d(0,-82%,0)" },
          "105.64%, 115.3%": { transform: "translate3d(0,-82%,0)" },
          "121.3%, 131.96%": { transform: "translate3d(0,-67%,0)" },
          "138.3%, 148.96%": { transform: "translate3d(0,-50%,0)" },
          "154.3%, 164.96%": { transform: "translate3d(0,-32%,0)" },
          "170.3%, 181.96%": { transform: "translate3d(0,-16%,0)" },
          "187.3%, 197.96%": { transform: "translate3d(0,-0%,0)" },
        },
        "3d-rotate-text-2": {
          "0%, 10.66%, 100%": { transform: "translate3d(0,0,0)" },
          "15.66%, 21.32%": { transform: "translate3d(0,-50%,0)" },
          "27.32%,37.98%": { transform: "translate3d(0,-50%,0)" },
          "43.98%,52.64% ": { transform: "translate3d(0,-0%,0)" },
        },
      },
    },
  },
  plugins: [],
};

// 6 is the number of animation.
// Here, there are 4 lines :

// 1 to 2
// 2 to 3
// 3 to 4
// 4 to 3
// 3 to 2
// 2 to 1

// 6x + 6y = 100 (100% duration)

// HERE :
// y = 4 -> Animation between two lines
// x = 12.66 -> Time spent on a line

// You can define a value and calculate the other if you want change speed or the number of lines
