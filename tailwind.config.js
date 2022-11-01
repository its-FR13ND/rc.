/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        fontFamily: {
            sans: "IRANYekan",
        },
        extend: {
            colors: {
                orange: {
                    900: "#FF4800",
                },
            },
            boxShadow: {
                orange: "0px 7px 15px rgba(255, 72, 0, 0.6)",
            },
        },
    },
    plugins: [],
};
