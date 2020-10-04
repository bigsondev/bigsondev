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
  minHeight: 620,
  borderRadius: 16,
  background: '#FFF',
  '@media (max-width: 480px)': {
    minHeight: 560,
  },

  '@media (min-width: 481px) and (max-width: 768px)': {
    minHeight: 560,
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

const PostListHolder = styled(PostList)({
  marginTop: '1.5rem',
  marginBottom: '1.5rem',

  marginLeft: '2vw',
});

const openMentoringEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/mentoring',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const openMockInterviewEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/mock-interview',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const openDevelopmentPlanEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/development-plan',
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
        <Col xs={22} sm={16} xl={8} xxl={7}>
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
                <PostListHolder
                  data={[
                    <Text size="preNormal" type="primary">
                      Practice & theory.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Project(s) review.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Help with CV.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Feedback with tips.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Homework.
                    </Text>,
                  ]}
                />
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Estimated Call Time
                </Title>
                <Paragraph align="center" size="preNormal">
                  60 minutes
                </Paragraph>
              </Col>
              <ButtonHolder>
                <PromoButton onClick={openMentoringEvent}>
                  Book a session
                </PromoButton>
              </ButtonHolder>
            </Row>
          </OfferCard>
        </Col>
        <Col xs={22} sm={16} xl={8} xxl={7}>
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
                <PostListHolder
                  data={[
                    <Text size="preNormal" type="primary">
                      Adjusted to your skill.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Code challenges.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Theory questions.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Robust feedback.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Solutions & answers.
                    </Text>,
                  ]}
                />
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Estimated Call Time
                </Title>
                <Paragraph align="center" size="preNormal">
                  90 minutes
                </Paragraph>
              </Col>
              <ButtonHolder>
                <PromoButton onClick={openMockInterviewEvent}>
                  Test your skills
                </PromoButton>
              </ButtonHolder>
            </Row>
          </OfferCard>
        </Col>
        <Col xs={22} sm={16} xl={8} xxl={7}>
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
                <PostListHolder
                  data={[
                    <Text size="preNormal" type="primary">
                      Real-world projects.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Covers 100+ days.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Job in 3-6 months.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Best for newcomers.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Help & Support.
                    </Text>,
                  ]}
                />
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Estimated Call Time
                </Title>
                <Paragraph align="center" size="preNormal">
                  30 minutes
                </Paragraph>
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
