/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Layout, Row, Col } from 'antd';
import { useMedia } from 'react-media';

import { Paragraph, Box } from '..';
import { Header } from './Header';
import { ContentHolder } from './styled';
import { GlobalStyles } from './GlobalStyles';

const BlogLayout = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
}) => {
  const hideOnSmallScreen = useMedia({ query: '(max-width: 1200px)' });

  return (
    <Layout>
      <GlobalStyles />
      <Header />
      <ContentHolder>
        <Box mt={5}>
          <Row justify="center">
            {!hideOnSmallScreen && (
              <Col xl={{ span: 6 }}>
                <Paragraph align="center" transform="capitalize">
                  ABOUT ADRIAN
                </Paragraph>
              </Col>
            )}
            <Col xs={{ span: 22 }} md={{ span: 16 }} xl={{ span: 12 }}>
              <main>{children}</main>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Paragraph align="center" transform="capitalize">
                Newsletter
              </Paragraph>
            </Col>
          </Row>
        </Box>
      </ContentHolder>
      {/* TODO implement Footer */}
    </Layout>
  );
};

export default BlogLayout;
