import { style } from '@vanilla-extract/css';
import { themes, base } from '../theme';

export const buttonStyles = style({
  display: 'flex',
  backgroundColor: themes.tokens.colors.primary,
  borderRadius: base.tokens.space[1],
  border: 0,

  ':disabled': {
    backgroundColor: themes.tokens.colors.gray[500],
  },
  ':hover': {
    backgroundColor: themes.tokens.colors.blue[400],
  },
  ':active': {
    backgroundColor: themes.tokens.colors.blue[600],
  },
  ':focus': {
    backgroundColor: themes.tokens.colors.blue[700],
  },
});
