import React from 'react';
import { Row, Col, Space } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { openPopupWidget } from 'react-calendly';

import {
  theme,
  Title,
  Paragraph,
  Text,
  Illustration,
  Button,
  Box,
  MainCard,
  SmallOnly,
  ExceptSmall,
  Link,
  Icon,
} from '~components';

const { colors, fontSize, fontWeight, spacing, opacity } = theme;

const Holder = styled.div({
  position: 'relative',
});

const SuperOfferCard = styled(MainCard)(({ theme }) => ({
  border: `3px solid ${theme.colors.promo}`,
}));

const BuyButton = styled(Button)({
  marginTop: 'auto',
});

const CheckIcon = styled(CheckOutlined)(({ theme, color }) => ({
  fontSize: theme.fontSize.base,
  '& > svg': {
    fill: color,
  },
}));

const openMentoringEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/spot-mentoring',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const openProjectMentoringEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/project-mentoring',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const openTailoredMentoringEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/tailored-mentoring',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const openFreeConsultationEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/free-consultation',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

export const Offer = () => {
  return (
    <Holder>
      <Box padding={`0 0 ${spacing.extraLarge} 0`}>
        <Title
          align="center"
          transform="none"
          color={colors.promo}
          fontSize={fontSize.extraLarge}
          fontWeight={fontWeight.stronger}
        >
          Skyrocket your career
        </Title>
        <Row justify="center">
          <Col xs={22} md={16}>
            <Paragraph
              align="center"
              marginBottom={spacing.large}
              fontWeight={fontWeight.stronger}
              size="medium"
            >
              It's easy to get stuck in tutorials hell. I've been there and I
              don't want you to go through this alone. If you are a newcomer or
              just looking to improve as a Developer, I'll be happy to guide and
              support.
            </Paragraph>
          </Col>
        </Row>
        <Row justify="center" gutter={[24, 24]}>
          <Col xs={22} sm={16} md={13} xl={8}>
            <MainCard>
              <Row justify="center" gutter={[0, 24]}>
                <Col span={10}>
                  <Illustration type="smallRocket" />
                </Col>
                <Col span={24}>
                  <Title
                    level={3}
                    align="center"
                    transform="none"
                    color={colors.primary}
                    fontWeight={fontWeight.stronger}
                  >
                    Spot mentoring
                  </Title>
                  <Paragraph
                    size="small"
                    textOpacity={opacity.title}
                    align="center"
                  >
                    1 hour of conversation with targeted feedback, proposed
                    development path, and exemplary assignments.
                  </Paragraph>
                  <Paragraph
                    size="small"
                    textOpacity={opacity.title}
                    align="center"
                    strong
                  >
                    Good for existing developers who seek to improve.
                  </Paragraph>
                </Col>
                <Col span={24}>
                  <Box display="flex" justify="center">
                    <Space>
                      <Title
                        level={1}
                        align="center"
                        color={colors.grayLevelNine}
                      >
                        $60
                      </Title>
                    </Space>
                  </Box>
                </Col>
                <Col span={22}>
                  <Space size="small" direction="vertical">
                    <Space size="small">
                      <CheckIcon color={colors.primary} />
                      <Text textOpacity={1} size="small">
                        Do mock interview
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.primary} />
                      <Text textOpacity={1} size="small">
                        Get robust feedback
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.primary} />
                      <Text textOpacity={1} size="small">
                        Receive development plan
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.primary} />
                      <Text textOpacity={1} size="small">
                        Learn coding life hacks
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.primary} />
                      <Text textOpacity={1} size="small">
                        Acknowledge best practices
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.primary} />
                      <Text textOpacity={1} size="small">
                        Set goals & assignments
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.primary} />
                      <Text textOpacity={1} size="small">
                        Work with other mentees
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.primary} />
                      <Text textOpacity={1} size="small">
                        Gain support through Slack
                      </Text>
                    </Space>
                  </Space>
                </Col>
              </Row>
              <Box margin={`${spacing.small} 0 0 0`} />
              <BuyButton type="primary" onClick={openMentoringEvent}>
                Book a session
              </BuyButton>
            </MainCard>
          </Col>
          <Col xs={22} sm={16} md={13} xl={8}>
            <MainCard>
              <Row justify="center" gutter={[0, 24]}>
                <Col span={10}>
                  <Illustration type="mediumRocket" />
                </Col>
                <Col span={24}>
                  <Title
                    level={3}
                    align="center"
                    transform="none"
                    color={colors.additional}
                    fontWeight={fontWeight.stronger}
                  >
                    Project mentoring
                  </Title>
                  <Paragraph
                    size="small"
                    textOpacity={opacity.title}
                    align="center"
                  >
                    4 hours in total over course of a month. Build a project
                    with modern technology stack and best practices.
                  </Paragraph>
                  <Paragraph
                    size="small"
                    textOpacity={opacity.title}
                    align="center"
                    strong
                  >
                    Better for beginners who seek to dive into Frontend.
                  </Paragraph>
                </Col>
                <Col span={24}>
                  <Box display="flex" justify="center">
                    <Space>
                      <Title
                        level={1}
                        align="center"
                        color={colors.grayLevelNine}
                      >
                        $220
                      </Title>
                    </Space>
                  </Box>
                </Col>
                <Col span={22}>
                  <Space size="small" direction="vertical">
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small" strong>
                        Spot mentoring, and:
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small" strong>
                        Work in Agile methodology
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small" strong>
                        Prepare wireframes & design
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small" strong>
                        Build & deploy your project
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small" strong>
                        Get real-world experience
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small">
                        Learn HTML, CSS, JS, React
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small">
                        Discover Git, Terminal, IDE
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small">
                        Obtain npm, Node.js, Webpack
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small">
                        Try TypeScript, Redux, GraphQL
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small">
                        Connect to the server with API
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.additional} />
                      <Text textOpacity={1} size="small">
                        Code & brainstorm with Mentor
                      </Text>
                    </Space>
                  </Space>
                </Col>
              </Row>
              <Box margin={`${spacing.small} 0 0 0`} />
              <BuyButton type="additional" onClick={openProjectMentoringEvent}>
                Build a project
              </BuyButton>
            </MainCard>
          </Col>
          <Col xs={22} sm={16} md={13} xl={8}>
            <SuperOfferCard>
              <Row justify="center" gutter={[0, 24]}>
                <Col span={10}>
                  <Illustration type="largeRocket" />
                </Col>
                <Col span={24}>
                  <Title
                    level={3}
                    align="center"
                    transform="none"
                    color={colors.promo}
                    fontWeight={fontWeight.stronger}
                  >
                    Tailored mentoring
                  </Title>
                  <Paragraph
                    size="small"
                    textOpacity={opacity.title}
                    align="center"
                  >
                    12 hours in total over course of 3 months. Create a
                    portfolio with projects and find dream Frontend job.
                  </Paragraph>
                  <Paragraph
                    size="small"
                    textOpacity={opacity.title}
                    align="center"
                    strong
                  >
                    Best for career switchers who seek real progress.
                  </Paragraph>
                </Col>
                <Col span={24}>
                  <Box display="flex" justify="center">
                    <Space>
                      <Title
                        level={1}
                        align="center"
                        color={colors.grayLevelNine}
                      >
                        $600
                      </Title>
                    </Space>
                  </Box>
                </Col>
                <Col span={22}>
                  <Space size="small" direction="vertical">
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small" strong>
                        Project mentoring, and:
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small" strong>
                        Get the Linkedin referral
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small" strong>
                        Create a portfolio
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small" strong>
                        Build 3 unique projects
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small" strong>
                        Use JAMStack
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small" strong>
                        Learn user behaviour tools
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small" strong>
                        Test with jest and Cypress
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small">
                        Practice algorithms and logic
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small">
                        Improve self-confidence
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small">
                        Craft your resume
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small">
                        Listen to my insights
                      </Text>
                    </Space>
                    <Space size="small">
                      <CheckIcon color={colors.promo} />
                      <Text textOpacity={1} size="small">
                        Find dream Frontend job
                      </Text>
                    </Space>
                  </Space>
                </Col>
              </Row>
              <Box margin={`${spacing.small} 0 0 0`} />
              <BuyButton type="promo" onClick={openTailoredMentoringEvent}>
                Change your career
              </BuyButton>
            </SuperOfferCard>
          </Col>
          <Col span={22}>
            <Paragraph
              align="center"
              strong
              size="preNormal"
              type="secondary"
              marginBottom="0"
            >
              I'm a verified Mentor on{' '}
              <Link
                size="preNormal"
                href="https://www.codementor.io/@bigsondev"
              >
                codementor
              </Link>
              .
            </Paragraph>
          </Col>
        </Row>
        <Box margin={`${spacing.large} 0`}>
          <Title
            transform="none"
            align="center"
            color={colors.primary}
            fontSize={fontSize.superLarge}
            fontWeight={fontWeight.stronger}
          >
            How it works
          </Title>
        </Box>
        <Row justify="center" gutter={40}>
          <Col xs={18} lg={8}>
            <Box display="flex" justify="center">
              <Icon type="call" width={64} />
            </Box>
            <Title
              level={4}
              transform="none"
              align="center"
              fontSize={fontSize.large}
              fontWeight={fontWeight.stronger}
              color={colors.primary}
            >
              1. Hop on a call
            </Title>
            <Paragraph
              display="block"
              size="small"
              textOpacity={opacity.title}
              align="center"
            >
              We'll build your profile and adjust individual, effective learning
              path, you'll receive compact resources and assignments.
            </Paragraph>
          </Col>
          <Col xs={18} lg={8}>
            <Box display="flex" justify="center">
              <Icon type="support" width={64} />
            </Box>
            <Title
              level={4}
              transform="none"
              align="center"
              fontSize={fontSize.large}
              fontWeight={fontWeight.stronger}
              color={colors.primary}
            >
              2. Unlimited support
            </Title>
            <Paragraph size="small" textOpacity={opacity.title} align="center">
              I invite all of my mentees to Slack, where we collaborate in
              real-time through chat and you can ask any burning questions.
            </Paragraph>
          </Col>
          <Col xs={18} lg={8}>
            <Box display="flex" justify="center">
              <Icon type="build" width={64} />
            </Box>
            <Title
              level={4}
              transform="none"
              align="center"
              fontSize={fontSize.large}
              fontWeight={fontWeight.stronger}
              color={colors.primary}
            >
              3. Build, build, build
            </Title>
            <Paragraph size="small" textOpacity={opacity.title} align="center">
              To learn code, you have to build things. Iterate, improve and
              reward yourself often, I'll happily support you during this
              fantastic journey.
            </Paragraph>
          </Col>
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
                  I've gained confidence and became an expert thanks to those
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
  );
};
