import { style } from '@vanilla-extract/css';
import { lightVars } from '../theme';

export const buttonStyles = style({
  display: 'flex',
  backgroundColor: lightVars.color.brand,
});
