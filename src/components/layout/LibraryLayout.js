/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Layout, Row, Col } from 'antd';

import { Header } from './Header';
import { ContentHolder } from './styled';
import { GlobalStyles } from './GlobalStyles';

const LibraryLayout = ({ children }) => {
  return (
    <Layout>
      <GlobalStyles />
      <Header />
      <ContentHolder>
        <Row justify="center">
          <Col xs={{ span: 22 }} md={{ span: 16 }} xl={{ span: 12 }}>
            <main>{children}</main>
          </Col>
        </Row>
      </ContentHolder>
    </Layout>
  );
};

export default LibraryLayout;
