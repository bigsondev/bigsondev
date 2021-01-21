/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col, Space, Divider } from 'antd';
import styled from 'styled-components';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { AdrianImage, BLOG_POST_IMAGES, PILLS_IMAGES } from '~assets';
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
  Image,
  theme,
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

const AdrianImageHolder = styled.img({
  width: '8rem',
});

const ImageHolder = styled.div({
  position: 'relative',

  '& > figure': {
    margin: '0 auto 1rem auto',
  },
});

const ImageCredit = styled.div({
  position: 'absolute',
  bottom: '-1.75rem',
  left: '0.25rem',
});

const DividerHolder = styled(Divider)({
  margin: '0.5rem 0',
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
        image
        imageSource
        imageSourceLink
        author
        authorLink
        difficulty
        date(formatString: "MMM D, YYYY")
      }
      fields {
        slug
      }
    }
    blogFiles: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "blog" }
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
    pillsFiles: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "pills" }
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

const { colors } = theme;

const BlogLayout = ({
  data: {
    mdx: {
      frontmatter,
      body,
      fields: { slug },
    },
    blogFiles,
    pillsFiles,
  },
  pageContext: { previous, next },
}) => {
  const isBlogPost = slug.includes('/blog/');

  const {
    node: {
      childImageSharp: { fluid },
    },
  } = isBlogPost
    ? blogFiles.edges.find(({ node: { base } }) => base === frontmatter.image)
    : pillsFiles.edges.find(({ node: { base } }) => base === frontmatter.image);

  return (
    <>
      <SEO
        title={`Blog | ${frontmatter.title}`}
        image={
          isBlogPost
            ? BLOG_POST_IMAGES[frontmatter.image]
            : PILLS_IMAGES[frontmatter.image]
        }
      />
      <Box mt={5}>
        <Row justify="center" gutter={[0, 40]}>
          <Col xs={22} xl={6}>
            <XlOnly>
              <Box display="flex" align="center" direction="column">
                <Paragraph>
                  <AdrianImageHolder
                    src={AdrianImage}
                    alt="Image represents Adrian - Frontend Mentor"
                  />
                </Paragraph>
                <Paragraph transform="uppercase" size="preNormal" strong>
                  <GatsbyLink to="/#bigsondev-technologies">about</GatsbyLink>
                </Paragraph>
                <Paragraph
                  size="small"
                  fontStyle="italic"
                  align="center"
                  style={{ width: '50%' }}
                >
                  My goal is to share knowledge effectively and prepare you for
                  the Frontend world in the best possible way -{' '}
                  <GatsbyLink to="/mentorship/">
                    discover Mentorship.
                  </GatsbyLink>
                </Paragraph>
              </Box>
            </XlOnly>
            <ExceptXl>
              <Box display="flex" align="center">
                <Paragraph>
                  <AdrianImageHolder
                    src={AdrianImage}
                    alt="Image represents Adrian - Frontend Mentor"
                  />
                </Paragraph>
                <Box margin="0 0 0 2rem">
                  <Paragraph size="small" fontStyle="italic">
                    My goal is to share knowledge effectively and prepare you
                    for the Frontend world in the best possible way -{' '}
                    <GatsbyLink to="/mentorship/">
                      discover Mentorship.
                    </GatsbyLink>
                  </Paragraph>
                </Box>
              </Box>
            </ExceptXl>
          </Col>
          <Col xs={22} xl={12}>
            <Box mb={10}>
              <main>
                {isBlogPost && (
                  <ImageHolder>
                    <Image fluid={fluid} alt={frontmatter.title} />
                    <ImageCredit>
                      <Paragraph size="small" color={colors.white}>
                        Image by{' '}
                        <Link size="small" href={frontmatter.authorLink} strong>
                          {frontmatter.author}
                        </Link>{' '}
                        from{' '}
                        <Link
                          size="small"
                          href={frontmatter.imageSourceLink}
                          strong
                        >
                          {frontmatter.imageSource}
                        </Link>
                      </Paragraph>
                    </ImageCredit>
                  </ImageHolder>
                )}
                <MDXRenderer frontmatter={frontmatter} fluid={fluid}>
                  {body}
                </MDXRenderer>
                <Box mt={isBlogPost ? 5 : 1}>
                  <Row justify="space-between" gutter={[0, 16]}>
                    <Col xs={24} sm={12}>
                      {previous && (
                        <DirectionalLink left to={previous.fields.slug}>
                          <DividerHolder />
                          <span style={{ textTransform: 'capitalize' }}>
                            {previous.frontmatter.title}
                          </span>
                        </DirectionalLink>
                      )}
                    </Col>
                    <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
                      {next && (
                        <DirectionalLink right to={next.fields.slug}>
                          <DividerHolder />
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
                desc="You don't need to, it's okay..."
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
