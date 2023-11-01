/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =
  // withMT(

  {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // borderWidth: {
        //   DEFAULT: "1px",
        //   0: "0",
        //   1: "1px",
        //   2: "2px",
        //   3: "3px",
        //   4: "4px",
        //   6: "6px",
        //   8: "8px",
        // },
        fontFamily: {
          TSExtra: ["TsExtrabold"],
          TSSemi: ["TsSemibold"],
          TSbold: ["Tsbold"],
          TSmedium: ["TsMed"],
          TSlight: ["TsLight"],
          Acme: ["acme"],
        },
        colors: {
          navyBlue: "#1E2A3A",
          spotYellow: "#fff000",
          slate950: "#020617",
          pink: "#ff1e52",
        },

        // backgroundImage: {
        //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        //   "gradient-conic":
        //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // },
      },
    },
    plugins: [],
  };
// );
