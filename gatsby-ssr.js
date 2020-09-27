/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { Layout } from 'antd';

import { CookieBanner, Header, GlobalStyles, ContentHolder } from '~components';
import { getItem } from '~utils';

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
