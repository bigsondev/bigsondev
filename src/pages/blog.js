import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, Space, Divider, Tooltip } from 'antd';
import styled from 'styled-components';
import {
  CalendarOutlined,
  FieldTimeOutlined,
  SlackOutlined,
} from '@ant-design/icons';
import moment from 'moment';

import { SlackForm } from '~modules/blog';
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
} from '~components';
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
            hasCheatSheet
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
  minHeight: 450,
  border: '1px solid #d6e4ff',
  borderRadius: 8,

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const Article = ({
  title,
  desc,
  path,
  hasCheatSheet,
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
                  <span>{moment(date).format('MMM D')}</span>
                </Space>
              </Text>
              <Text size="micro" type="secondary">
                <Space>
                  <FieldTimeOutlined />
                  <span>{readTime} min</span>
                </Space>
              </Text>
            </Space>
          </Col>
          <Col>
            <Space size="large">
              {hasCheatSheet && (
                <Tooltip title="Article contains Cheat Sheet to help you find information quicker. For a complete knowledge, please read the full article">
                  <Icon type="cheatSheet" width={24} />
                </Tooltip>
              )}
              {hasTodoList && (
                <Tooltip title="Article contains Homework to let you practice the theory">
                  <Icon type="homework" width={24} />
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
      <Row>
        <Col span={24}>
          <Space size="middle">
            {tags.split(',').map((tag) => (
              <Text size="micro" transform="capitalize" key={tag} code>
                {tag}
              </Text>
            ))}
          </Space>
        </Col>
      </Row>
      <CardButton>read more</CardButton>
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
      <Title level={2}>Latest Articles</Title>
      <Divider />
      <Row gutter={[40, 16]}>
        {edges.map(({ node: { frontmatter } }) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            xl={{ span: 8 }}
            key={frontmatter.title}
          >
            <Article {...frontmatter} />
          </Col>
        ))}
      </Row>
      <Box mt={10}>
        <PromoBanner
          title={
            <>
              <Paragraph color="#FFF" strong size="h1">
                <SlackOutlined /> slack
              </Paragraph>
            </>
          }
          desc={
            <>
              Let's chat, ask questions, share your story, review code. <br />
              Build a community with me that will help each other in Frontend.
            </>
          }
          content={<SlackForm />}
        />
      </Box>
    </Layout>
  );
};

export default Blog;
