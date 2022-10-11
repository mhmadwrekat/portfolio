module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      BG: "url('/assest/background.jpg')",
      Mobile_profile: "url('/assest/mobileprofile.jpg')",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      fontFamily: {
        TSExtra: ["TsExtrabold"],
        TSSemi: ["TsSemibold"],
        TSbold: ["Tsbold"],
        TSmedium: ["TsMed"],
        TSthin: ["TsThin"],
        TSlight: ["TsLight"],
        NTbold: ["NotoBold"],
        NTsemibold: ["NotoSemiBold"],
        NTmedium: ["NotoMedium"],
        NTregular: ["NotoRegular"],
      },
      colors: {
        Orange: "#ff5200",
        Orange1: "#FDA136",
        Green1: "#397754",
        Green2: "#36AE7C",
        FatherWhite: "#ebf5f0",
        White: "#FFFFFF",
        Snow1: "#FFFAFA",
        Snow2: "#F0FFF0",
        Purple: "#A2238E",
        BLUE: "#187498",
        Purp100: "#45378B",
        Purp200: "#695CAD",
        Purp300: "#453783",
        Purp400: "#382F68",
        YELLOW: "#E0A719",
        SKY: "#17C1BC",
        RED: "#EB5353",
        GRAY: "#CCCCCC",
        GRAY50: "#B0B0B0",
        GRAY100: "#F5F5F5",
        GRAY200: "#DDDDDD",
        GRAY300: "#7F7F7F",
        GRAY400: "#686767",
        one: "#EBC7E8",
        two: "#BFACE0",
        three: "#A084CA",
        four: "#645CAA",
      },
    },
  },
  plugins: [],
};
