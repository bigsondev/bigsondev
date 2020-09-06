import React from 'react';
import { Link, graphql } from 'gatsby';

import { Layout, SEO } from '../components';

import { Typography, Card, Row, Col } from 'antd';
import styled from 'styled-components';

const Title = styled(Typography.Title)({
  textAlign: 'center',
});

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

const ResourceCard = ({ title, desc, path, date }) => (
  <Link to={path}>
    <Card hoverable title={title} extra={date}>
      <Card.Meta description={desc} />
    </Card>
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
      <Title>Adrian, skyrocket your career</Title>
      <Row gutter={16}>
        {edges.map(({ node: { frontmatter } }) => (
          <Col span={8} key={frontmatter.title}>
            <ResourceCard {...frontmatter} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Dashboard;
