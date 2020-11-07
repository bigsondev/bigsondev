import React from 'react';
import { Row, Col } from 'antd';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

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

const GatsbyLinkHolder = styled(GatsbyLink)({
  textDecoration: 'underline !important',
});

const cheatSheetData = [
  <Text size="preNormal">
    My ultimate goal is to{' '}
    <Text size="preNormal" strong>
      share knowledge with you
    </Text>
    .
  </Text>,
  <Text size="preNormal">
    My combined experience of being a Frontend Developer, Recruiter & Mentor is{' '}
    <Text size="preNormal" strong>
      12 years
    </Text>
    .
  </Text>,
  <Text size="preNormal">
    I know JS, HTML, CSS, React, React Native, Phaser, Node.js, a bit of Angular
    and Vue. I specialize in Web/Frontend Development, but also have some fair
    knowledge about Architecture, Design, UX/UI, Backend (REST/GraphQL), but I'm
    not a Backend Developer by any means.
  </Text>,
  <Text size="preNormal">
    If you decide on my{' '}
    <GatsbyLinkHolder to="/mentorship/#bigsondev-offer">
      mentorship
    </GatsbyLinkHolder>
    , I'm not just doing it, I will help & support you during your journey. We
    can stay in touch on{' '}
    <GatsbyLinkHolder to="/start-here/#bigsondev-slack">Slack</GatsbyLinkHolder>
    , through email, social, or just anywhere.
  </Text>,
  <Text size="preNormal">
    I've been a leader of multiple teams, working for many different companies.
    I'll be happy to prepare a plan aimed just for you, with real-world
    projects, building things from the scratch, and{' '}
    <Text size="preNormal" strong>
      finding a job in 3-6 months
    </Text>{' '}
    (no joke).
  </Text>,
  <Text size="preNormal">
    If mentorship feels a bit intimidating, start by subscribing to a{' '}
    <GatsbyLinkHolder size="preNormal" to="/#bigsondev-newsletter-landing">
      newsletter
    </GatsbyLinkHolder>
    . You will get 2 free PDFs (19 pages) about Frontend Technical Interviewing.
    Read a <GatsbyLinkHolder to="/blog/">blog</GatsbyLinkHolder>, do some coding
    challenges in the{' '}
    <GatsbyLinkHolder to="/library/">library</GatsbyLinkHolder>, or just{' '}
    <GatsbyLinkHolder to="/reach-out/">reach out</GatsbyLinkHolder> to me for a
    free conversation.
  </Text>,
];

const StartHere = () => {
  return (
    <Layout fixedContent={false}>
      <SEO title="Start Here | Cheat Sheet To Save Your Time & A Warm Welcome" />
      <Box margin="0 0 7rem 0">
        <Section fullWidth>
          <Title level={2} align="center">
            Getting Started 
          </Title>
          <Row justify="center">
            <Col xs={22} sm={12}>
              <Paragraph align="center">
                You can find a Cheat Sheet below to help you get around the
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
