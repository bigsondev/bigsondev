/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Layout } from 'antd';

import config from 'react-reveal/globals';

// The following two imports is for the theme.
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/addon/hint/show-hint.css';

import {
  ThemeProvider,
  Header,
  GlobalStyles,
  Content,
  ErrorBoundary,
} from '~components';

config({ ssrFadeout: true });

export const wrapPageElement = ({
  element,
  props: {
    location: { pathname },
  },
}) => (
  <ErrorBoundary>
    <GlobalStyles />
    <ThemeProvider>
      <Layout>
        <Header pathname={pathname} />
        <Content>{element}</Content>
      </Layout>
    </ThemeProvider>
  </ErrorBoundary>
);
