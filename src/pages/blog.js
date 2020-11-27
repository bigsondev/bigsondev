import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, Space, Divider } from 'antd';
import styled from 'styled-components';
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import moment from 'moment';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  Text,
  Box,
  SlackBanner,
  Button,
  Illustration,
  MainCard,
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
            illustration
            date(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const ArticleCard = styled(MainCard)(() => ({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
}));

const ArticleIllustration = styled(Illustration)({});

const ArticleButton = styled(Button)({
  marginTop: 'auto',
});

const Article = ({
  title,
  desc,
  path,
  hasCheatSheet,
  hasTodoList,
  readTime,
  illustration,
  tags,
  date,
}) => (
  <Link to={path}>
    <ArticleCard illustration={illustration}>
      {illustration !== 'none' && (
        <Box mb={1}>
          <ArticleIllustration type={illustration} />
        </Box>
      )}
      <Row gutter={[0, 8]}>
        <Col span={24}>
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
      <ArticleButton type="primary">Read more</ArticleButton>

      {/* TODO add tags in the future? */}
      {false && (
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
      )}
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
      <SEO title="Blog | Frontend, HTML, CSS, JS, React Tutorials, Sharing Knowledge, Tips & Tricks" />
      <Title level={2} align="center">
        Knowledge is power 📖
      </Title>
      <Paragraph align="center">
        To become a great Developer, <br />
        you have to learn.
      </Paragraph>
      <Divider />
      <Box mb={3}>
        <Title level={3} transform="capitalize" align="center">
          Articles
        </Title>
      </Box>
      <Row gutter={[24, 24]} justify="center">
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
      <Box margin="5rem 0">
        <SlackBanner />
      </Box>
    </Layout>
  );
};

export default Blog;
