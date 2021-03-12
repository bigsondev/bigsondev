/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col, Space, Divider, Breadcrumb as AntdBreadcrumb } from 'antd';
import styled from 'styled-components';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { BLOG_POST_IMAGES, PILLS_IMAGES } from '~assets';
import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
  truncate,
} from '~utils';

import { useCarbonAds } from '../hooks';

import {
  Paragraph,
  Box,
  PromoBanner,
  Text,
  Link,
  Icon,
  XlOnly,
  LgOnly,
  ExceptLg,
  SlackBanner,
  ExceptXl,
  SEO,
  DirectionalLink,
  Image,
  theme,
  TwitterFollowButton,
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

const Breadcrumb = styled(AntdBreadcrumb)({
  marginBottom: '0.5rem',
  fontSize: '1rem',
});

const BreadcrumbItem = styled(AntdBreadcrumb.Item)({
  '& > a': {
    color: '#000',
  },
});

const AdrianImageHolder = styled(Image)({
  width: '8rem',
  transition: 'all .3s',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const DuckImageHolder = styled(Image)({
  width: '10rem',
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

const DesktopAdHolder = styled.span({
  margin: '1.25rem',
});

const MobileAdHolder = styled.div({
  marginTop: '1.5rem',

  '& #carbonads': {
    margin: '0',
  },
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
        imagePath
        imageSource
        imageSourceLink
        imageAuthorName
        imageAuthorLink
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
    frontendUnicornTall: file(base: { eq: "tall.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    frontendUnicornWide: file(base: { eq: "wide.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    adrianImage: file(base: { eq: "adrian-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    duckSmallNewsletter: file(base: { eq: "duck-small-newsletter.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
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
    adrianImage,
    duckSmallNewsletter,
    frontendUnicornTall: {
      childImageSharp: { fluid: affiliateTallFluid },
    },
    frontendUnicornWide: {
      childImageSharp: { fluid: affiliateWideFluid },
    },
  },
  pageContext: { previous, next },
}) => {
  useCarbonAds();
  const exceptXl =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 1199px)').matches;
  const xlOnly =
    typeof window !== 'undefined' &&
    window.matchMedia('(min-width: 1200px)').matches;
  const isBlogPost = slug.includes('/blog/');
  const feedLink = isBlogPost
    ? 'https://bigsondev.com/blog/rss.xml'
    : 'https://bigsondev.com/pills/rss.xml';

  const {
    node: {
      childImageSharp: { fluid },
    },
  } = isBlogPost
    ? blogFiles.edges.find(
        ({ node: { base } }) => base === frontmatter.imagePath
      )
    : pillsFiles.edges.find(
        ({ node: { base } }) => base === frontmatter.imagePath
      );
  const url = `https://bigsondev.com${slug}`;

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO
        title={`${frontmatter.title}`}
        desc={frontmatter.desc}
        url={url}
        type="article"
        image={
          isBlogPost
            ? BLOG_POST_IMAGES[frontmatter.imagePath]
            : PILLS_IMAGES[frontmatter.imagePath]
        }
      />
      <Row justify="center" gutter={[0, 40]}>
        <Col xs={22} xl={6}>
          <XlOnly>
            <Box display="flex" align="center" direction="column">
              <Paragraph marginBottom="0">
                <GatsbyLink to="/#bigsondev-who-i-am">
                  <AdrianImageHolder
                    fluid={adrianImage.childImageSharp.fluid}
                    alt="Image represents Adrian - Frontend Mentor"
                  />
                </GatsbyLink>
              </Paragraph>
              <Paragraph
                size="small"
                align="center"
                style={{ width: '80%' }}
                marginBottom="0"
              >
                Obsessed with React and teaching. I help people become Frontend
                Developers. Living with my fiancee and Yorkshire Terrier 🐶 in
                Poland. <br />
                <GatsbyLink to="/mentorship/">Discover Mentorship</GatsbyLink>
              </Paragraph>
              <Paragraph marginBottom="1rem">
                <Link href={feedLink}>
                  <Icon type="rss" />
                </Link>
              </Paragraph>
              <Paragraph marginBottom="0">
                <TwitterFollowButton
                  twitterAccount="@BigsonDev"
                  showName={true}
                  showCount={true}
                />
              </Paragraph>
              {xlOnly && <DesktopAdHolder id="bigsondev-ad-holder" />}
            </Box>
          </XlOnly>
          <ExceptXl>
            <Row>
              <Col xs={4} sm={4}>
                <GatsbyLink to="/#bigsondev-who-i-am">
                  <AdrianImageHolder
                    fluid={adrianImage.childImageSharp.fluid}
                    alt="Image represents Adrian - Frontend Mentor"
                    style={{ width: '10rem' }}
                  />
                </GatsbyLink>
              </Col>
              <Col xs={24} md={21}>
                <Paragraph size="small" marginBottom="1rem">
                  Obsessed with React and teaching. I help people become
                  Frontend Developers. Living with my fiancee and Yorkshire
                  Terrier 🐶 in Poland.
                  <br />
                  <Box margin="0.5rem 0 0 0">
                    <GatsbyLink to="/mentorship/">
                      Discover Mentorship
                    </GatsbyLink>
                  </Box>
                </Paragraph>
                <Paragraph marginBottom="0">
                  <TwitterFollowButton
                    twitterAccount="@BigsonDev"
                    showName={true}
                    showCount={true}
                  />
                </Paragraph>
                {exceptXl && <MobileAdHolder id="bigsondev-mobile-ad-holder" />}
              </Col>
            </Row>
          </ExceptXl>
        </Col>
        <Col xs={22} xl={12}>
          <main>
            <LgOnly>
              <Breadcrumb>
                <BreadcrumbItem>
                  <GatsbyLink to="/">Home</GatsbyLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <GatsbyLink to={isBlogPost ? '/blog/' : '/pills/'}>
                    {isBlogPost ? 'Blog' : 'Pills'}
                  </GatsbyLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Text size="small" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
                    {' '}
                    {isBlogPost ? 'Article - ' : 'Pill - '} {frontmatter.title}
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
                  <GatsbyLink to={isBlogPost ? '/blog/' : '/pills/'}>
                    {isBlogPost ? 'Blog' : 'Pills'}
                  </GatsbyLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Text size="small" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
                    {isBlogPost ? 'Article - ' : 'Pill - '}
                    {truncate(frontmatter.title, isBlogPost ? 15 : 20)}
                  </Text>
                </BreadcrumbItem>
              </Breadcrumb>
            </ExceptLg>
            {isBlogPost && (
              <ImageHolder>
                <Image fluid={fluid} alt={frontmatter.title} />
                <ImageCredit>
                  <Paragraph size="small" color={colors.white}>
                    Image by{' '}
                    <Link
                      size="small"
                      href={frontmatter.imageAuthorLink}
                      strong
                    >
                      {frontmatter.imageAuthorName}
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
        </Col>
        <Col xs={22} xl={6}>
          <Box display="flex" align="center" direction="column">
            <Paragraph marginBottom="0">
              <DuckImageHolder
                fluid={duckSmallNewsletter.childImageSharp.fluid}
                alt="Image represents yellow debugging duck"
              />
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
            <Paragraph style={{ width: '70%' }}>
              <NewsletterSmallForm />
            </Paragraph>
          </Box>
        </Col>
        <Col xs={22} xl={20} xxl={18}>
          <SlackBanner id="bigsondev-slack" />
        </Col>
        <Col xs={22} xl={20} xxl={18}>
          <Box margin="0 0 3rem 0">
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
      <Footer />
    </div>
  );
};

export default BlogLayout;
