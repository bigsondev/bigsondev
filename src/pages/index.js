import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import { SEO } from '../components';

import { Typography, Card, Row, Col } from 'antd';
import styled from 'styled-components';

const { Title: AntdTitle } = Typography;
const { Meta } = Card;

const Title = styled(AntdTitle)({
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
      <Meta description={desc} />
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
        <Col span={8}>
          {edges.map(({ node: { frontmatter } }) => (
            <ResourceCard {...frontmatter} key={frontmatter.title} />
          ))}
        </Col>
      </Row>
    </Layout>
  );
};

export default Dashboard;
