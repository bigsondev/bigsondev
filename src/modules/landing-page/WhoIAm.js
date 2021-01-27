import React, { useState, useEffect } from 'react';
import { Row, Col, Space } from 'antd';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { openPopupWidget } from 'react-calendly';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

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
  LgOnly,
  ExceptLg,
} from '~components';

const { colors, fontSize, fontWeight, spacing, opacity } = theme;

const Holder = styled.div(({ theme }) => ({
  position: 'relative',
}));

const WhoIAmCard = styled(MainCard)({});

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

const LinkSkillHolder = styled(Link)({
  textAlign: 'center',
});

const SkillHolder = styled(Row)({
  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    opacity: 0.5,
  },
});

const Skill = ({ type, name, link }) =>
  link ? (
    <LinkSkillHolder href={link} textDecoration="none">
      <SkillHolder justify="center" align="middle">
        <Col span={24}>
          <Icon type={type} />
        </Col>
        <Col span={24}>
          <Text size="small">{name}</Text>
        </Col>
      </SkillHolder>
    </LinkSkillHolder>
  ) : (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Icon type={type} />
      </Col>
      <Col span={24}>
        <Text size="small">{name}</Text>
      </Col>
    </Row>
  );

const frontendSkills = [
  {
    type: 'html',
    name: 'HTML',
    link: 'https://www.w3schools.com/html/html_intro.asp',
  },
  {
    type: 'css',
    name: 'CSS',
    link: 'https://www.w3schools.com/css/css_intro.asp',
  },
  {
    type: 'javascript',
    name: 'JavaScript',
    link:
      'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
  },
  {
    type: 'typescript',
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  { type: 'react', name: 'React', link: 'https://reactjs.org/' },
  { type: 'redux', name: 'Redux', link: 'https://redux.js.org/' },
  { type: 'gatsby', name: 'Gatsby', link: 'https://www.gatsbyjs.com/' },
  { type: 'next', name: 'Next', link: 'https://nextjs.org/' },
  { type: 'jss', name: 'JSS', link: 'https://cssinjs.org/?v=v10.5.0' },
  { type: 'materialui', name: 'MUI', link: 'https://material-ui.com/' },
  { type: 'antdesign', name: 'Antd', link: 'https://ant.design/' },
  { type: 'graphql', name: 'GraphQL', link: 'https://graphql.org/' },
  { type: 'phaser', name: 'Phaser', link: 'https://phaser.io/' },
];

const backendSkills = [
  { type: 'node', name: 'Node', link: 'https://nodejs.org/en/' },
  { type: 'express', name: 'Express', link: 'https://expressjs.com/' },
  { type: 'mongodb', name: 'MongoDB', link: 'https://www.mongodb.com/' },
  { type: 'postgresql', name: 'Postgre', link: 'https://www.postgresql.org/' },
  { type: 'firebase', name: 'Firebase', link: 'https://firebase.google.com/' },
];

const toolsSkills = [
  { type: 'apple', name: 'Mac', link: 'https://www.apple.com/' },
  { type: 'iterm', name: 'iTerm2', link: 'https://iterm2.com/' },
  { type: 'yarn', name: 'Yarn', link: 'https://yarnpkg.com/' },
  { type: 'git', name: 'Git', link: 'https://git-scm.com/' },
  { type: 'vscode', name: 'VSCode', link: 'https://code.visualstudio.com/' },
  { type: 'eslint', name: 'ESLint', link: 'https://eslint.org/' },
  { type: 'prettier', name: 'Prettier', link: 'https://prettier.io/' },
  { type: 'webpack', name: 'Webpack', link: 'https://webpack.js.org/' },
  { type: 'cypress', name: 'Cypress', link: 'https://www.cypress.io/' },
  { type: 'sentry', name: 'Sentry', link: 'https://sentry.io/welcome/' },
  { type: 'hotjar', name: 'HotJar', link: 'https://www.hotjar.com/' },
  { type: 'launchdarkly', name: 'LD', link: 'https://launchdarkly.com/' },
  {
    type: 'jira',
    name: 'Jira',
    link: 'https://www.atlassian.com/software/jira',
  },
  { type: 'nxdev', name: 'nx.dev', link: 'https://nx.dev/' },
  { type: 'netlify', name: 'Netlify', link: 'https://www.netlify.com/' },
];

const uxuiSkills = [
  { type: 'figma', name: 'Figma', link: 'https://www.figma.com/' },
  { type: 'storybook', name: 'Storybook', link: 'https://storybook.js.org/' },
  { type: 'zeplin', name: 'Zeplin', link: 'https://zeplin.io/' },
];

const recruiterSkills = [
  { type: 'resume', name: 'Resume' },
  { type: 'interview', name: 'Interview' },
  { type: 'theory', name: 'Theory' },
  { type: 'practice', name: 'Practice' },
  { type: 'brainstorm', name: 'Mindful' },
  { type: 'logic', name: 'Logic' },
  { type: 'algorithms', name: 'Solving' },
];

const mentorSkills = [
  { type: 'individual', name: 'Individual' },
  { type: 'path', name: 'Path' },
  { type: 'progress', name: 'Progress' },
  { type: 'insights', name: 'Insights' },
  { type: 'knowledge', name: 'Wisdom' },
  { type: 'kindness', name: 'Kindness' },
  { type: 'group', name: 'Team' },
  { type: 'supportMentor', name: 'Support' },
];

const openFreeConsultationEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/free-consultation',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

export const WhoIAm = ({ fluid }) => {
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
  }, []);

  return (
    <>
      <Holder>
        <Box padding={`${spacing.extraLarge} 0`}>
          <Title
            transform="none"
            align="center"
            marginBottom="0"
            color={colors.primary}
            fontSize={fontSize.superLarge}
            fontWeight={fontWeight.stronger}
            id="bigsondev-who-i-am"
          >
            About
          </Title>
          <Row justify="center" align="center" gutter={[24, 24]}>
            <Col xs={16} sm={8} md={6} lg={5}>
              <Flip>
                <Image
                  fluid={fluid}
                  alt="Image represents Adrian - Frontend Mentor"
                />
              </Flip>
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
              <Row align="middle" justify="center" gutter={[32, 32]}>
                <Col xs={22} lg={9}>
                  <Slide left>
                    <Link
                      href="https://www.linkedin.com/in/adrian-bigaj-282277130/"
                      textDecoration="none"
                    >
                      <WhoIAmCard>
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
                      </WhoIAmCard>
                    </Link>
                  </Slide>
                </Col>
                <Col
                  xs={24}
                  lg={15}
                  style={{ alignSelf: 'center', textAlign: 'center' }}
                >
                  <Title
                    level={3}
                    transform="none"
                    align="center"
                    fontSize={fontSize.large}
                    fontWeight={fontWeight.stronger}
                    id="bigsondev-technologies"
                  >
                    Why should you care?
                  </Title>
                  <Paragraph
                    size="normal"
                    textOpacity={opacity.title}
                    align="center"
                  >
                    I've faced many challenges and got stuck a lot of times
                    without a mentor - let's make sure I'm here to support you.
                  </Paragraph>
                  <Paragraph
                    size="preNormal"
                    strong
                    align="center"
                    textOpacity={opacity.title}
                  >
                    Frontend
                  </Paragraph>
                  <Paragraph align="center">
                    <Row justify="center" gutter={[4, 24]}>
                      {frontendSkills.map((skill) => (
                        <Col xs={6} sm={4} key={skill.type}>
                          <Skill {...skill} />
                        </Col>
                      ))}
                    </Row>
                  </Paragraph>
                  <Paragraph
                    size="preNormal"
                    strong
                    align="center"
                    textOpacity={opacity.title}
                  >
                    Tools
                  </Paragraph>
                  <Paragraph align="center">
                    <Row gutter={[4, 24]} justify="center">
                      {toolsSkills.map((skill) => (
                        <Col xs={6} sm={4} key={skill.type}>
                          <Skill {...skill} />
                        </Col>
                      ))}
                    </Row>
                  </Paragraph>
                  <Paragraph
                    size="preNormal"
                    strong
                    align="center"
                    textOpacity={opacity.title}
                  >
                    Backend
                  </Paragraph>
                  <Paragraph align="center">
                    <Row gutter={[4, 24]} justify="center">
                      {backendSkills.map((skill) => (
                        <Col xs={6} sm={4} key={skill.type}>
                          <Skill {...skill} />
                        </Col>
                      ))}
                    </Row>
                  </Paragraph>
                  <Paragraph
                    size="preNormal"
                    strong
                    align="center"
                    textOpacity={opacity.title}
                  >
                    UX/UI
                  </Paragraph>
                  <Paragraph align="center">
                    <Row gutter={[4, 24]} justify="center">
                      {uxuiSkills.map((skill) => (
                        <Col xs={6} sm={4} key={skill.type}>
                          <Skill {...skill} />
                        </Col>
                      ))}
                    </Row>
                  </Paragraph>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <ExceptLg>
                <Row align="middle" justify="center" gutter={[32, 32]}>
                  <Col xs={22} lg={9}>
                    <Slide right>
                      <GatsbyLink to="/#bigsondev-newsletter-landing">
                        <WhoIAmCard>
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
                                I enjoy brainstorming with candidates and
                                sharing insights.
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
                        </WhoIAmCard>
                      </GatsbyLink>
                    </Slide>
                  </Col>
                  <Col
                    xs={24}
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
                      Why it matters to you?
                    </Title>
                    <Paragraph
                      size="normal"
                      textOpacity={opacity.title}
                      align="center"
                    >
                      I've seen dozens of resumes, preliminary tasks, did
                      theoretical, practical interviews, and collected my own
                      "good & bad" parts.
                    </Paragraph>
                    <Paragraph align="center">
                      <Row gutter={[8, 16]} justify="center">
                        {recruiterSkills.map((skill) => (
                          <Col xs={6} sm={4} key={skill.type}>
                            <Skill {...skill} />
                          </Col>
                        ))}
                      </Row>
                    </Paragraph>
                  </Col>
                </Row>
              </ExceptLg>
              <LgOnly>
                <Row align="middle" justify="center" gutter={[32, 32]}>
                  <Col
                    xs={24}
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
                      Why it matters to you?
                    </Title>
                    <Paragraph
                      size="normal"
                      textOpacity={opacity.title}
                      align="center"
                    >
                      I've seen dozens of resumes, preliminary tasks, did
                      theory, practical interviews, and collected my own "good &
                      bad" parts.
                    </Paragraph>
                    <Paragraph align="center">
                      <Row gutter={[8, 16]} justify="center">
                        {recruiterSkills.map((skill) => (
                          <Col xs={6} sm={4} key={skill.type}>
                            <Skill {...skill} />
                          </Col>
                        ))}
                      </Row>
                    </Paragraph>
                  </Col>
                  <Col xs={22} lg={9}>
                    <Slide right>
                      <GatsbyLink to="/#bigsondev-newsletter-landing">
                        <WhoIAmCard>
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
                                I enjoy brainstorming with candidates and
                                sharing insights.
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
                        </WhoIAmCard>
                      </GatsbyLink>
                    </Slide>
                  </Col>
                </Row>
              </LgOnly>
            </Col>
            <Col span={24}>
              <Row align="middle" justify="center" gutter={[32, 32]}>
                <Col xs={22} lg={9}>
                  <Slide left>
                    <Link
                      href="https://www.codementor.io/@bigsondev"
                      textDecoration="none"
                    >
                      <WhoIAmCard>
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
                              I care about mentees and watching them succeed
                              drives me.
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
                      </WhoIAmCard>
                    </Link>
                  </Slide>
                </Col>
                <Col
                  xs={24}
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
                    Why choose me as your Mentor?
                  </Title>
                  <Paragraph
                    size="normal"
                    textOpacity={opacity.title}
                    align="center"
                  >
                    I always seek for maximum effectiveness of learning. I'm
                    leading a study group of my most active mentees which can
                    skyrocket your progress even more.
                  </Paragraph>
                  <Paragraph align="center">
                    <Row gutter={[4, 24]} justify="center">
                      {mentorSkills.map((skill) => (
                        <Col xs={6} sm={4} key={skill.type}>
                          <Skill {...skill} />
                        </Col>
                      ))}
                    </Row>
                  </Paragraph>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center">
            <GatsbyLink to="/mentorship/">
              <Button type="promo">Skyrocket your career</Button>
            </GatsbyLink>
          </Row>
          <Box margin={`${spacing.large} 0 0 0`}>
            <Row justify="center">
              <Col xs={22} lg={12}>
                <Box margin={`0 0 ${spacing.large} 0`}>
                  <Title
                    level={3}
                    transform="none"
                    align="center"
                    color={colors.primary}
                    fontSize={fontSize.superLarge}
                    fontWeight={fontWeight.stronger}
                  >
                    I wouldn't be where I am today if I wasn't working for those
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
              Unsure? Let's hop on a free call to discuss the details of
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
              <Link href="https://www.codementor.io/@bigsondev">
                <SocialLinkHolder>
                  <Icon type="codementor" width="2.5rem" />
                </SocialLinkHolder>
              </Link>
              <Link href="https://mentorcruise.com/mentor/AdrianBigaj/">
                <SocialLinkHolder>
                  <Icon type="mentorCruise" width="2.5rem" />
                </SocialLinkHolder>
              </Link>
              <SocialLinkHolder href="https://www.linkedin.com/in/adrian-bigaj-282277130/">
                <Icon type="linkedin" width="2.5rem" />
              </SocialLinkHolder>
              <SocialLinkHolder href="https://twitter.com/BigsonDev">
                <Icon type="twitter" width="2.5rem" />
              </SocialLinkHolder>
            </Space>
          </SocialsHolder>
        )}
      </DesktopOnly>
    </>
  );
};
