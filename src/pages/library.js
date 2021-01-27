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
import {
  VegeLandingProject,
  BookCoverProject,
  TodoAppProject,
  RealtimeChatProject,
} from '~assets';

const RateHolder = styled(Rate)({
  '& .ant-rate-star-full path': {
    fill: '#F9B060',
  },
  '& .ant-rate-star-zero path': {
    fill: '#f0f0f0',
  },
});

export const query = graphql`
  query LibraryQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/library/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            type
            tags
            imagePath
            difficulty
            date(formatString: "MMM D")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const ResourceCard = styled(MainCard)({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const MarginTopAuto = styled.div({
  marginTop: 'auto',
});

const ResourceButton = styled(Button)({
  width: '100%',
});

const TAG_COLOR_MAPPER = {
  html: '#ffc069',
  css: '#91d5ff',
  js: '#ffec3d',
  react: '#61DAFB',
  express: '#43853D',
  'socket.io': '#000',
};

const PROJECTS_MAPPER = {
  'vege-landing': VegeLandingProject,
  'book-cover': BookCoverProject,
  'todo-app': TodoAppProject,
  'realtime-chat': RealtimeChatProject,
};

const Resource = ({
  title,
  desc,
  path,
  imagePath,
  tags,
  difficulty,
  buttonText,
}) => (
  <Link to={path}>
    <ResourceCard>
      <Row gutter={[0, 8]}>
        {tags && (
          <Col span={24}>
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
          </Col>
        )}
        <Col span={24}>
          <Title level={4} transform="capitalize">
            {title}
          </Title>
        </Col>
        {imagePath && (
          <Col span={24}>
            <Image
              src={PROJECTS_MAPPER[imagePath]}
              alt={desc}
              style={{ margin: '0 auto 1rem auto' }}
            />
          </Col>
        )}
        <Col span={24}>
          <Paragraph type="secondary" size="preNormal">
            {truncate(desc, 180)}
          </Paragraph>
        </Col>
      </Row>
      <MarginTopAuto>
        <Col span={24}>
          <Row justify="center" gutter={[0, 16]}>
            <Col>
              <RateHolder
                character={<Icon type="duck" width={24} />}
                value={difficulty}
                disabled
              />
            </Col>
          </Row>
        </Col>
        <ResourceButton type="primary">{buttonText}</ResourceButton>
      </MarginTopAuto>
    </ResourceCard>
  </Link>
);

const Library = ({
  data: {
    allMdx: { edges },
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
      ) => prevFrontmatter.difficulty - nextFrontmatter.difficulty
    );
  const tests = edges
    .filter(
      ({
        node: {
          frontmatter: { type },
        },
      }) => type === 'test'
    )
    .sort(
      (
        { node: { frontmatter: prevFrontmatter } },
        { node: { frontmatter: nextFrontmatter } }
      ) => prevFrontmatter.difficulty - nextFrontmatter.difficulty
    );

  return (
    <Layout>
      <SEO
        title="Library"
        desc="Practice With Projects, Coding Challenges, And Try Frontend Quiz"
        url="https://bigsondev.com/library/"
      />
      <Title level={2} align="center">
        Practice by building 👨‍💻
      </Title>
      <Paragraph align="center">
        To become a great Developer, <br />
        you have to code.
      </Paragraph>
      <Divider />
      <Box mb={3}>
        <Title level={3} transform="capitalize" align="center">
          Projects
        </Title>
      </Box>
      <Row gutter={[24, 24]} justify="center">
        {projects.map(
          ({
            node: {
              id,
              frontmatter,
              fields: { slug: path },
            },
          }) => (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 8 }} key={id}>
              <Resource
                buttonText="View project"
                path={path}
                {...frontmatter}
              />
            </Col>
          )
        )}
      </Row>
      <Divider />
      <Box mb={1}>
        <Title level={3} transform="none" align="center">
          Quizzes
        </Title>
      </Box>
      <Row gutter={[24, 24]} justify="center">
        {tests.map(({ node: { id, frontmatter, fields: { slug: path } } }) => (
          <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 8 }} key={id}>
            <Resource
              buttonText="View quiz"
              path={path}
              {...frontmatter}
              tags=""
            />
          </Col>
        ))}
      </Row>
      <Box margin="5rem 0">
        <SlackBanner />
      </Box>
    </Layout>
  );
};

export default Library;
