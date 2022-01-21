import { style } from '@vanilla-extract/css';
import { light, base } from '../theme';

export const buttonStyles = style({
  display: 'flex',
  backgroundColor: light.tokens.colors.primary,
  fontSize: base.tokens.fontSizes[0],
});
