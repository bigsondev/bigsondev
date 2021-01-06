/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';

import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
} from '~utils';

import {
  SEO,
  SlackBanner,
  Box,
  PromoBanner,
  Link,
  DirectionalLink,
  Icon,
} from '..';
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

export const pageQuery = graphql`
  query PillsLayoutQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        desc
        tags
        type
        image
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;

const PillsLayout = ({
  data: {
    mdx: { frontmatter, body },
  },
  pageContext: { previous, next },
}) => {
  return (
    <>
      <SEO title={`Pills | ${frontmatter.title}`} />
      <Row justify="center" gutter={[0, 40]}>
        <Col xs={{ span: 22 }} md={{ span: 16 }} xl={{ span: 12 }}>
          <main>
            <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
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
          </main>
        </Col>
        <Col xs={22} xl={20} xxl={18}>
          <SlackBanner id="bigsondev-slack" />
        </Col>
        <Col xs={22} xl={20} xxl={18}>
          <Box margin="0 0 5rem 0">
            <PromoBanner
              title="spread the word"
              desc="Do you like this pill? Share it with someone!"
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
      <Footer />
    </>
  );
};

export default PillsLayout;
