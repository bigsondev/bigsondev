/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

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
  SEO,
  DirectionalLink,
} from '..';
import { NewsletterSmallForm } from './NewsletterSmallForm';
import { Footer } from './Footer';

const IconHolder = styled(Link)({
  color: '#FAFAFA !important',
  '& a': {
    color: '#FAFAFA !important',
  },
  '& a:hover': {
    color: '#FAFAFA !important',
  },
  '& a:active': {
    color: '#FAFAFA !important',
  },
  '& a:visited': {
    color: '#FAFAFA !important',
  },
});

const AuthorImage = styled.img({
  width: '8rem',
});

export const pageQuery = graphql`
  query BlogLayoutQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        desc
        readTime
        tags
        illustration
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;

const BlogLayout = ({
  data: {
    mdx: { frontmatter, body },
  },
  pageContext: { previous, next },
}) => {
  return (
    <>
      <SEO title={`Blog | ${frontmatter.title}`} />
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
                  about Adrian
                </Paragraph>
                <Paragraph
                  size="small"
                  fontStyle="italic"
                  align="center"
                  style={{ width: '50%' }}
                >
                  Frontend Mentor. My goal is to share knowledge effectively and
                  prepare you for the Frontend world in the best possible way.
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
                    Adrian - Frontend Mentor. My goal is to share knowledge
                    effectively and prepare you for the Frontend world in the
                    best possible way.
                  </Paragraph>
                </Box>
              </Box>
            </ExceptXl>
          </Col>
          <Col xs={22} xl={12}>
            <Box mb={10}>
              <main>
                <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
                <Box mt={10}>
                  <Row justify="space-between" gutter={[0, 16]}>
                    <Col xs={24} sm={12}>
                      {previous && (
                        <DirectionalLink left to={previous.fields.slug}>
                          Previous:{' '}
                          <span style={{ textTransform: 'capitalize' }}>
                            {previous.frontmatter.title}
                          </span>
                        </DirectionalLink>
                      )}
                    </Col>
                    <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
                      {next && (
                        <DirectionalLink right to={next.fields.slug}>
                          Next:{' '}
                          <span style={{ textTransform: 'capitalize' }}>
                            {next.frontmatter.title}
                          </span>
                        </DirectionalLink>
                      )}
                    </Col>
                  </Row>
                </Box>
              </main>
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
          <Col xs={22} xl={20} xxl={18}>
            <SlackBanner id="bigsondev-slack" />
          </Col>
          <Col xs={22} xl={20} xxl={18}>
            <Box margin="0 0 5rem 0">
              <PromoBanner
                title="spread the word"
                desc="Do you like this article? Share it with someone!"
                id="bigsondev-spread-the-word"
                content={
                  <Space size="small">
                    <IconHolder href={shareOnReddit(frontmatter.title)}>
                      <Icon type="reddit" width="3.125rem" />
                    </IconHolder>
                    <IconHolder href={shareOnTwitter(frontmatter.title)}>
                      <Icon type="twitter" width="3.125rem" />
                    </IconHolder>
                    <IconHolder href={shareOnFacebook()}>
                      <Icon type="facebook" width="3.125rem" />
                    </IconHolder>
                    <IconHolder href={shareOnLinkedin()}>
                      <Icon type="linkedin" width="3.125rem" />
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
