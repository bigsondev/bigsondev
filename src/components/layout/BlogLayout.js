/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';

import { AdrianImage } from '~assets';
import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
} from '~utils';

import {
  Paragraph,
  Box,
  PromoBanner,
  Link,
  Icon,
  Illustration,
  XlOnly,
  SlackBanner,
  ExceptXl,
} from '..';
import { NewsletterSmallForm } from './NewsletterSmallForm';
import { Footer } from './Footer';

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

const AuthorImage = styled.img({
  width: '8rem',
});

const BlogLayout = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
}) => {
  return (
    <>
      <Box mt={5}>
        <Row justify="center" gutter={[0, 40]}>
          <Col xs={22} xl={6}>
            <XlOnly>
              <Box display="flex" align="center" direction="column">
                <Paragraph>
                  <AuthorImage
                    src={AdrianImage}
                    alt="Image represents Adrian"
                  />
                </Paragraph>
                <Paragraph transform="uppercase" size="preNormal" strong>
                  about me
                </Paragraph>
                <Paragraph
                  size="small"
                  fontStyle="italic"
                  align="center"
                  style={{ width: '50%' }}
                >
                  Frontend Developer, Recruiter & Mentor. With 12 years of
                  experience in all these areas, my goal is to share knowledge
                  effectively and prepare you for the Frontend world in the best
                  possible way.
                </Paragraph>
              </Box>
            </XlOnly>
            <ExceptXl>
              <Box display="flex" align="center">
                <Paragraph>
                  <AuthorImage
                    src={AdrianImage}
                    alt="Image represents Adrian"
                  />
                </Paragraph>
                <Box margin="0 0 0 2rem">
                  <Paragraph size="small" fontStyle="italic">
                    Frontend Developer, Recruiter & Mentor. With 12 years of
                    experience in all these areas, my goal is to share knowledge
                    effectively and prepare you for the Frontend world in the
                    best possible way.
                  </Paragraph>
                </Box>
              </Box>
            </ExceptXl>
          </Col>
          <Col xs={22} xl={12}>
            <Box mb={10}>
              <main>{children}</main>
            </Box>
          </Col>
          <Col xs={22} xl={6}>
            <Box display="flex" align="center" direction="column">
              <Paragraph>
                <Illustration type="newsletterSmall" width="10rem" />
              </Paragraph>
              <Paragraph
                transform="uppercase"
                align="center"
                size="preNormal"
                strong
                style={{ width: '70%' }}
              >
                THE GUIDE TO BEAT FRONTEND INTERVIEW
              </Paragraph>
              <Paragraph align="center" style={{ width: '70%' }}>
                <Box margin="1rem 0 0 0">
                  <NewsletterSmallForm />
                </Box>
              </Paragraph>
            </Box>
          </Col>
          <Col xs={22} xl={20} xxl={16}>
            <SlackBanner />
          </Col>
          <Col xs={22} xl={20} xxl={16}>
            <Box margin="0 0 3rem 0">
              <PromoBanner
                title="spread the word"
                desc="Do you like this article? Share it with someone!"
                content={
                  <Space size="small">
                    <IconHolder href={shareOnReddit()}>
                      <Icon type="reddit" width="3.125rem" />
                    </IconHolder>
                    <IconHolder href={shareOnTwitter(title)}>
                      <Icon type="twitter" width="3.125rem" />
                    </IconHolder>
                    <IconHolder href={shareOnLinkedin()}>
                      <Icon type="linkedin" width="3.125rem" />
                    </IconHolder>
                    <IconHolder href={shareOnFacebook()}>
                      <Icon type="facebook" width="3.125rem" />
                    </IconHolder>
                  </Space>
                }
              />
            </Box>
          </Col>
        </Row>
      </Box>
      <Footer />
    </>
  );
};

export default BlogLayout;
