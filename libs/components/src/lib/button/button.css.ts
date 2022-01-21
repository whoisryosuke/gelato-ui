import { style } from '@vanilla-extract/css';
import { themes, base } from '../theme';

export const buttonStyles = style({
  display: 'flex',
  backgroundColor: themes.tokens.colors.primary,
  fontSize: base.tokens.fontSizes[0],
});
