import React from 'react';
import { ThemeProvider } from '../src';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
