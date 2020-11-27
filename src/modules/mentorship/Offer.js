import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import { openPopupWidget } from 'react-calendly';

import {
  Title,
  Paragraph,
  Text,
  Button,
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
  minHeight: 520,
  borderRadius: 16,
  background: '#FFF',
  '@media (max-width: 480px)': {
    minHeight: 480,
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
        Skyrocket Your Career 🚀
      </Title>
      <Box mb={5}>
        <Row justify="center">
          <Col xs={20} sm={12}>
            <Paragraph align="center">
              <div style={{ maxWidth: 650, margin: '0 auto' }}>
                <Text strong>It's easy to get stuck in tutorials hell</Text>.
                There is a lot to learn. I've been there and I don't want you to
                go through this alone. If you are a newcomer or just looking to
                improve as a Developer, I'll be happy to guide and support.
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
                      50$ / 1h
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <Paragraph align="center" style={{ marginTop: '1rem' }}>
                  1 hour of conversation, best for looking at the code,
                  discussing portfolio, helping out with best practices, and
                  proposing the next steps to improve as a Developer.
                </Paragraph>
              </Col>
              <ButtonHolder>
                <Button type="promo" onClick={openMentoringEvent}>
                  Book a session
                </Button>
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
                      75$ / 1.5h
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <Paragraph align="center" style={{ marginTop: '1rem' }}>
                  1.5 hours of conversation, have a job interview soon? Test
                  yourself on a mock interview first. Theory, practice with
                  proposed solutions, and robust feedback included.
                </Paragraph>
              </Col>
              <ButtonHolder>
                <Button type="promo" onClick={openMockInterviewEvent}>
                  Test your skills
                </Button>
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
                      150$ / 4h
                    </Text>
                  </Space>
                </Box>
              </Col>
              <Col xs={22} md={16}>
                <Paragraph align="center" style={{ marginTop: '1rem' }}>
                  4 hours of conversation, spread over the month, 1 hour per
                  week. Build a real-world project, code with a Mentor, and
                  learn the most by building things from the scratch.
                </Paragraph>
              </Col>
              <ButtonHolder>
                <Button type="promo" onClick={openDevelopmentPlanEvent}>
                  Change your career
                </Button>
              </ButtonHolder>
            </Row>
          </OfferCard>
        </Col>
      </Row>
    </Holder>
  );
};
