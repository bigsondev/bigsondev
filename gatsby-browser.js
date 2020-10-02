/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Layout } from 'antd';

import {
  ErrorBoundary,
  Banners,
  Header,
  GlobalStyles,
  ContentHolder,
  PromoSticker,
} from '~components';
import { initializeStorageData, getItem } from '~utils';

initializeStorageData();

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
      <ContentHolder>{element}</ContentHolder>
    </Layout>
    <Banners pathname={pathname} />
  </ErrorBoundary>
);
