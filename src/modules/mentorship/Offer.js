import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import { openPopupWidget } from 'react-calendly';

import {
  Title,
  Paragraph,
  Text,
  PostList,
  PromoButton,
  Box,
} from '~components';

const Holder = styled.div({
  padding: '7rem 1rem',
  position: 'relative',
  background: '#FAFAFA',
});

const OfferCard = styled.div({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',
  position: 'relative',
  padding: 24,
  paddingBottom: 0,
  minHeight: 580,
  borderRadius: 16,
  background: '#FFF',
  '@media (max-width: 480px)': {
    minHeight: 520,
  },

  '@media (min-width: 481px) and (max-width: 768px)': {
    minHeight: 450,
  },

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const ButtonHolder = styled.div({
  position: 'absolute',
  bottom: 4,
});

const openMentoringEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigson-dev/mentoring',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const openMockInterviewEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigson-dev/mock-interview',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const openDevelopmentPlanEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigson-dev/development-plan',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

export const Offer = () => {
  return (
    <Holder>
      <Title level={2} align="center">
        Sounds familiar?
      </Title>
      <Row justify="center">
        <Col xs={20} sm={12}>
          <Paragraph align="center" breakParagraph>
            I've been there, and honestly, it's a lot to carry on your own.
            Frontend evolves at a lightning fast pace and it can be frightening.
            But, worry no more, I'm here to help you.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[24, 24]}>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <OfferCard onClick={openMentoringEvent}>
            <Row justify="center" gutter={[0, 24]}>
              <Col span={24}>
                <Title level={4} align="center" transform="capitalize">
                  Mentoring
                </Title>
              </Col>
              <Col span={24}>
                <Box display="flex" justify="center">
                  <Space>
                    <Text
                      align="center"
                      size="h4"
                      type="secondary"
                      strong
                      delete
                    >
                      100$
                    </Text>
                    <Text align="center" size="h3" strong>
                      70$
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <PostList
                  data={[
                    <Text size="preNormal" type="primary">
                      1 hour of knowledge pill.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Live coding, practice & theory.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Brainstorming together.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Additional free resources, feedback & tips to improve.
                    </Text>,
                  ]}
                />
              </Col>
              <ButtonHolder>
                <PromoButton onClick={openMentoringEvent}>
                  Book a session
                </PromoButton>
              </ButtonHolder>
            </Row>
          </OfferCard>
        </Col>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <OfferCard onClick={openMockInterviewEvent}>
            <Row justify="center" gutter={[0, 24]}>
              <Col span={24}>
                <Title level={4} align="center" transform="capitalize">
                  Mock Interview
                </Title>
              </Col>
              <Col span={24}>
                <Box display="flex" justify="center">
                  <Space>
                    <Text
                      align="center"
                      size="h4"
                      type="secondary"
                      strong
                      delete
                    >
                      150$
                    </Text>
                    <Text align="center" size="h3" strong>
                      105$
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <PostList
                  data={[
                    <Text size="preNormal" type="primary">
                      HTML, CSS, JS adjusted to your skills & experience.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      React and other frameworks on demand.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Robust feedback with proposed answers & solutions.
                    </Text>,
                  ]}
                />
              </Col>
              <ButtonHolder>
                <PromoButton onClick={openMockInterviewEvent}>
                  Test your skills
                </PromoButton>
              </ButtonHolder>
            </Row>
          </OfferCard>
        </Col>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <OfferCard onClick={openDevelopmentPlanEvent}>
            <Row justify="center" gutter={[0, 24]}>
              <Col span={24}>
                <Title level={4} align="center" transform="capitalize">
                  Development Plan
                </Title>
              </Col>
              <Col span={24}>
                <Box display="flex" justify="center">
                  <Space>
                    <Text
                      align="center"
                      size="h4"
                      type="secondary"
                      strong
                      delete
                    >
                      300$
                    </Text>
                    <Text align="center" size="h3" strong>
                      210$
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <PostList
                  data={[
                    <Text size="preNormal" type="primary">
                      Real-world projects.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Proposed plan covers 100+ days of coding.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      30 minutes of conversation.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Best for newcomers in Frontend.
                    </Text>,
                  ]}
                />
              </Col>
              <ButtonHolder>
                <PromoButton onClick={openDevelopmentPlanEvent}>
                  Change your career
                </PromoButton>
              </ButtonHolder>
            </Row>
          </OfferCard>
        </Col>
      </Row>
    </Holder>
  );
};
