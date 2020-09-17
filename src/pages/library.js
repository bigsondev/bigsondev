import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, Space, Divider, Button, Badge, Rate } from 'antd';

import styled from 'styled-components';

import { Layout, SEO, Title, Paragraph, Text, Box } from '~components';
import { truncate } from '~utils';

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

const ResourceCard = styled.div({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',
  padding: 24,

  boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
});

const StartQuizButton = styled(Button)({
  position: 'relative',
  top: -4,
  borderRadius: 8,
});

const Resource = ({ title, desc, path, tags, difficulty }) => (
  <Link to={path}>
    <ResourceCard>
      <Space align="baseline" size="middle">
        <Title level={4} transform="capitalize">
          {title}
        </Title>
        <Badge status="default" text="Not Completed" />
      </Space>
      <Paragraph type="secondary">{truncate(desc, 50)}</Paragraph>
      <Paragraph>
        <Space>
          {tags.split(',').map((tag) => (
            <Text key={tag} transform="uppercase" code>
              {tag}
            </Text>
          ))}
        </Space>
      </Paragraph>
      <Row justify="center" gutter={[0, 16]}>
        <Col>
          <Rate value={difficulty} allowHalf disabled />
        </Col>
        <Col span={24}>
          <Button block>Start Coding</Button>
        </Col>
      </Row>
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
      <SEO title="Library" />
      <Title>Adrian, skyrocket your career</Title>
      <Divider />
      <Box mb={5} display="flex" justify="center">
        <Space>
          <Button
            type={filter === FILTERS.beginner ? 'primary' : 'secondary'}
            onClick={() => handleFilterChangeClick(FILTERS.beginner)}
          >
            Beginner
          </Button>
          <Button
            type={filter === FILTERS.junior ? 'primary' : 'secondary'}
            onClick={() => handleFilterChangeClick(FILTERS.junior)}
          >
            Junior
          </Button>
          <Button
            type={filter === FILTERS.regular ? 'primary' : 'secondary'}
            onClick={() => handleFilterChangeClick(FILTERS.regular)}
          >
            Regular
          </Button>
          <Button
            type={filter === FILTERS.senior ? 'primary' : 'secondary'}
            onClick={() => handleFilterChangeClick(FILTERS.senior)}
          >
            Senior
          </Button>
        </Space>
      </Box>
      <Box mb={2}>
        <Space size="large" align="baseline">
          <Title level={3} transform="capitalize">
            {filter} path
          </Title>
          <StartQuizButton type="primary" size="large">
            <Link to={quiz.path}>Start Quiz</Link>
          </StartQuizButton>
        </Space>
      </Box>
      <Row gutter={[16, 16]}>
        {challenges.map((challenge) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            xl={{ span: 8 }}
            key={challenge.title}
          >
            <Box>
              <Resource {...challenge} />
            </Box>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Library;
