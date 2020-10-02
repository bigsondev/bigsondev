/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Layout } from 'antd';
import PageTransition from 'gatsby-plugin-page-transitions';

import 'highlight.js/styles/a11y-light.css';

// The following two imports is for the theme.
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/hint/show-hint.css';

// This import is for the language syntax highlighting.
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlembedded/htmlembedded.js';
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
  ErrorBoundary,
  Banners,
  Header,
  GlobalStyles,
  GlobalSpinner,
  ContentHolder,
  PromoSticker,
} from '~components';
import { initializeStorageData, getItem } from '~utils';

initializeStorageData();

export const onClientEntry = () => {
  document.getElementById('bigsondev-loader').style.display = 'block';
};

export const onRouteUpdateDelayed = () => {
  document.getElementById('bigsondev-loader').style.display = 'block';
};

export const onRouteUpdate = () => {
  document.getElementById('bigsondev-loader').style.display = 'none';
};

export const wrapPageElement = ({
  element,
  props: {
    location: { pathname },
  },
}) => (
  <ErrorBoundary>
    <GlobalStyles />
    <Layout>
      {getItem('firstPromoSticker') === 'false' && <PromoSticker />}
      <Header pathname={pathname} />
      <PageTransition>
        <GlobalSpinner />
        <ContentHolder>{element}</ContentHolder>
      </PageTransition>
    </Layout>
    <Banners pathname={pathname} />
  </ErrorBoundary>
);
