import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			back: {
				dark: "#101310",
				light: "#1F241F",
			},
			primary: {
				light: "#01FE84",
				dark: "#109051",
			},
			font: {
				light: "#FFFFFF",
				default: "#868F8A",
				dark: "#4C4E4C",
			},
		},
		extend: {},
	},
	plugins: [],
};
export default config;
