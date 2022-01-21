import { createThemeContract } from '@vanilla-extract/css';

const colors = {
  text: null,
  background: null,
  primary: null,
  secondary: null,
  muted: null,
  gray: null,
  highlight: null,
  white: null,
  black: null,

  success: null,
  message: null,
  warning: null,
  danger: null,
};

const gradients = {
  subtle: null,
  purple: null,
  blue: null,
};

export const colorTokens = createThemeContract({
  colors,
  gradients,
});
