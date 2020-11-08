import React from 'react';
import { Row, Col } from 'antd';
import { Link as GatsbyLink } from 'gatsby';
import { openPopupWidget } from 'react-calendly';

import {
  Layout,
  Section,
  SEO,
  Title,
  Paragraph,
  PostCard,
  Text,
  Box,
  SlackBanner,
} from '~components';

const openFreeConsultationEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/free-consultation',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const cheatSheetData = [
  <Text>
    I recommend to start from reading articles on{' '}
    <GatsbyLink to="/blog/">Blog</GatsbyLink>, I'm focusing on sharing expertise
    knowledge there.
  </Text>,
  <Text>
    If you don't like too much theory,{' '}
    <GatsbyLink to="/library/">Library</GatsbyLink> will be a good place to
    learn by building. There is a selection of real-world projects, coding
    challenges and quizes.
  </Text>,
  <Text>
    If you are seeking for more knowledge,{' '}
    <GatsbyLink to="/mentorship/#bigsondev-offer">Mentorship</GatsbyLink> might
    be a good idea to boost your skills.{' '}
  </Text>,
  <Text>
    Looking for a chat, code review, getting some tips & tricks related to your
    career or Frontend in general? Join{' '}
    <GatsbyLink to="/start-here/#bigsondev-slack">Slack</GatsbyLink>, it's free
    of charge.
  </Text>,
  <Text>
    Still unsure of what to do?{' '}
    <GatsbyLink to="/start-here/" onClick={openFreeConsultationEvent}>
      Reserve
    </GatsbyLink>{' '}
    a free 15 minutes consultation with me. We can get to know each other and
    decide on what to do next. You can also{' '}
    <GatsbyLink to="/reach-out/">Reach Out</GatsbyLink> to me via email.
  </Text>,
  <Text>
    To stay up-to-date with updates on this website you can of course follow me
    on various socials (scroll down to footer). Additionally, I have a{' '}
    <GatsbyLink to="/#bigsondev-newsletter-landing">Newsletter</GatsbyLink> to
    which you can subscribe.
  </Text>,
  <Text>Have fun along the way.</Text>,
];

const StartHere = () => {
  return (
    <Layout fixedContent={false}>
      <SEO title="Start Here | Cheat Sheet To Save Your Time" />
      <Box margin="0 0 7rem 0">
        <Section fullWidth>
          <Title level={2} align="center">
            Get Started
          </Title>
          <Row justify="center">
            <Col xs={22} sm={12}>
              <Paragraph align="center">
                Please, read a Cheat Sheet below to easier get around the
                website.
              </Paragraph>
            </Col>
            <Col xs={22} lg={16} xxl={14}>
              <PostCard title="Cheat Sheet" data={cheatSheetData} />
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={20} xxl={16}>
              <Box mt={5} mb={10}>
                <SlackBanner id="bigsondev-slack" />
              </Box>
            </Col>
          </Row>
        </Section>
      </Box>
    </Layout>
  );
};

export default StartHere;
