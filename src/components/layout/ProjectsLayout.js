/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Row, Col, Space, Breadcrumb as AntdBreadcrumb } from 'antd';
import styled from 'styled-components';

import { PROJECTS_IMAGES } from '~assets';
import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
  truncate,
} from '~utils';

import { SEO, Box, Link, PromoBanner, Icon, LgOnly, ExceptLg, Text } from '..';
import { Footer } from './Footer';

const Breadcrumb = styled(AntdBreadcrumb)({
  marginBottom: '0.5rem',
  fontSize: '1rem',
});

const BreadcrumbItem = styled(AntdBreadcrumb.Item)({
  '& > a': {
    color: '#000',
  },
});

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
  query ProjectsLayoutQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        desc
        type
        icon
        tags
        bdsLink
        designLink
        isLegacy
        imagePath
        difficulty
        order
        date(formatString: "MMM D")
      }
      fields {
        slug
      }
    }
    projectsFiles: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "projects" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const ProjectsLayout = ({
  data: {
    mdx: {
      frontmatter,
      body,
      fields: { slug },
    },
    projectsFiles,
  },
}) => {
  const {
    node: {
      childImageSharp: { fluid },
    },
  } = projectsFiles.edges.find(
    ({ node: { base } }) => base === frontmatter.imagePath
  );
  const url = `https://bigsondev.com${slug}`;

  return (
    <>
      <SEO
        title={`${frontmatter.title}`}
        desc={frontmatter.desc}
        url={url}
        type="article"
        image={PROJECTS_IMAGES[frontmatter.imagePath]}
      />
      <Row justify="center" gutter={[0, 0]}>
        <Col xs={{ span: 22 }} xl={{ span: 20 }} xxl={{ span: 18 }}>
          <main>
            <LgOnly>
              <Breadcrumb>
                <BreadcrumbItem>
                  <GatsbyLink to="/">Home</GatsbyLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <GatsbyLink to="/projects/">Projects</GatsbyLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Text size="small" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
                    {' '}
                    Project - {frontmatter.title}
                  </Text>
                </BreadcrumbItem>
              </Breadcrumb>
            </LgOnly>
            <ExceptLg>
              <Breadcrumb>
                <BreadcrumbItem>
                  <GatsbyLink to="/">Home</GatsbyLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <GatsbyLink to="/projects/">Projects</GatsbyLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Text size="small" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
                    Project - {truncate(frontmatter.title, 20)}
                  </Text>
                </BreadcrumbItem>
              </Breadcrumb>
            </ExceptLg>
            <MDXRenderer frontmatter={frontmatter} fluid={fluid} slug={slug}>
              {body}
            </MDXRenderer>
          </main>
        </Col>
        <Col xs={22} xl={20} xxl={18}>
          <Box margin="1.5rem 0 3rem 0">
            <PromoBanner
              title="spread the word"
              desc="Do you think this project is cool? Share it with someone! 👀"
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

export default ProjectsLayout;
