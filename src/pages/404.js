import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'gatsby';

import { Layout, SEO, Title, Paragraph, PostList, Text } from '~components';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Error | Not Found Page" />
    <Title level={2} align="center">
      The duck has failed - 404 Error
    </Title>
    <Row justify="center">
      <Col xs={20} sm={16}>
        <Paragraph align="center" breakParagraph>
          Looks like I haven't implemented this page yet. Did you make a typo in
          the URL? Try to return to the Landing Page by clicking on the logo.
        </Paragraph>
      </Col>
      <Col xs={20} sm={16}>
        <Title level={4}>OR</Title>
      </Col>
      <Col xs={20} sm={16}>
        <PostList
          data={[
            <Text size="preNormal" type="primary">
              Read an article on the <Link to="/blog/">Blog</Link>.
            </Text>,
            <Text size="preNormal" type="primary">
              Do coding challenge in the <Link to="/library/">Library</Link>.
            </Text>,
            <Text size="preNormal" type="primary">
              Grab some <Link to="/mentorship/">Mentorship</Link> from me.
            </Text>,
            <Text size="preNormal" type="primary">
              <Link to="/reach-out/">Reach Out</Link> to me.
            </Text>,
          ]}
        />
      </Col>
    </Row>
  </Layout>
);

export default NotFoundPage;
