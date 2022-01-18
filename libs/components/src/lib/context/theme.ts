import { createContext, useContext } from 'react';

export type ThemeNames = 'light' | 'dark';
export type ThemeContextValue = {
  theme: ThemeNames;
  toggleTheme: any;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: null,
});

export const useThemeValue = () => useContext(ThemeContext);
