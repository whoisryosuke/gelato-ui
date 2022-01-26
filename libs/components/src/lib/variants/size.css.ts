import { styleVariants } from '@vanilla-extract/css';
import { base } from '../theme';

export const sizeVariants = styleVariants({
  tiny: {
    paddingTop: base.tokens.space[0],
    paddingBottom: base.tokens.space[0],
    paddingLeft: base.tokens.space[1],
    paddingRight: base.tokens.space[1],
    fontSize: base.tokens.fontSizes[0],
  },
  small: {
    paddingTop: base.tokens.space[1],
    paddingBottom: base.tokens.space[1],
    paddingLeft: base.tokens.space[2],
    paddingRight: base.tokens.space[2],
    fontSize: base.tokens.fontSizes[0],
  },
  medium: {
    paddingTop: base.tokens.space[2],
    paddingBottom: base.tokens.space[2],
    paddingLeft: base.tokens.space[3],
    paddingRight: base.tokens.space[3],
    fontSize: base.tokens.fontSizes[1],
  },
  large: {
    paddingTop: base.tokens.space[3],
    paddingBottom: base.tokens.space[3],
    paddingLeft: base.tokens.space[4],
    paddingRight: base.tokens.space[4],
    fontSize: base.tokens.fontSizes[2],
  },
  huge: {
    paddingTop: base.tokens.space[4],
    paddingBottom: base.tokens.space[4],
    paddingLeft: base.tokens.space[5],
    paddingRight: base.tokens.space[5],
    fontSize: base.tokens.fontSizes[3],
  },
});
