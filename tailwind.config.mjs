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
  card: {
    DEFAULT: getHSLColor("es-card"),
    foreground: getHSLColor("es-card-foreground"),
  },
};

// #endregion

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.2s ease-in",
        "fade-in-slide-up": "fade-in-slide-up 0.3s ease-in-out",
        signal: "signal 0.8s ease-out infinite",
      },
      backgroundImage: {
        horsemask: "url('/images/horsemasks/dawnofthelivinghorsemasks.png')",
        "neighbor-post": "url('/images/patch/qp_banner.jpg')",
        poseidon: "url('/images/poseidon/poseidon_dark.jpg')",
        tiptap: "url('/images/tiptap/tiptap_banner.jpg')",
        "trump-card": "url('/images/trumpcard/public/large/banner.jpg')",
        "two-seven-zero": "url('/images/270/public/large/banner.jpg')",
        venu: "url('/images/venu/thumbnail.jpg')",
      },
      colors,
      container(theme) {
        return {
          center: true,
          padding: {
            DEFAULT: theme.theme("spacing.6"),
            md: theme.theme("spacing.12"),
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
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-slide-up": {
          from: { opacity: "0", transform: "translateY(2rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        signal: {
          "0%": {
            bottom: "3rem",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            bottom: "1.5rem",
          },
        },
      },
      typography(theme) {
        const serifFontFamily = theme("fontFamily.serif").join(", ");

        return {
          DEFAULT: {
            css: {
              "--tw-prose-body": getTypographyColor(theme("colors.foreground")),
              "--tw-prose-bold": getTypographyColor(theme("colors.foreground")),
              "--tw-prose-bullets": getTypographyColor(theme("colors.border")),
              "--tw-prose-counters": getTypographyColor(theme("colors.border")),
              "--tw-prose-headings": getTypographyColor(
                theme("colors.foreground"),
              ),
              "--tw-prose-links": getTypographyColor(
                theme("colors.primary.DEFAULT"),
              ),
              "--tw-prose-quote-borders": getTypographyColor(
                theme("colors.border"),
              ),
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
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
  ],
};
