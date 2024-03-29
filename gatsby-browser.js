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

// This import is for the language syntax highlighting.
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlembedded/htmlembedded.js';
// This import is for all the addons
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/matchtags.js';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';

import {
  ThemeProvider,
  ErrorBoundary,
  Banners,
  Header,
  GlobalStyles,
  Content,
} from '~components';
import { initializeStorageData } from '~utils';

config({ ssrFadeout: true });

initializeStorageData();

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
      <Banners pathname={pathname} />
    </ThemeProvider>
  </ErrorBoundary>
);
