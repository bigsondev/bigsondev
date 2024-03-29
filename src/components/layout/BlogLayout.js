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
import { BdsLogoImage } from '~assets/logo';
import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
  truncate,
} from '~utils';

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
  ExceptXl,
  SEO,
  DirectionalLink,
  Image,
  theme,
  TwitterFollowButton,
  Illustration,
  Title,
  Button,
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
    adrianImage: file(base: { eq: "adrian-image.png" }) {
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
  },
  pageContext: { previous, next },
}) => {
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
        <Col xs={22} xl={5}>
          <XlOnly>
            <Box display="flex" align="center" direction="column">
              <Paragraph marginBottom="0">
                <GatsbyLink to="/#bigsondev-who-i-am">
                  <AdrianImageHolder
                    fluid={adrianImage.childImageSharp.fluid}
                    alt="Image represents Adrian"
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
            </Box>
          </XlOnly>
          <ExceptXl>
            <Row>
              <Col xs={4} sm={4}>
                <GatsbyLink to="/#bigsondev-who-i-am">
                  <AdrianImageHolder
                    fluid={adrianImage.childImageSharp.fluid}
                    alt="Image represents Adrian"
                    style={{ width: '10rem' }}
                  />
                </GatsbyLink>
              </Col>
              <Col xs={24} md={21}>
                <Paragraph size="small" marginBottom="1rem">
                  Obsessed with React and teaching. I help people become
                  Frontend Developers. Living with my fiancee and Yorkshire
                  Terrier 🐶 in Poland.
                </Paragraph>
                <Paragraph marginBottom="0">
                  <TwitterFollowButton
                    twitterAccount="@BigsonDev"
                    showName={true}
                    showCount={true}
                  />
                </Paragraph>
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
        <Col xs={22} xl={7}>
          <Box
            borderRadius="8px"
            p={4}
            mt={3.75}
            margin="0 auto"
            background="#E9D8FD"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="90%"
          >
            <Space
              size="large"
              direction="vertical"
              align="center"
              justify="center"
            >
              <img
                src={BdsLogoImage}
                alt="logo with a rocket of the BigDevSoon application"
              />
              <Illustration type="bdsProjects" />
              <Title level={3} align="center">
                Level up your Frontend skills
              </Title>
              <Paragraph align="center" strong>
                Code real-world projects based on Figma designs.
              </Paragraph>
              <Link href="https://bigdevsoon.me/">
                <Button type="promo">Change your career</Button>
              </Link>
            </Space>
          </Box>
        </Col>
        <Col xs={22} xl={20} xxl={18}>
          <Box margin="0 0 3rem 0">
            <PromoBanner
              title="spread the word"
              desc="Did you like this post? Share it with the world! 🌐"
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
