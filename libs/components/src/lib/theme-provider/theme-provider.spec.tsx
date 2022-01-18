import { render } from '@testing-library/react';

import ThemeProvider from './theme-provider';

describe('ThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeProvider />);
    expect(baseElement).toBeTruthy();
  });
});
