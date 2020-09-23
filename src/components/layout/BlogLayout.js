/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import styled from 'styled-components';
import { useMedia } from 'react-media';
import {
  TwitterSquareFilled,
  LinkedinFilled,
  FacebookFilled,
  RedditSquareFilled,
} from '@ant-design/icons';

import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
} from '~utils';

import { Paragraph, Box, PromoBanner, Link } from '..';
import { Header } from './Header';
import { ContentHolder } from './styled';
import { GlobalStyles } from './GlobalStyles';
import { Footer } from './Footer';

const IconHolder = styled(Link)({
  fontSize: '3.125rem',
  color: '#FFF !important',
  '& a': {
    color: '#FFF !important',
  },
  '& a:hover': {
    color: '#FFF !important',
  },
  '& a:active': {
    color: '#FFF !important',
  },
  '& a:visited': {
    color: '#FFF !important',
  },
});

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
              <Box mt={7}>
                <PromoBanner
                  title="spread the word"
                  desc="Did you like the article? Share it with someone!"
                  content={
                    <Space size="middle">
                      <IconHolder href={shareOnReddit()}>
                        <RedditSquareFilled />
                      </IconHolder>
                      <IconHolder href={shareOnTwitter(title)}>
                        <TwitterSquareFilled />
                      </IconHolder>
                      <IconHolder href={shareOnLinkedin()}>
                        <LinkedinFilled />
                      </IconHolder>
                      <IconHolder href={shareOnFacebook()}>
                        <FacebookFilled />
                      </IconHolder>
                    </Space>
                  }
                />
              </Box>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Paragraph align="center" transform="capitalize">
                Newsletter
              </Paragraph>
            </Col>
          </Row>
        </Box>
      </ContentHolder>
      <Footer />
    </Layout>
  );
};

export default BlogLayout;
