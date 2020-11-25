import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    promo: '#F9B060',
    primary: '#137099',
    white: '#FFF',
    black: '#000',
    grayLevelOne: '#FAFAFA',
    grayLevelTwo: '#F5F5F5',
  },
  borders: {
    radius: 6,
  },
  fontSize: {
    base: '1rem',
    large: '2.8rem',
    superLarge: '3rem',
    extraLarge: '4rem',
  },
  fontWeight: {
    strong: 600,
    stronger: 700,
  },
  spacing: {
    base: '0.5rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    extraLarge: '5rem',
  },
  opacity: {
    base: 1,
    title: 0.85,
  },
};

export const ThemeProvider = ({ children }) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
