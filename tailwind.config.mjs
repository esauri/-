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

/**
 * Returns color value from Tailwind theme
 *
 * @param {string} val
 * @returns string
 */
function getTypographyColor(val) {
	return val.replace("<alpha-value>", "var(--tw-text-opacity)");
}

const colors = {
	background: getHSLColor("es-background"),
	foreground: getHSLColor("es-foreground"),
	border: getHSLColor("es-border"),
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
			container(theme) {
				return {
					center: true,
					padding: {
						DEFAULT: theme.theme("spacing.6"),
						xl: theme.theme("spacing.20"),
					},
				};
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
			typography(theme) {
				const serifFontFamily = theme("fontFamily.serif").join(", ");

				return {
					DEFAULT: {
						css: {
							"--tw-prose-body": getTypographyColor(theme("colors.foreground")),
							"--tw-prose-bullets": getTypographyColor(theme("colors.border")),
							"--tw-prose-counters": getTypographyColor(theme("colors.border")),
							"--tw-prose-links": getTypographyColor(theme("colors.primary.DEFAULT")),
							"--tw-prose-quote-borders": getTypographyColor(theme("colors.border")),
							maxWidth: "none",
							// Elements
							p: {
								fontFamily: serifFontFamily,
							},
							li: {
								fontFamily: serifFontFamily,
							},
						},
					},
				};
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar-hide"),
		require("@tailwindcss/typography"),
	],
}
