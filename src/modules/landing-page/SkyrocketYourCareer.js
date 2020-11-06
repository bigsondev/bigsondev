import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Title, Paragraph, Text, Illustration, CardButton } from '~components';

const Holder = styled.div({
  padding: '7rem 1rem',
  width: '100vw',
  position: 'relative',
  background: '#FAFAFA',
});

const OfferCard = styled.div({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',
  position: 'relative',
  padding: 24,
  paddingBottom: 0,
  minHeight: 540,
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

export const SkyrocketYourCareer = () => {
  return (
    <Holder id="bigsondev-skyrocket-your-career">
      <Title level={2} align="center">
        Skyrocket your career
      </Title>
      <Row justify="center">
        <Col xs={20} sm={12}>
          <Paragraph align="center" breakParagraph>
            <div style={{ maxWidth: 420, margin: '0 auto' }}>
              Looking for code review, real-world projects, or ready to test
              your skills? Let me React to this.
            </div>
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[24, 24]}>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <Link to="/mentorship/#bigsondev-offer">
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
                  <Text align="center" display="block" size="preNormal">
                    I'll treat you individually, listen to your story, fix weak
                    points, empower strengths, and create a unique learning path
                    to help you improve quickly.
                  </Text>
                </Col>
                <CardButton>learn more</CardButton>
              </Row>
            </OfferCard>
          </Link>
        </Col>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <Link to="/mentorship/#bigsondev-offer">
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
                  <Text align="center" display="block" size="preNormal">
                    Have you ever talked to a ghost? Stress-free conversation, a
                    warm-up for your next technical interview. I'll adjust
                    questions and coding challenges to your skill level.
                  </Text>
                </Col>
                <CardButton>LEARN MORE</CardButton>
              </Row>
            </OfferCard>
          </Link>
        </Col>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <Link to="/mentorship/#bigsondev-offer">
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
                  <Text align="center" display="block" size="preNormal">
                    Feeling stuck in your career? I felt the same and created
                    one to push my own limits. Now, I would love to create one
                    for you, let's skyrocket in Frontend together.
                  </Text>
                </Col>
                <CardButton>LEARN MORE</CardButton>
              </Row>
            </OfferCard>
          </Link>
        </Col>
      </Row>
    </Holder>
  );
};
