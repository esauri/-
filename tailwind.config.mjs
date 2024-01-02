// #region Colors
/**
 * Returns color value from CSS variable
 *
 * @param {string} name
 * @returns string
 */
function getHSLColor(name) {
	return `hsl(var(--${name}) / <alpha-value>)`;
}

const colors = {
	background: getHSLColor("es-background"),
	foreground: getHSLColor("es-foreground"),
	primary: {
		DEFAULT: getHSLColor("es-primary"),
		foreground: getHSLColor("es-primary-foreground"),
	},
	muted: {
		DEFAULT: getHSLColor("es-muted"),
		foreground: getHSLColor("es-muted-foreground"),
	},
};

// #endregion

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ["class"],
	theme: {
		extend: {
			colors,
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
	],
}
