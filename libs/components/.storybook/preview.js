import React from 'react';
import { lightTheme } from '../src/lib/theme';

export const decorators = [
  (Story) => (
    <div className={lightTheme}>
      <Story />
    </div>
  ),
];
