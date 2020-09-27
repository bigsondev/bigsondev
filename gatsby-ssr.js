/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Layout } from 'antd';
import 'highlight.js/styles/a11y-light.css';

// The following two imports is for the theme.
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/hint/show-hint.css';

import { CookieBanner, Header, GlobalStyles, ContentHolder } from '~components';
import { initializeStorageData, getItem } from '~utils';

initializeStorageData();

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout>
      <Header />
      <ContentHolder>{element}</ContentHolder>
    </Layout>
    {getItem('cookiesAcknowledged') === false && <CookieBanner />}
  </>
);
