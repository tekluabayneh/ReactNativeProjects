/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  // content: ["./src/app/_layout.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scans everything inside the app folder
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scans everything inside components (adjusted path)
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
