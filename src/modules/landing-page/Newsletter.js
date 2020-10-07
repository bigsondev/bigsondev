import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { Title, Paragraph, Illustration, Box } from '~components';
import { NewsletterForm } from './NewsletterForm';

const Holder = styled.div({
  padding: '7rem 1rem',
  width: '100vw',
  position: 'relative',
});

export const Newsletter = () => {
  return (
    <Holder>
      <Row justify="center" align="top" gutter={[16, 16]}>
        <Col xs={22} md={11} xl={8} xxl={6}>
          <Illustration type="newsletter" />
        </Col>
        <Col
          xs={22}
          md={{ span: 11, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
          xl={{ span: 8, offset: 2 }}
        >
          <Box margin="0.9rem 0 0 0">
            <Title level={4} id="bigsondev-newsletter-landing">
              the guide to beat frontend interview
            </Title>
          </Box>
          <Paragraph size="preNormal">
            I've been recruiting Frontend candidates for almost 2 years. This
            guide is a cheat sheet based on my recruiter experience. And the
            goal of it is to help you overcome technical interviews.
          </Paragraph>
          <NewsletterForm />
        </Col>
      </Row>
    </Holder>
  );
};
