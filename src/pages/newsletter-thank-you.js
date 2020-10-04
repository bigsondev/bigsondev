import React from 'react';
import { Row, Col } from 'antd';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  Box,
  Illustration,
  PostList,
  Link,
} from '~components';
import { TechnicalInterviewTips } from '~assets';

const NewsletterThankYou = () => (
  <Layout>
    <SEO title="Newsletter Thank You | Thanks For Subscribing" />
    <Title level={3} align="center">
      Thank You!
    </Title>
    <Box mb={5}>
      <Paragraph align="center" type="secondary" size="preNormal">
        Great you subscribed, take the below PDFs to crush your next Frontend
        interview!
      </Paragraph>
    </Box>
    <Row justify="center" align="middle" gutter={[16, 16]}>
      <Col xs={22} md={11} xl={8} xxl={6}>
        <Illustration type="newsletter" />
      </Col>
      <Col
        xs={22}
        md={{ span: 11, offset: 2 }}
        lg={{ span: 10, offset: 2 }}
        xl={{ span: 8, offset: 2 }}
      >
        <PostList
          data={[
            <Link href={TechnicalInterviewTips}>
              30 Q&A For Your Next Frontend Interview
            </Link>,
            <Link href={TechnicalInterviewTips}>
              10 Technical Interview Tips
            </Link>,
          ]}
        />
      </Col>
    </Row>
  </Layout>
);

export default NewsletterThankYou;
