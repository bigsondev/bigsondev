import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { Title, Paragraph, Box } from '~components';
import { NewsletterForm } from './NewsletterForm';

const Holder = styled.div({
  padding: '96px 16px',
  paddingBottom: 0,
  width: '100vw',
  position: 'relative',
});

export const Newsletter = () => {
  return (
    <Holder>
      <Box mb={10}>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={22} sm={10} md={11} lg={10} xl={8}>
            <Paragraph fontWeight="200">PLACEHOLDER FOR ILLUSTRATION</Paragraph>
          </Col>
          <Col xs={22} sm={12} md={11} lg={10} xl={8}>
            <Title level={4}>the guide to beat frontend interview</Title>
            <Paragraph fontWeight="200" size="preNormal">
              I've been recruiting Frontend candidates for almost 2 years. This
              guide is a cheat sheet based on my recruiter experience. And the
              goal of it is to help you overcome technical interviews.
            </Paragraph>
            <NewsletterForm />
          </Col>
        </Row>
      </Box>
    </Holder>
  );
};
