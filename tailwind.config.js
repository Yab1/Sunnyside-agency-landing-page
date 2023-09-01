/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Soft-red": "hsl(7, 99%, 70%)",
        "Dark-desaturated-cyan": "hsl(167, 40%, 24%)", // footer
        "Dark-blue": "hsl(198, 62%, 26%)", //photography text
        "Dark-moderate-cyan": "hsl(168, 34%, 41%)", // graphic design text
        "Very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "Very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "Dark-grayish-blue": "hsl(232, 10%, 55%)",
        "Grayish-blue": "hsl(210, 4%, 67%)",
        Yellow: "hsl(51, 100%, 49%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Barlow: ["Barlow"],
        Fraunces: ["Fraunces"],
      },
    },
  },
  plugins: [],
};
