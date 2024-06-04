import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
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
			boxShadow: {
				'3xl': '0px 0px 60px 0px',
			},
			fontSize: {
				ct: '0.7rem',
			}
		},
	},
	plugins: [],
};
export default config;
