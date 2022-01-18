import React from 'react';
import { ThemeProvider } from '../src/lib/theme-provider';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
