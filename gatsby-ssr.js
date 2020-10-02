/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Layout } from 'antd';

import {
  Header,
  GlobalSpinner,
  GlobalStyles,
  Content,
  ErrorBoundary,
} from '~components';

export const wrapPageElement = ({
  element,
  props: {
    location: { pathname },
  },
}) => (
  <ErrorBoundary>
    <GlobalSpinner />
    <GlobalStyles />
    <Layout>
      <Header pathname={pathname} />
      <Content>{element}</Content>
    </Layout>
  </ErrorBoundary>
);
