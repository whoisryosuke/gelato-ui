import { style } from '@vanilla-extract/css';
import { light } from '../theme';

export const buttonStyles = style({
  display: 'flex',
  backgroundColor: light.tokens.colors.primary,
});
