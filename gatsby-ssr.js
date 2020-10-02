/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Layout } from 'antd';
import PageTransition from 'gatsby-plugin-page-transitions';

import {
  Header,
  GlobalSpinner,
  GlobalStyles,
  ContentHolder,
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
      <PageTransition>
        <ContentHolder>{element}</ContentHolder>
      </PageTransition>
    </Layout>
  </ErrorBoundary>
);
