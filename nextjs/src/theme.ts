import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
  },
  fonts,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;
