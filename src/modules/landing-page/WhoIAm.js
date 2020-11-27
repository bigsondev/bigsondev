import React, { useState, useEffect } from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import { openPopupWidget } from 'react-calendly';

import { AdrianImage } from '~assets';
import {
  theme,
  Title,
  Paragraph,
  Text,
  Box,
  Icon,
  DesktopOnly,
  Link,
  Image,
  MainCard,
  Button,
  Illustration,
  SmallOnly,
  ExceptSmall,
} from '~components';

const { colors, fontSize, fontWeight, spacing } = theme;

const Holder = styled.div(({ theme }) => ({
  position: 'relative',
}));

const SocialLinkHolder = styled(Link)({
  color: '#137099 !important',
  '& a': {
    color: '#137099 !important',
  },
  '& a:hover': {
    color: '#137099 !important',
  },
  '& a:active': {
    color: '#137099 !important',
  },
  '& a:visited': {
    color: '#137099 !important',
  },
});

const SocialsHolder = styled.div({
  position: 'fixed',
  zIndex: 9999,
  top: '40%',
  left: '1.5rem',
});

const SkillButton = styled(Button)({
  fontSize: '1rem',
  fontWeight: 500,
  padding: '1.25rem 1.75rem',
  borderRadius: 0,
  cursor: 'inherit',
  margin: '0.5rem',

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${theme.colors.primary}`,
    backgroundColor: `${theme.colors.primary} !important`,
    color: `${theme.colors.white} !important`,
  },
});

const openFreeConsultationEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/free-consultation',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

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
        <Box padding={`${spacing.extraLarge} 0`}>
          <Title
            transform="none"
            align="center"
            marginBottom="0"
            color={colors.primary}
            fontSize={fontSize.superLarge}
            fontWeight={fontWeight.stronger}
          >
            About
          </Title>
          <Row justify="center" align="center" gutter={[24, 24]}>
            <Col xs={16} sm={8} md={6} lg={5}>
              <Image src={AdrianImage} />
            </Col>
            <Col xs={22} lg={16} offset={1} style={{ alignSelf: 'center' }}>
              <Paragraph align="center" marginBottom="0">
                <Text strong>Hi, I'm Adrian - Frontend Mentor.</Text> I love
                sharing my knowledge with others. I was a League of Legends
                Coach for nearly 5 years. After that, switched my career into IT
                field. From a Java Tester to Lead Frontend Developer -
                recruiting candidates and mentoring folks around me. I
                collaborated with big companies, startups and always had lots of
                fun building things from the scratch.
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center" gutter={[24, 24]}>
            <Col span={24}>
              <Row align="center" gutter={[32, 32]}>
                <Col xs={22} lg={9}>
                  <MainCard>
                    <Row justify="center" gutter={[0, 24]}>
                      <Col span={12} style={{ textAlign: 'center' }}>
                        <Icon type="developer" width={64} />
                      </Col>
                      <Col span={24}>
                        <Title
                          level={4}
                          transform="none"
                          align="center"
                          marginBottom="0"
                          fontSize={fontSize.large}
                          fontWeight={fontWeight.stronger}
                        >
                          Lead Frontend Developer
                        </Title>
                      </Col>
                      <Col span={22}>
                        <Paragraph align="center" size="preNormal">
                          I love challenges and learning new technologies.
                        </Paragraph>
                      </Col>
                      <Col span={20}>
                        <Title level={5} align="center" transform="none">
                          Experience
                        </Title>
                        <Paragraph
                          align="center"
                          size="preNormal"
                          marginBottom="0"
                        >
                          5 years
                        </Paragraph>
                      </Col>
                    </Row>
                  </MainCard>
                </Col>
                <Col
                  xs={22}
                  lg={15}
                  style={{ alignSelf: 'center', textAlign: 'center' }}
                >
                  <Title
                    level={3}
                    transform="none"
                    align="center"
                    fontSize={fontSize.large}
                    fontWeight={fontWeight.stronger}
                  >
                    Skills
                  </Title>
                  <SkillButton>JavaScript</SkillButton>
                  <SkillButton>TypeScript</SkillButton>
                  <SkillButton>Ajax</SkillButton>
                  <SkillButton>HTML5</SkillButton>
                  <SkillButton>CSS3</SkillButton>
                  <SkillButton>React</SkillButton>
                  <SkillButton>Redux</SkillButton>
                  <SkillButton>Gatsby.js</SkillButton>
                  <SkillButton>Node.js</SkillButton>
                  <SkillButton>Express.js</SkillButton>
                  <SkillButton>REST</SkillButton>
                  <SkillButton>GraphQL</SkillButton>
                  <SkillButton>Webpack</SkillButton>
                  <SkillButton>Git</SkillButton>
                  <SkillButton>VSCode</SkillButton>
                  <SkillButton>Figma</SkillButton>
                  <SkillButton>Terminal</SkillButton>
                  <SkillButton>CI/CD</SkillButton>
                  <SkillButton>Testing</SkillButton>
                  <SkillButton>Cypress</SkillButton>
                  <SkillButton>Yarn</SkillButton>
                  <SkillButton>Npm</SkillButton>
                  <SkillButton>Phaser</SkillButton>
                  <SkillButton>Leadership</SkillButton>
                  <SkillButton>UX/UI</SkillButton>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row align="center" gutter={[32, 32]}>
                <Col xs={22} lg={9}>
                  <MainCard>
                    <Row justify="center" gutter={[0, 24]}>
                      <Col span={12} style={{ textAlign: 'center' }}>
                        <Icon type="recruiter" width={64} />
                      </Col>
                      <Col span={24}>
                        <Title
                          level={4}
                          transform="none"
                          align="center"
                          marginBottom="0"
                          fontSize={fontSize.large}
                          fontWeight={fontWeight.stronger}
                        >
                          Technical Recruiter
                        </Title>
                      </Col>
                      <Col span={22}>
                        <Paragraph align="center" size="preNormal">
                          I enjoy brainstorming with candidates and sharing
                          insights.
                        </Paragraph>
                      </Col>
                      <Col span={20}>
                        <Title level={5} align="center" transform="none">
                          Experience
                        </Title>
                        <Paragraph
                          align="center"
                          size="preNormal"
                          marginBottom="0"
                        >
                          2 years
                        </Paragraph>
                      </Col>
                    </Row>
                  </MainCard>
                </Col>
                <Col
                  xs={22}
                  lg={15}
                  style={{ alignSelf: 'center', textAlign: 'center' }}
                >
                  <Title
                    level={3}
                    transform="none"
                    align="center"
                    fontSize={fontSize.large}
                    fontWeight={fontWeight.stronger}
                  >
                    Keywords
                  </Title>
                  <SkillButton>Theory</SkillButton>
                  <SkillButton>Practice</SkillButton>
                  <SkillButton>Junior</SkillButton>
                  <SkillButton>Regular</SkillButton>
                  <SkillButton>Senior</SkillButton>
                  <SkillButton>Code challenges</SkillButton>
                  <SkillButton>Algorithms</SkillButton>
                  <SkillButton>Pair programming</SkillButton>
                  <SkillButton>Brainstorming</SkillButton>
                  <SkillButton>Sharing insights</SkillButton>
                  <SkillButton>Soft-skills check</SkillButton>
                  <SkillButton>Proposed solutions</SkillButton>
                  <SkillButton>Robust feedback</SkillButton>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row align="center" gutter={[32, 32]}>
                <Col xs={22} lg={9}>
                  <MainCard>
                    <Row justify="center" gutter={[0, 24]}>
                      <Col span={12} style={{ textAlign: 'center' }}>
                        <Icon type="mentor" width={64} />
                      </Col>
                      <Col span={24}>
                        <Title
                          level={4}
                          transform="none"
                          align="center"
                          marginBottom="0"
                          fontSize={fontSize.large}
                          fontWeight={fontWeight.stronger}
                        >
                          Frontend Mentor
                        </Title>
                      </Col>
                      <Col span={22}>
                        <Paragraph align="center" size="preNormal">
                          I care about mentees and watching them succeed drives
                          me.
                        </Paragraph>
                      </Col>
                      <Col span={20}>
                        <Title level={5} align="center" transform="none">
                          Experience
                        </Title>
                        <Paragraph
                          align="center"
                          size="preNormal"
                          marginBottom="0"
                        >
                          5 years (as a LoL Coach)
                        </Paragraph>
                      </Col>
                    </Row>
                  </MainCard>
                </Col>
                <Col
                  xxs={22}
                  lg={15}
                  style={{ alignSelf: 'center', textAlign: 'center' }}
                >
                  <Title
                    level={3}
                    transform="none"
                    align="center"
                    fontSize={fontSize.large}
                    fontWeight={fontWeight.stronger}
                  >
                    Values
                  </Title>
                  <SkillButton>Empathy</SkillButton>
                  <SkillButton>Patience</SkillButton>
                  <SkillButton>Individual approach</SkillButton>
                  <SkillButton>Real-world projects</SkillButton>
                  <SkillButton>Long-term relations</SkillButton>
                  <SkillButton>Homework assignments</SkillButton>
                  <SkillButton>Unlimited support</SkillButton>
                  <SkillButton>New friend ❤️</SkillButton>
                </Col>
              </Row>
            </Col>
          </Row>
          <Box margin={`${spacing.large} 0 0 0`}>
            <Row justify="center">
              <Col xs={22} lg={12}>
                <Box margin={`0 0 ${spacing.large} 0`}>
                  <Title level={3} transform="none" align="center">
                    I wouldn't be where I am today if I wasn't working with some
                    amazing companies
                  </Title>
                </Box>
              </Col>
            </Row>
            <Row justify="center">
              <Col xs={22}>
                <Row justify="center" gutter={[32, 32]}>
                  <Col xs={12} sm={8} lg={4}>
                    <Illustration type="ericsson" />
                  </Col>
                  <Col xs={12} sm={8} lg={4}>
                    <Illustration type="grapeUp" />
                  </Col>
                  <Col xs={12} sm={8} lg={4}>
                    <Illustration type="balfour" />
                  </Col>
                  <Col xs={12} sm={8} lg={4}>
                    <Illustration type="jlabs" />
                  </Col>
                  <Col xs={12} sm={8} lg={4}>
                    <Illustration type="sinch" />
                  </Col>
                  <Col xs={12} sm={8} lg={4}>
                    <Illustration type="koji" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Box>
          <Box margin={`${spacing.large} 0 0 0`}>
            <Title level={4} transform="none" align="center">
              Interested? Let's hop on a call to discuss the details of
              Mentorship
            </Title>
            <Box
              display="flex"
              justify="center"
              margin={`${spacing.large} 0 0 0`}
            >
              <SmallOnly>
                <Space size="large" direction="vertical">
                  <Button type="secondary" onClick={openFreeConsultationEvent}>
                    Reserve meeting via Calendly
                  </Button>
                  <Button
                    type="link"
                    to="/reach-out/"
                    style={{ textAlign: 'center' }}
                  >
                    or email me
                  </Button>
                </Space>
              </SmallOnly>
              <ExceptSmall>
                <Space size="large">
                  <Button type="secondary" onClick={openFreeConsultationEvent}>
                    Reserve meeting via Calendly
                  </Button>
                  <Button type="link" to="/reach-out/">
                    or email me
                  </Button>
                </Space>
              </ExceptSmall>
            </Box>
          </Box>
        </Box>
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
