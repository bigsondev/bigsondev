import React, { useState, useEffect } from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';

import { Title, Paragraph, Box, Icon, DesktopOnly, Link } from '~components';

const Holder = styled.div({
  padding: '7rem 1rem',
  width: '100vw',
  position: 'relative',
  background: '#FAFAFA',
});

const OfferCard = styled.div({
  minHeight: 930,
  position: 'relative',
  padding: 24,
  paddingBottom: 0,
  borderRadius: 16,
  background: '#FFF',

  '@media (max-width: 480px)': {
    minHeight: 550,
  },
  '@media (min-width: 481px) and (max-width: 768px)': {
    minHeight: 480,
  },
});

const SocialLinkHolder = styled(Link)({
  color: '#40A9FF !important',
  '& a': {
    color: '#40A9FF !important',
  },
  '& a:hover': {
    color: '#40A9FF !important',
  },
  '& a:active': {
    color: '#40A9FF !important',
  },
  '& a:visited': {
    color: '#40A9FF !important',
  },
});

const SocialsHolder = styled.div({
  position: 'fixed',
  zIndex: 9999,
  top: '40%',
  left: '1.5rem',
});

export const WhoIAm = () => {
  const [showSocials, setShowSocials] = useState(false);

  const handleScroll = () => {
    const { top } = document
      .querySelector('#bigsondev-who-i-am')
      .getBoundingClientRect();

    if (top <= 0) {
      setShowSocials(true);
    } else {
      setShowSocials(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <Holder id="bigsondev-who-i-am">
        <Title level={2} align="center">
          About Me
        </Title>
        <Row justify="center">
          <Col xs={20} sm={12}>
            <Paragraph align="center" breakParagraph>
              Hi, I'm Adrian - Frontend Mentor. I love sharing my knowledge with
              others. I was a League of Legends Coach for nearly 5 years. After
              that, switched my career into IT field. From a Java Tester to Lead
              Frontend Developer - recruiting candidates and mentoring folks
              around me. I collaborated with big companies, startups and always
              had lots of fun building things from the scratch.
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
                    Developer
                  </Title>
                </Col>
                <Col span={20}>
                  <Paragraph align="center" size="preNormal">
                    I love being up-to-date in Frontend. I value modern and
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
                    HTML, CSS, JS, TS, React, Gatsby
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Node.js, REST, GraphQL
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    2D Games in Phaser, Unity
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Automation, CI/CD, Git
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Testing (units, e2e, A/B)
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Leadership, Agile, Scrum, Kanban
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    UX/UI, Design Systems
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
                  <Box mb={4}>
                    <Paragraph align="center" size="preNormal">
                      I enjoy having a mock interview with mentees to help them
                      prepare.
                    </Paragraph>
                  </Box>
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
                    Interview Methods
                  </Title>
                  <Paragraph align="center" size="preNormal">
                    1:1 Junior, Regular, Senior levels
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Theory & Practice
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Pair Programming
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Brainstorming & Conversation
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Soft skills check
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Proposing solutions
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Adjusting to your skill
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
                    <Box mb={4}>
                      <Paragraph align="center" size="preNormal">
                        I feel like I was borned to mentor, it's a destiny -
                        what can I say.
                      </Paragraph>
                    </Box>
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
                    Stats & Methods
                  </Title>
                  <Paragraph align="center" size="preNormal">
                    League of Legends Coach for 5 years
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    300+ students
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    1000+ sessions
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Individual approach
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Real-world projects
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Homework & Support
                  </Paragraph>
                  <Paragraph align="center" size="preNormal">
                    Staying in touch
                  </Paragraph>
                </Col>
              </Row>
            </OfferCard>
          </Col>
        </Row>
      </Holder>
      <DesktopOnly>
        {showSocials && (
          <SocialsHolder>
            <Space direction="vertical" size="small">
              <SocialLinkHolder href="https://github.com/bigsondev">
                <Icon type="github" width="2.5rem" />
              </SocialLinkHolder>
              <SocialLinkHolder href="https://twitter.com/BigsonDev">
                <Icon type="twitter" width="2.5rem" />
              </SocialLinkHolder>
              <SocialLinkHolder href="https://www.facebook.com/BigsonDev-109789784229011">
                <Icon type="facebook" width="2.5rem" />
              </SocialLinkHolder>
              <SocialLinkHolder href="https://www.instagram.com/bigsondev/">
                <Icon type="instagram" width="2.5rem" />
              </SocialLinkHolder>
              <SocialLinkHolder href="https://www.linkedin.com/in/adrian-bigaj-282277130/">
                <Icon type="linkedin" width="2.5rem" />
              </SocialLinkHolder>
            </Space>
          </SocialsHolder>
        )}
      </DesktopOnly>
    </>
  );
};
