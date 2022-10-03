module.exports = {
  corePlugins: {
    // preflight: true,
    // container: false,
    // float: false,
    // clear: false,
  },
  content: [
    "./src/**/*.{js,ts,scss}",
    "../la-billetterie/concorde/src/**/*.{js,ts}",
    "./index.html",
  ],
  theme: {
   
    borderRadius: {
      none: "0",
      sm: "var(--sc-rounded-sm)",
      DEFAULT: "var(--sc-rounded)",
      md: "var(--sc-rounded-md)",
      lg: "var(--sc-rounded-lg)",
      xl: "var(--sc-rounded-xl)",
      full: "9999px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      neutral: {
        0: "var(--sc-base)",
        50: "var(--sc-base-50)",
        100: "var(--sc-base-100)",
        200: "var(--sc-base-200)",
        300: "var(--sc-base-300)",
        400: "var(--sc-base-400)",
        500: "var(--sc-base-500)",
        600: "var(--sc-base-600)",
        700: "var(--sc-base-700)",
        800: "var(--sc-base-800)",
        900: "var(--sc-base-900)",
        content: "var(--sc-base-content)",
      },
      primary: {
        50: "var(--sc-primary-50)",
        100: "var(--sc-primary-50)",
        200: "var(--sc-primary-200)",
        300: "var(--sc-primary-300)",
        400: "var(--sc-primary-400)",
        500: "var(--sc-primary-500)",
        600: "var(--sc-primary-600)",
        700: "var(--sc-primary-700)",
        800: "var(--sc-primary-800)",
        900: "var(--sc-primary-900)",
        DEFAULT: "var(--sc-primary)",
        content: "var(--sc-primary-content)",
      },
      success: {
        50: "var(--sc-success-50)",
        100: "var(--sc-success-100)",
        200: "var(--sc-success-200)",
        300: "var(--sc-success-300)",
        400: "var(--sc-success-400)",
        500: "var(--sc-success-500)",
        600: "var(--sc-success-600)",
        700: "var(--sc-success-700)",
        800: "var(--sc-success-800)",
        900: "var(--sc-success-900)",
        DEFAULT: "var(--sc-success)",
        content: "var(--sc-success-content)",
      },
      danger: {
        50: "var(--sc-success-50)",
        100: "var(--sc-danger-100)",
        200: "var(--sc-danger-200)",
        300: "var(--sc-danger-300)",
        400: "var(--sc-danger-400)",
        500: "var(--sc-danger-500)",
        600: "var(--sc-danger-600)",
        700: "var(--sc-danger-700)",
        800: "var(--sc-danger-800)",
        900: "var(--sc-danger-900)",
        DEFAULT: "var(--sc-danger)",
        content: "var(--sc-danger-content)",
      },
      warning: {
        50: "var(--sc-warning-50)",
        100: "var(--sc-warning-100)",
        200: "var(--sc-warning-200)",
        300: "var(--sc-warning-300)",
        400: "var(--sc-warning-400)",
        500: "var(--sc-warning-500)",
        600: "var(--sc-warning-600)",
        700: "var(--sc-warning-700)",
        800: "var(--sc-warning-800)",
        900: "var(--sc-warning-900)",
        DEFAULT: "var(--sc-warning)",
        content: "var(--sc-warning-content)",
      },
      info: {
        50: "var(--sc-info-50)",
        100: "var(--sc-info-100)",
        200: "var(--sc-info-200)",
        300: "var(--sc-info-300)",
        400: "var(--sc-info-400)",
        500: "var(--sc-info-500)",
        600: "var(--sc-info-600)",
        700: "var(--sc-info-700)",
        800: "var(--sc-info-800)",
        900: "var(--sc-info-900)",
        DEFAULT: "var(--sc-info)",
        content: "var(--sc-info-content)",
      },
      contrast: {
        DEFAULT: "var(--sc-contrast)",
        content: "var(--sc-contrast-content)",
      },
    },
    extend: {
      fontFamily: {
        headings: ["var(--sc-font-family-headings)"],
        body: ["var(--sc-font-family-base)"],
      },
      borderWidth: {
        DEFAULT: "var(--sc-border-width)",
      },
    },
  },
};