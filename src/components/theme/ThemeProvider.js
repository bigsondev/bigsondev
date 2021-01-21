import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    promo: '#F9B060',
    primary: '#137099',
    additional: '#71CC96',
    white: '#FFF',
    black: '#000',
    grayLevelOne: '#FAFAFA',
    grayLevelTwo: '#F5F5F5',
    grayLevelNine: '#434343',
  },
  borders: {
    radius: 6,
  },
  fontSize: {
    base: '1rem',
    medium: '1.5rem',
    large: '2.8rem',
    superLarge: '3rem',
    extraLarge: '4rem',
  },
  fontWeight: {
    medium: 500,
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
    title: 1,
  },
};

export const ThemeProvider = ({ children }) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
