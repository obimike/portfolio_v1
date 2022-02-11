module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      smallPhone: "320px",
      phone: "411px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
      wide4k: "2560px",
    },

    fontFamily: {
      special: ["Italiana", "serif"],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: {
        light: "#85d7ff",
        DEFAULT: "#2DAA9F",
        languages: "#204B4E",
        dark: "#009eeb",
        stroke: "#277B77",
        lang_bg: "rgba(62, 78, 85, 0.5)",
      },
    },

    textColor: {
      primary: "#2DAA9F",
      secondary: "#ffed4a",
      accent: "#288680",
      danger: "#e3342f",
      gray: "#E5E5E5",
    },

    extend: {
      backgroundImage: {
        profile: "url('/src/assets/img/Profile.svg')",
        profile_big: "url('/src/assets/img/Profile_lg.svg')",
        prowess: "url('/src/assets/img/Prowess.svg')",
        prowess_big: "url('/src/assets/img/Prowess_lg.svg')",
        portfolio: "url('/src/assets/img/Portfolio.svg')",
        portfolio_big: "url('/src/assets/img/Portfolio_lg.svg')",
        skill_design: "url('/src/assets/img/skill_design.svg')",
        skill_design_big: "url('/src/assets/img/skill_design_bg.svg')",
        contact: "url('/src/assets/img/Contact.svg')",
        contact_big: "url('/src/assets/img/Contact_lg.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
