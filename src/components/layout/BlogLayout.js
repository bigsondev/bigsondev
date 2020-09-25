/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import styled from 'styled-components';
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

const ParagraphHolder = styled(Paragraph)({
  '@media (min-width: 1200px)': {
    textAlign: 'center',
  },
  '@media (max-width: 1199px)': {
    textAlign: 'left',
  },
});

const BlogLayout = ({
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
        <Box mt={5}>
          <Row justify="center" gutter={[0, 24]}>
            <Col xs={22} xl={6}>
              <ParagraphHolder transform="capitalize">
                ABOUT ADRIAN
              </ParagraphHolder>
            </Col>
            <Col xs={22} md={22} xl={12}>
              <main>{children}</main>
              <Box mt={7}>
                <PromoBanner
                  title="spread the word"
                  desc="Do you like this article? Share it with someone!"
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
            <Col xs={22} xl={6}>
              <ParagraphHolder transform="capitalize">
                Newsletter
              </ParagraphHolder>
            </Col>
          </Row>
        </Box>
      </ContentHolder>
      <Footer />
    </Layout>
  );
};

export default BlogLayout;
