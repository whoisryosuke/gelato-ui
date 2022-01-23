import { styleVariants } from '@vanilla-extract/css';

export const statusVariants = styleVariants({
  error: { background: 'red' },
  success: { background: 'green' },
  warning: { background: 'yellow' },
  info: { background: 'blue' },
});
