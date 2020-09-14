import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, Space, Divider, Tooltip } from 'antd';
import styled from 'styled-components';
import {
  CalendarOutlined,
  FieldTimeOutlined,
  ArrowRightOutlined,
  CodeSandboxOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

import { Layout, SEO, Title, Paragraph, Text, Box } from '~components';
import { truncate } from '~utils';

export const query = graphql`
  query BlogQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/mdx/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            desc
            path
            hasKnowledgePill
            hasTodoList
            readTime
            tags
            date(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const ArticleCard = styled.div({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',
  position: 'relative',
  padding: 24,
  minHeight: 400,

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const ArrowIcon = styled(ArrowRightOutlined)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  fontSize: 24,
  padding: 24,
  display: 'block',
});

const KnowledgePillIcon = styled(CodeSandboxOutlined)({
  fontSize: 24,
  color: '#000',
});

const TodoListIcon = styled(UnorderedListOutlined)({
  fontSize: 24,
  color: '#000',
});

const Article = ({
  title,
  desc,
  path,
  hasKnowledgePill,
  hasTodoList,
  readTime,
  tags,
  date,
}) => (
  <Link to={path}>
    <ArticleCard>
      <Box mb={1}>
        <Row justify="space-between">
          <Col>
            <Space size="middle">
              <Text size="micro" type="secondary">
                <Space>
                  <CalendarOutlined />
                  <span>{date}</span>
                </Space>
              </Text>
              <Text size="micro" type="secondary">
                <Space>
                  <FieldTimeOutlined />
                  <span>{readTime} min read</span>
                </Space>
              </Text>
            </Space>
          </Col>
          <Col>
            <Space size="large">
              {hasKnowledgePill && (
                <Tooltip title="Article contains Knowledge Pill to help you find information quicker">
                  <KnowledgePillIcon />
                </Tooltip>
              )}
              {hasTodoList && (
                <Tooltip title="Article contains Todo List to let you practice the theory">
                  <TodoListIcon />
                </Tooltip>
              )}
            </Space>
          </Col>
        </Row>
      </Box>
      <Title level={4} transform="capitalize">
        {title}
      </Title>
      <Paragraph type="secondary">{truncate(desc)}</Paragraph>
      <Space size="middle">
        {tags.split(',').map((tag) => (
          <Text size="micro" transform="capitalize" key={tag} code>
            {tag}
          </Text>
        ))}
      </Space>
      <ArrowIcon />
    </ArticleCard>
  </Link>
);

const Blog = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Box ml={3}>
        <Title>Latest Articles</Title>
        <Divider />
      </Box>
      <Row gutter={[16, 16]}>
        {edges.map(({ node: { frontmatter } }) => (
          <Col span={8} key={frontmatter.title}>
            <Article {...frontmatter} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Blog;
