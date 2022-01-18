import { createTheme } from '@vanilla-extract/css';
import {
  ANIMATION,
  BREAKPOINTS,
  SPACE_PROPERTIES,
  FONTS,
  FONT_SIZE_PROPERTIES,
} from './tokens';

const [baseTheme, baseVars] = createTheme({
  fonts: FONTS,
  fontSizes: FONT_SIZE_PROPERTIES,
  breakpoints: BREAKPOINTS,
  animation: ANIMATION,
  space: SPACE_PROPERTIES,
});

export const base = {
  class: baseTheme,
  tokens: baseVars,
};
