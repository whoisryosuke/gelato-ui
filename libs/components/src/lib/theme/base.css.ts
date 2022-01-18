import { createTheme } from '@vanilla-extract/css';
import {
  ANIMATION,
  BREAKPOINTS,
  SPACE_PROPERTIES,
  FONTS,
  FONT_SIZE_PROPERTIES,
} from './tokens';

export const [themeClass, vars] = createTheme({
  fonts: FONTS,
  fontSizes: FONT_SIZE_PROPERTIES,
  breakpoints: BREAKPOINTS,
  animation: ANIMATION,
  space: SPACE_PROPERTIES,
});
