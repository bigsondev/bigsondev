import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { Title, Paragraph, Box, Icon } from '~components';

const Holder = styled.div({
  padding: '7rem 1rem',
  width: '100vw',
  position: 'relative',
  background: '#FAFAFA',
});

const OfferCard = styled.div({
  minHeight: 900,
  position: 'relative',
  padding: 24,
  paddingBottom: 0,
  borderRadius: 16,
  background: '#FFF',

  '@media (max-width: 480px)': {
    minHeight: 520,
  },
  '@media (min-width: 481px) and (max-width: 768px)': {
    minHeight: 450,
  },
});

export const WhoIAm = () => {
  return (
    <Holder>
      <Title level={2} align="center">
        Who I Am
      </Title>
      <Row justify="center">
        <Col xs={20} sm={12}>
          <Paragraph align="center" breakParagraph>
            I was a League of Legends Coach for 5 years, inspired others, and
            had fun while they climbed the ranks. At some point, I decided to
            dive into IT for another 5 years. From a Java Tester to Lead
            Frontend Developer mentoring folks around me and recruiting
            candidates. And now, with my superpowers, let me move your Frontend
            career to the next level.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[24, 24]}>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <OfferCard>
            <Row justify="center" gutter={[0, 26]}>
              <Col span={12} style={{ textAlign: 'center' }}>
                <Icon type="developer" width={64} />
              </Col>
              <Col span={24}>
                <Title level={5} align="center" transform="none">
                  Frontend Developer
                </Title>
              </Col>
              <Col span={20}>
                <Paragraph align="center" size="preNormal">
                  I love being up-to-date in Frontend. I value modern, clean,
                  declarative code.
                </Paragraph>
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Experience
                </Title>
                <Paragraph align="center" size="preNormal">
                  5 years
                </Paragraph>
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Skills
                </Title>
                <Paragraph align="center" size="preNormal">
                  Fan of React ecosystem, TypeScript, CI/CD, Automation,
                  Testing.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  2D Game Developer, coding games in Phaser.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  UX/UI Evangelist, Material Design, Ant Design user, Atomic
                  Design follower.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  Leader of multiple teams, managing through Atlassian Kit.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  Builder and Creator of scaling projects with Micro Frontends &
                  Monorepo.
                </Paragraph>
              </Col>
            </Row>
          </OfferCard>
        </Col>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <OfferCard>
            <Row justify="center" gutter={[0, 24]}>
              <Col span={12} style={{ textAlign: 'center' }}>
                <Icon type="recruiter" width={64} />
              </Col>
              <Col span={24}>
                <Title level={5} align="center" transform="none">
                  Recruiter
                </Title>
              </Col>
              <Col span={20}>
                <Paragraph align="center" size="preNormal">
                  I do Mock Interviews, from theory to coding challenges.
                </Paragraph>
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Experience
                </Title>
                <Paragraph align="center" size="preNormal">
                  2 years
                </Paragraph>
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Skills
                </Title>
                <Paragraph align="center" size="preNormal">
                  Frontend Junior, Regular, Senior. All levels included.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  JS, HTML, CSS, React, and other Frameworks on demand, e.g.
                  Angular.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  50+ interviews.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  Individual approach, robust feedback.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  Both technical and soft skills checks.
                </Paragraph>
              </Col>
            </Row>
          </OfferCard>
        </Col>
        <Col xs={22} sm={16} xl={7} xxl={6}>
          <OfferCard>
            <Row justify="center" gutter={[0, 28]}>
              <Col span={12} style={{ textAlign: 'center' }}>
                <Icon type="mentor" width={64} />
              </Col>
              <Col span={24}>
                <Title level={5} align="center" transform="none">
                  Mentor
                </Title>
              </Col>
              <Col span={20}>
                <Box margin="-0.5rem 0 0 0">
                  <Paragraph align="center" size="preNormal">
                    I create individual plans and have an empathic approach.
                  </Paragraph>
                </Box>
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Experience
                </Title>
                <Paragraph align="center" size="preNormal">
                  5 years
                </Paragraph>
              </Col>
              <Col span={20}>
                <Title level={5} align="center" transform="none">
                  Skills
                </Title>
                <Paragraph align="center" size="preNormal">
                  In the past, the League of Legends Challenger rank in Europe,
                  in-depth game knowledge.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  Now, doing my best to be a Challenger in Frontend & Mentoring.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  300+ students.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  1000+ sessions.
                </Paragraph>
                <Paragraph align="center" size="preNormal">
                  A lot of fun and new friends.
                </Paragraph>
              </Col>
            </Row>
          </OfferCard>
        </Col>
      </Row>
    </Holder>
  );
};
