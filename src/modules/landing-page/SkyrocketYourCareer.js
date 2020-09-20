import React from 'react';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';

import { Title, Text, Illustration, Box } from '~components';

const Holder = styled.div({
  padding: '104px 0',
  backgroundColor: '#91d5ff',
  width: '100vw',
});

const OfferCard = styled.div({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',
  position: 'relative',
  padding: 24,
  paddingBottom: 0,
  minHeight: 530,
  borderRadius: 16,
  background: '#FFF',

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const LearnMoreButton = styled(Button)({
  borderRadius: 8,
  position: 'absolute',
  bottom: 24,
  width: '90%',
});

export const SkyrocketYourCareer = () => {
  return (
    <Holder>
      <Box mb={5}>
        <Title level={2} align="center" color="#FFF">
          Skyrocket your career
        </Title>
      </Box>
      <Row justify="center" gutter={[24, 24]}>
        <Col xs={22} sm={13} lg={7} xxl={6}>
          <OfferCard>
            <Row justify="center" gutter={[0, 26]}>
              <Col span={12}>
                <Illustration type="mentor" />
              </Col>
              <Col span={24}>
                <Title level={4} align="center">
                  i want a mentor
                </Title>
              </Col>
              <Col span={20}>
                <Text align="center" display="block" type="secondary">
                  I will treat you individually, listen to your story, find
                  weaknesses, empower strengths, and create a unique learning
                  path to help you improve quickly.
                </Text>
              </Col>
              <LearnMoreButton type="secondary" size="large" block>
                Learn More
              </LearnMoreButton>
            </Row>
          </OfferCard>
        </Col>
        <Col xs={22} sm={13} lg={7} xxl={6}>
          <OfferCard>
            <Row justify="center" gutter={[0, 24]}>
              <Col span={10}>
                <Illustration type="mockInterview" />
              </Col>
              <Col span={24}>
                <Title level={4} align="center">
                  i want a mock interview
                </Title>
              </Col>
              <Col span={20}>
                <Text align="center" display="block" type="secondary">
                  Have you ever talked to a ghost? Stress-free conversation,
                  warm-up for your next technical interview. I will adjust
                  questions and coding challenges to your skill level.
                </Text>
              </Col>
              <LearnMoreButton type="secondary" size="large" block>
                Learn More
              </LearnMoreButton>
            </Row>
          </OfferCard>
        </Col>
        <Col xs={22} sm={13} lg={7} xxl={6}>
          <OfferCard>
            <Row justify="center" gutter={[0, 28]}>
              <Col span={11}>
                <Illustration type="developmentPlan" />
              </Col>
              <Col span={24}>
                <Title level={4} align="center">
                  i want a development plan
                </Title>
              </Col>
              <Col span={20}>
                <Text align="center" display="block" type="secondary">
                  Feeling stuck in your career? I felt the same and created one
                  to push my own limits. Now, I would love to create one for
                  you, let's skyrocket in Frontend together.
                </Text>
              </Col>
              <LearnMoreButton type="secondary" size="large" block>
                Learn More
              </LearnMoreButton>
            </Row>
          </OfferCard>
        </Col>
      </Row>
    </Holder>
  );
};
