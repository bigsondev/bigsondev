import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, Space, Divider } from 'antd';
import {
  CalendarOutlined,
  FieldTimeOutlined,
  Html5Outlined,
  GithubOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

import { Layout, SEO, Title, Paragraph, Text, Box } from '../components';
import { truncate } from '../utils';

export const query = graphql`
  query homepageQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            desc
            path
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

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const Resource = ({ title, desc, path, date }) => (
  <Link to={path}>
    <ResourceCard>
      <Title level={3}>{title}</Title>
      <Paragraph type="secondary">{truncate(desc)}</Paragraph>
      <Paragraph>
        <Space>
          <Html5Outlined />
          <GithubOutlined />
        </Space>
      </Paragraph>
      <Space size="middle">
        <Text size="small">
          <Space>
            <CalendarOutlined />
            <span>{date}</span>
          </Space>
        </Text>
        <Text size="small">
          <Space>
            <FieldTimeOutlined />
            <span>5 min read</span>
          </Space>
        </Text>
      </Space>
    </ResourceCard>
  </Link>
);

const Dashboard = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Dashboard" />
      <Box ml={3}>
        <Title>Adrian, skyrocket your career</Title>
        <Divider />
      </Box>
      <Row gutter={[16, 16]}>
        {edges.map(({ node: { frontmatter } }) => (
          <Col span={8} key={frontmatter.title}>
            <Resource {...frontmatter} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Dashboard;
