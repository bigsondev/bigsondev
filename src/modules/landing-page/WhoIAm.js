import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { Title, Paragraph, Box, Icon } from '~components';

const Holder = styled.div({
  padding: '96px 16px',
  width: '100vw',
  position: 'relative',
  background: '#FAFAFA',
});

const OfferCard = styled.div({
  minHeight: 875,
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
      <Box mb={10}>
        <Title level={2} align="center">
          Who I Am
        </Title>
        <Row justify="center">
          <Col xs={20} sm={12}>
            <Paragraph align="center" fontWeight="200" breakParagraph>
              I was a League of Legends Coach for 5 years, inspired others, and
              had fun while they climbed the ranks. At some point, I decided to
              dive into IT for another 5 years. From a Java Tester to Lead
              Front-end Developer mentoring folks around me and recruiting
              candidates. And now, with my superpowers, let me move your
              Frontend career to the next level.
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
                  <Title level={4} align="center" transform="none">
                    Front-end Developer
                  </Title>
                </Col>
                <Col span={20}>
                  <Paragraph align="center" fontWeight="200" size="preNormal">
                    I love being up-to date in Frontend. I value modern, clean,
                    declarative code.
                  </Paragraph>
                </Col>
                <Col span={20}>
                  <Title level={5} align="center" transform="none">
                    Experience
                  </Title>
                  <Paragraph align="center" fontWeight="200">
                    5 years
                  </Paragraph>
                </Col>
                <Col span={20}>
                  <Title level={5} align="center" transform="none">
                    Skills
                  </Title>
                  <Paragraph align="center" fontWeight="200" size="small">
                    Fan of React ecosystem, TypeScript, CI/CD, Automation,
                    Testing.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    Enthusiast of Data-driven: HotJar, Google Analytics, A/B
                    Tests, LaunchDarkly, Sentry.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    UX/UI Evangelist, Material Design, Ant Design user, Atomic
                    Design follower.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    Leader of multiple teams, managing through Atlassian Kit.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    Builder and Creator of scaling projects with Micro Frontends
                    & Monorepo.
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
                  <Title level={4} align="center" transform="none">
                    Recruiter
                  </Title>
                </Col>
                <Col span={20}>
                  <Paragraph align="center" fontWeight="200" size="preNormal">
                    I do Mock Interviews, from theory to coding challenges.
                  </Paragraph>
                </Col>
                <Col span={20}>
                  <Title level={5} align="center" transform="none">
                    Experience
                  </Title>
                  <Paragraph align="center" fontWeight="200">
                    2 years
                  </Paragraph>
                </Col>
                <Col span={20}>
                  <Title level={5} align="center" transform="none">
                    Skills
                  </Title>
                  <Paragraph align="center" fontWeight="200" size="small">
                    Frontend Junior, Regular, Senior. All levels included.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    JS, HTML, CSS, React and other Frameworks on demand, e.g.
                    Angular.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    Recruited 50+ candidates.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    Individual approach, robust feedback.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
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
                  <Title level={4} align="center" transform="none">
                    Mentor
                  </Title>
                </Col>
                <Col span={20}>
                  <Box margin="-0.5rem 0 0 0">
                    <Paragraph align="center" fontWeight="200" size="preNormal">
                      I create individual plans and have empathic approach.
                    </Paragraph>
                  </Box>
                </Col>
                <Col span={20}>
                  <Title level={5} align="center" transform="none">
                    Experience
                  </Title>
                  <Paragraph align="center" fontWeight="200">
                    5 years
                  </Paragraph>
                </Col>
                <Col span={20}>
                  <Title level={5} align="center" transform="none">
                    Skills
                  </Title>
                  <Paragraph align="center" fontWeight="200" size="small">
                    In the past, League of Legends Challenger rank in Europe,
                    in-depth game knowledge.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    Now, doing my best to be a Challenger in Frontend &
                    Mentoring.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    300+ students.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    1000+ sessions.
                  </Paragraph>
                  <Paragraph align="center" fontWeight="200" size="small">
                    A lot of fun and new friends.
                  </Paragraph>
                </Col>
              </Row>
            </OfferCard>
          </Col>
        </Row>
      </Box>
    </Holder>
  );
};
