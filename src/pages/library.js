import React, { useState } from 'react';
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
} from '~components';
import { truncate } from '~utils';

const RateHolder = styled(Rate)({
  '& .ant-rate-star-full path': {
    fill: '#fff566',
  },
  '& .ant-rate-star-zero path': {
    fill: '#f0f0f0',
  },
});

export const query = graphql`
  query LibraryQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/mdx/library/" } }) {
      edges {
        node {
          frontmatter {
            title
            desc
            path
            type
            tags
            order
            difficulty
            date(formatString: "MMM D")
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
  ['socket.io']: '#000',
};

const Resource = ({
  title,
  desc,
  path,
  tags,
  difficulty,
  buttonText = 'Start Coding',
}) => (
  <Link to={path}>
    <ResourceCard>
      <Row gutter={[0, 8]}>
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
        <Col span={24}>
          <Title level={4} transform="capitalize">
            {title}
          </Title>
        </Col>
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
                character={<Icon type="duck" />}
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

const FILTERS = {
  beginner: 'beginner',
  junior: 'junior',
  regular: 'regular',
  senior: 'senior',
};

const Library = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const [filter, setFilter] = useState(FILTERS.beginner);

  const handleFilterChangeClick = (value) => {
    setFilter(value);
  };

  const projects = edges
    .filter(
      ({
        node: {
          frontmatter: { type },
        },
      }) => type === 'project'
    )
    .map(({ node: { frontmatter } }) => frontmatter)
    .sort(
      ({ order: prevOrder }, { order: nextOrder }) => prevOrder - nextOrder
    );

  const [quiz, ...challenges] = edges
    .filter(
      ({
        node: {
          frontmatter: { type },
        },
      }) => type === filter
    )
    .map(({ node: { frontmatter } }) => frontmatter)
    .sort(
      ({ order: prevOrder }, { order: nextOrder }) => prevOrder - nextOrder
    );

  return (
    <Layout>
      <SEO title="Library | Practice With Projects, Coding Challenges, And Try Frontend Quiz" />
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
        {projects.map((project) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            xl={{ span: 8 }}
            key={project.title}
          >
            <Resource buttonText="Start Project" {...project} />
          </Col>
        ))}
      </Row>
      <Divider />
      <Box mb={1}>
        <Title level={3} transform="capitalize" align="center">
          Code Challenges
        </Title>
        <Paragraph align="center">
          <Link to={quiz.path}>
            <Button type="promo">Start Quiz</Button>
          </Link>
        </Paragraph>
      </Box>
      <Box mb={3}>
        <Row gutter={[8, 16]} justify="center">
          <Col>
            <Button
              type={filter === FILTERS.beginner ? 'primary' : 'secondary'}
              onClick={() => handleFilterChangeClick(FILTERS.beginner)}
            >
              Beginner
            </Button>
          </Col>
          <Col>
            <Button
              type={filter === FILTERS.junior ? 'primary' : 'secondary'}
              onClick={() => handleFilterChangeClick(FILTERS.junior)}
            >
              Junior
            </Button>
          </Col>
          <Col>
            <Button
              type={filter === FILTERS.regular ? 'primary' : 'secondary'}
              onClick={() => handleFilterChangeClick(FILTERS.regular)}
            >
              Regular
            </Button>
          </Col>
          <Col>
            <Button
              type={filter === FILTERS.senior ? 'primary' : 'secondary'}
              onClick={() => handleFilterChangeClick(FILTERS.senior)}
            >
              Senior
            </Button>
          </Col>
        </Row>
      </Box>
      <Row gutter={[24, 24]} justify="center">
        {challenges.map((challenge) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            xl={{ span: 8 }}
            key={challenge.title}
          >
            <Resource {...challenge} />
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
