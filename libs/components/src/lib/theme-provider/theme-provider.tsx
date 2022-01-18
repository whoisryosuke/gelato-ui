import styled from 'styled-components';
import { ThemeContext, ThemeNames } from '../context/theme';
import { useState } from 'react';
import { lightTheme } from '../theme';

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeNames>('light');

  const toggleTheme = () => {
    setSelectedTheme((prevValue) => (prevValue === 'light' ? 'dark' : 'light'));
  };

  const colorMode = selectedTheme === 'light' ? lightTheme : lightTheme;
  return (
    <ThemeContext.Provider
      value={{
        theme: selectedTheme,
        toggleTheme,
      }}
    >
      <div className={colorMode}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
