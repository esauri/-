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
			container: {
				center: true,
			},
			fontFamily: {
				sans: [
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
				serif: [
					"var(--es-font-serif)",
					"ui-serif",
					"Georgia",
					"Cambria",
					"Times New Roman",
					"Times",
					"serif",
				],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
	],
}
