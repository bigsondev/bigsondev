import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, Space, Divider, Button, Rate } from 'antd';

import styled from 'styled-components';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  Text,
  Box,
  Icon,
  PromoBanner,
  CardButton,
  PromoButton,
  PromoBannerButton,
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

const ResourceCard = styled.div({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',
  position: 'relative',
  padding: 24,
  minHeight: 350,
  background: '#FFF',
  borderRadius: 8,

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const BottomHolder = styled.div({
  position: 'absolute',
  left: 0,
  bottom: 80,
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
      <Paragraph marginBottom="1rem">
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
      </Paragraph>
      <Title level={4} transform="capitalize">
        {title}
      </Title>
      <Paragraph type="secondary" size="preNormal">
        {truncate(desc)}
      </Paragraph>
      <BottomHolder>
        <Row justify="center" gutter={[0, 16]}>
          <Col>
            <RateHolder
              character={<Icon type="duck" />}
              value={difficulty}
              disabled
            />
          </Col>
        </Row>
      </BottomHolder>
      <CardButton>{buttonText}</CardButton>
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
      <Box mb={10}>
        <Paragraph align="center">
          To become a great Developer, <br />
          you have to code.
        </Paragraph>
      </Box>
      <Box mb={3}>
        <Title level={3} transform="capitalize" align="center">
          Projects
        </Title>
        <Paragraph size="preNormal" align="center">
          Code real-world projects based on assignment.
        </Paragraph>
      </Box>
      <Box mb={10}>
        <Row gutter={[24, 24]} justify="center">
          {projects.map((project) => (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              xl={{ span: 8 }}
              key={project.title}
            >
              <Box>
                <Resource buttonText="Start Project" {...project} />
              </Box>
            </Col>
          ))}
        </Row>
      </Box>
      <Box mb={1}>
        <Title level={3} transform="capitalize" align="center">
          Code Challenges
        </Title>
        <Paragraph align="center">
          <PromoButton size="small">
            <Link to={quiz.path}>Start Quiz</Link>
          </PromoButton>
        </Paragraph>
      </Box>
      <Box mb={3} display="flex" justify="center">
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
      <Row gutter={[24, 24]} justify="center">
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
      <Box margin="5rem 0 10rem 0">
        <PromoBanner
          color="promotion"
          title="Feeling a bit lost?"
          desc="I'll be more than happy to help you learn Frontend the right way."
          content={
            <Link to="/mentorship/#bigsondev-offer">
              <PromoBannerButton color="promotion">
                I WANT MENTORSHIP
              </PromoBannerButton>
            </Link>
          }
        />
      </Box>
    </Layout>
  );
};

export default Library;
