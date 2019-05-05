import Typography from "typography";
import theme from "typography-theme-github";

theme.headerFontFamily = ["Montserrat", ...theme.headerFontFamily];
theme.headerWeight = 700;

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
