import { createTheme } from '@vanilla-extract/css';

export const animation = {
  default: '400ms ease-in',
  fast: '300ms ease-in',
};

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  computer: '992px',
  desktop: '1200px',
  widescreen: '1920px',
};

export const fonts = {
  body: 'Roboto, Helvetiva Neue, Helvetica, Aria, sans-serif',
  heading: 'Archivo, Helvetiva Neue, Helvetica, Aria, sans-serif',
  monospace: 'Menlo, monospace',
};

const FONT_SIZES = [12, 14, 16, 20, 24, 32, 48, 64, 96];
// Generates an object with keys starting from 0 - <array length>
const createAscendingProperties = (arrayProps: number[]) => {
  return arrayProps.reduce(
    (mergeObj, currValue, index) => ({
      ...mergeObj,
      [index]: [currValue],
    }),
    {}
  );
};
const fontSizeProperties = createAscendingProperties(FONT_SIZES);

const SPACE = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const spaceProperties = createAscendingProperties(SPACE);

export const [themeClass, vars] = createTheme({
  fonts,
  fontSizes: fontSizeProperties,
  breakpoints,
  animation,
  space: spaceProperties,
});
