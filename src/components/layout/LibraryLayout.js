/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Layout, Row, Col } from 'antd';

import { BackButton } from '..';
import { Header } from './Header';
import { ContentHolder } from './styled';
import { GlobalStyles } from './GlobalStyles';

const LibraryLayout = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
}) => {
  return (
    <Layout>
      <GlobalStyles />
      <Header />
      <ContentHolder>
        <Row justify="center">
          <Col xs={{ span: 22 }} md={{ span: 12 }} xxl={{ span: 10 }}>
            <BackButton to="/library" />
            <main>{children}</main>
          </Col>
        </Row>
      </ContentHolder>
      {/* TODO implement Footer */}
    </Layout>
  );
};

export default LibraryLayout;
