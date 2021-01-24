import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import {
  theme,
  Title,
  Paragraph,
  Illustration,
  Box,
  SlackBanner,
} from '~components';
import { NewsletterForm } from './NewsletterForm';

const Holder = styled.div({
  position: 'relative',
});

const { spacing } = theme;

export const Newsletter = () => {
  return (
    <Holder>
      <Box padding={`${spacing.extraLarge} 0`}>
        <Row justify="center" align="top" gutter={[16, 16]}>
          <Col xs={22} md={16} lg={10}>
            <Illustration type="newsletter" />
          </Col>
          <Col xs={22} lg={12} offset={2}>
            <Box margin="0.5rem 0 0 0">
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
        <Box padding={`${spacing.large} 0 0 0`}>
          <Row justify="center">
            <Col span={24}>
              <SlackBanner id="bigsondev-slack" />
            </Col>
          </Row>
        </Box>
      </Box>
    </Holder>
  );
};
