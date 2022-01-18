import { createTheme } from '@vanilla-extract/css';

export const colors = {
  text: '#111212',
  background: '#fff',
  primary: '#005CDD',
  secondary: '#6D59F0',
  muted: '#f6f6f9',
  gray: '#D3D7DA',
  highlight: 'hsla(205, 100%, 40%, 0.125)',
  white: '#FFF',
  black: '#111212',

  success: 'green',
  message: 'blue',
  warning: 'yellow',
  danger: 'red',
};

export const gradients = {
  subtle: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  purple: `linear-gradient(180deg, ${colors.primary} 0%, #A000C4 100%)`,
  blue: `linear-gradient(180deg, #00D2FF 0%, ${colors.secondary} 100%)`,
};

export const [themeClass, vars] = createTheme({
  colors,
  gradients,
});
