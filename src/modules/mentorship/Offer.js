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
  padding: '2rem 1rem 5rem 1rem',
  position: 'relative',
  background: '#FAFAFA',
});

const OfferCard = styled.div({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',
  position: 'relative',
  padding: 24,
  paddingBottom: 0,
  minHeight: 650,
  borderRadius: 16,
  background: '#FFF',
  '@media (max-width: 480px)': {
    minHeight: 590,
  },

  '@media (min-width: 481px) and (max-width: 768px)': {
    minHeight: 590,
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
  marginBottom: '1.5rem',
  textAlign: 'center',
  marginLeft: '-1.5rem',

  '& .ant-list-item-meta-avatar': {
    display: 'none',
  },
});

const openMentoringEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/frontend-mentoring',
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
      <Title level={2} align="center" id="bigsondev-offer">
        Learning Frontend is tough
      </Title>
      <Box mb={5}>
        <Row justify="center">
          <Col xs={20} sm={12}>
            <Paragraph align="center">
              <div style={{ maxWidth: 420, margin: '0 auto' }}>
                I've been there, and honestly, it's a lot to carry on your own.
                Frontend evolves at a lightning fast pace and it can be
                frightening.
              </div>
            </Paragraph>
          </Col>
        </Row>
      </Box>
      <Row justify="center" gutter={[24, 24]}>
        <Col xs={22} sm={16} xl={8} xxl={7}>
          <OfferCard onClick={openMentoringEvent}>
            <Row justify="center" gutter={[0, 24]}>
              <Col span={24}>
                <Title level={4} align="center" transform="none">
                  Frontend Mentoring
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
                      50$
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col span={24}>
                <Box display="flex" justify="center">
                  <Text align="center">1 hour of conversation.</Text>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <Title
                  level={5}
                  align="center"
                  transform="none"
                  style={{ marginTop: '1rem' }}
                >
                  What's Included
                </Title>
                <PostListHolder
                  data={[
                    <Text size="preNormal" type="primary">
                      Theory & practice.
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
                      Homework & support.
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
        <Col xs={22} sm={16} xl={8} xxl={7}>
          <OfferCard onClick={openMockInterviewEvent}>
            <Row justify="center" gutter={[0, 24]}>
              <Col span={24}>
                <Title level={4} align="center" transform="none">
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
                      75$
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col span={24}>
                <Box display="flex" justify="center">
                  <Text align="center">1.5 hours of conversation.</Text>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <Title
                  level={5}
                  align="center"
                  transform="none"
                  style={{ marginTop: '1rem' }}
                >
                  What's Included
                </Title>
                <PostListHolder
                  data={[
                    <Text size="preNormal" type="primary">
                      Adjusted to your skill.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Code challenges.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Full-range questions.
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
                <Title level={4} align="center" transform="none">
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
                      150$
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col span={24}>
                <Box display="flex" justify="center">
                  <Text align="center">4x - 1 hour of conversation.</Text>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <Title
                  level={5}
                  align="center"
                  transform="none"
                  style={{ marginTop: '1rem' }}
                >
                  What's Included
                </Title>
                <PostListHolder
                  data={[
                    <Text size="preNormal" type="primary">
                      Real-world project.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Coding with a Mentor.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Perfect for newcomers.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Get the best results.
                    </Text>,
                    <Text size="preNormal" type="primary">
                      Help & support.
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
