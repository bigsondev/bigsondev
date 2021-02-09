import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, Space, Rate, Divider } from 'antd';

import styled from 'styled-components';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  Text,
  Box,
  Icon,
  SlackBanner,
  Button,
  MainCard,
  Image,
} from '~components';
import { truncate } from '~utils';

const RateHolder = styled(Rate)({
  '& .ant-rate-star-full path': {
    fill: '#F9B060',
  },
  '& .ant-rate-star-zero path': {
    fill: '#f0f0f0',
  },
});

export const query = graphql`
  query ProjectsQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            type
            icon
            tags
            imagePath
            difficulty
            order
            date(formatString: "MMM D")
          }
          fields {
            slug
          }
        }
      }
    }
    projectFiles: allFile(
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

const TAG_COLOR_MAPPER = {
  html: '#ffc069',
  css: '#91d5ff',
  js: '#ffec3d',
  react: '#73adf5',
  express: '#43853D',
  'socket.io': '#000',
};

const ResourceCard = styled(MainCard)({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const ProjectButton = styled(Button)({
  marginTop: 'auto',
});

const ProjectImage = styled(Image)({
  marginTop: '-3rem',
  marginLeft: '-3rem',
  marginBottom: '1rem',
  width: 'calc(100% + 6rem)',
});

const TitleHolder = styled.div({
  position: 'relative',
  paddingLeft: '4.5rem',
});

const IconHolder = styled(Icon)({
  position: 'absolute',
  left: 0,
});

const Project = ({ path, fluid, title, desc, icon, tags, difficulty }) => (
  <Link to={path}>
    <ResourceCard>
      <ProjectImage fluid={fluid} alt={title} />
      <Box margin="0 0 1.5rem 0">
        <TitleHolder>
          <IconHolder type={`${icon}Tag`} width={48} />
          <Title level={5} marginBottom="0" transform="capitalize">
            {title}
          </Title>
          <Space size="middle">
            {tags.split(',').map((tag) => (
              <Text
                key={tag}
                transform="uppercase"
                strong
                size="small"
                color={TAG_COLOR_MAPPER[tag.trim()]}
              >
                {tag}
              </Text>
            ))}
          </Space>
        </TitleHolder>
      </Box>
      <Paragraph size="preNormal" marginBottom="0">
        {truncate(desc, 150)}
      </Paragraph>
      <Box display="flex" justify="center" margin="1.5rem 0">
        <RateHolder
          character={<Icon type="duck" width={24} />}
          value={difficulty}
          disabled
        />
      </Box>
      <ProjectButton type="primary">View project</ProjectButton>
    </ResourceCard>
  </Link>
);

const Projects = ({
  data: {
    allMdx: { edges },
    projectFiles,
  },
}) => {
  const projects = edges
    .filter(
      ({
        node: {
          frontmatter: { type },
        },
      }) => type === 'project'
    )
    .sort(
      (
        { node: { frontmatter: prevFrontmatter } },
        { node: { frontmatter: nextFrontmatter } }
      ) => prevFrontmatter.order - nextFrontmatter.order
    );

  return (
    <Layout>
      <SEO
        title="Projects"
        desc="Get better at Frontend by building projects based on free, high-quality designs, share them and land on the wall of fame. Rinse and repeat."
        url="https://bigsondev.com/projects/"
      />
      <Title level={1} fontSize="2rem" align="center">
        Practice by building 👨‍💻
      </Title>
      <Paragraph align="center">
        To become a great Developer, <br />
        you have to code.
      </Paragraph>
      <Divider />
      <Row gutter={[24, 24]} justify="center">
        {projects.map(
          ({
            node: {
              id,
              frontmatter,
              fields: { slug: path },
            },
          }) => {
            const {
              node: {
                childImageSharp: { fluid },
              },
            } = projectFiles.edges.find(
              ({ node: { base } }) => base === frontmatter.imagePath
            );
            return (
              <Col xs={24} md={12} key={id}>
                <Project path={path} fluid={fluid} {...frontmatter} />
              </Col>
            );
          }
        )}
      </Row>
      <Box margin="5rem 0">
        <SlackBanner />
      </Box>
    </Layout>
  );
};

export default Projects;
