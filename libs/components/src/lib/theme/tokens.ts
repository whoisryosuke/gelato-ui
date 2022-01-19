export const ANIMATION = {
  default: '400ms ease-in',
  fast: '300ms ease-in',
};

export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  computer: '992px',
  desktop: '1200px',
  widescreen: '1920px',
};
export const MEDIA_QUERIES: Record<
  string,
  Record<string, string>
> = Object.entries(BREAKPOINTS).reduce(
  (mergeObj, [key, value]) => ({
    ...mergeObj,
    [key]: { '@media': `screen and (min-width: ${value})` },
  }),
  {}
);

export const FONTS = {
  body: 'Roboto, Helvetiva Neue, Helvetica, Aria, sans-serif',
  heading: 'Archivo, Helvetiva Neue, Helvetica, Aria, sans-serif',
  monospace: 'Menlo, monospace',
};

export const FONT_SIZES = [12, 14, 16, 20, 24, 32, 48, 64, 96];
// Generates an object with keys starting from 0 - <array length>
// Also can convert values from number to pixel using param flag
const createAscendingProperties = (
  arrayProps: number[],
  convertToPx = false
): Record<number, string> => {
  return arrayProps.reduce(
    (mergeObj, currValue, index) => ({
      ...mergeObj,
      [index]: convertToPx ? `${currValue}px` : currValue,
    }),
    {}
  );
};
export const FONT_SIZE_PROPERTIES = createAscendingProperties(FONT_SIZES, true);

export const SPACE = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const SPACE_PROPERTIES = createAscendingProperties(SPACE, true);
