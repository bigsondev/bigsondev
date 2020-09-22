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

const IconHolder = styled(Link)({
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
              <Box mt={5}>
                <PromoBanner
                  title="spread the word"
                  desc="Did you like the article? Share it with someone!"
                  content={
                    <Space size="middle">
                      <IconHolder href={shareOnReddit()}>
                        <RedditSquareFilled style={{ fontSize: 50 }} />
                      </IconHolder>
                      <IconHolder href={shareOnTwitter(title)}>
                        <TwitterSquareFilled style={{ fontSize: 50 }} />
                      </IconHolder>
                      <IconHolder href={shareOnLinkedin()}>
                        <LinkedinFilled style={{ fontSize: 50 }} />
                      </IconHolder>
                      <IconHolder href={shareOnFacebook()}>
                        <FacebookFilled style={{ fontSize: 50 }} />
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
      {/* TODO implement Footer */}
    </Layout>
  );
};

export default BlogLayout;
