module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};
