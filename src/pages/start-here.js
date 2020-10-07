import React from 'react';
import { Row, Col, Collapse } from 'antd';
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
  Link,
  SecondaryButton,
  Box,
} from '~components';

const GatsbyLinkHolder = styled(GatsbyLink)({
  textDecoration: 'underline !important',
});

const CollapseHolder = styled(Collapse)({
  background: 'transparent !important',
  border: 'none !important',

  '& .ant-collapse-content': {
    border: 'none',
  },
});

const PanelHolder = styled(Collapse.Panel)({
  background: 'transparent',
  border: 'none !important',

  '& .ant-collapse-header': {
    padding: '0 !important',
  },

  '& .ant-collapse-arrow': {
    display: 'none !important',
  },
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
    I know JS, HTML, CSS, React, React Native, Phaser, Node.js. I specialize in
    Web/Frontend Development, but also have some fair knowledge about
    Architecture, Design, UX/UI, Backend (REST/GraphQL), but I'm not a Backend
    Developer by any means.
  </Text>,
  <Text size="preNormal">
    If you decide on my{' '}
    <GatsbyLinkHolder to="/mentorship/">mentorship</GatsbyLinkHolder>, I'm not
    just doing it, I will help & support you during your journey. We can stay in
    touch on Slack, through email, social, or just anywhere.
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
    <Link
      onClick={() => {
        window.location.href = '/#bigsondev-newsletter-landing';
      }}
    >
      newsletter
    </Link>
    . You will get 2 free PDFs (18 pages) about Frontend Technical Interview.
    Read a <GatsbyLinkHolder to="/blog/">blog</GatsbyLinkHolder>, do some coding
    challenges in the{' '}
    <GatsbyLinkHolder to="/library/">library</GatsbyLinkHolder>, or just{' '}
    <GatsbyLinkHolder to="/reach-out">reach out</GatsbyLinkHolder> to me for a
    free conversation.
  </Text>,
];

const StartHere = () => {
  return (
    <Layout fixedContent={false}>
      <SEO title="Start Here | Cheat Sheet To Save Your Time, FAQ & A Warm Welcome" />
      <Box margin="0 0 7rem 0">
        <Section fullWidth>
          <Title level={2} align="center">
            Getting Started
          </Title>
          <Row justify="center">
            <Col xs={22} sm={12}>
              <Paragraph align="center">
                Let's get to know each other. I prepared a Cheat Sheet & FAQ to
                help you get around the website. And, I didn't forget about a
                Warm Welcome ❤️
              </Paragraph>
            </Col>
            <Col xs={22} lg={16} xxl={14}>
              <PostCard title="Cheat Sheet" data={cheatSheetData} />
            </Col>
          </Row>
          <Title level={2} align="center">
            FAQ
          </Title>
          <div style={{ textAlign: 'center' }}>
            <CollapseHolder>
              <PanelHolder
                header={<SecondaryButton>Do I need a Mentor?</SecondaryButton>}
              >
                <Row justify="center">
                  <Col xs={22} lg={16} xxl={14}>
                    <Text>
                      Yes. The time I've spent on learning, going through
                      courses, tutorials, books won't back to me. When I landed
                      my first JS job, and had a dedicated Mentor, it was almost
                      a shock how quickly another person can speed up the
                      learning curve for me. Progress which I made during that
                      time was on another level compared to all the available
                      resources on the Web.
                    </Text>
                  </Col>
                </Row>
              </PanelHolder>
              <PanelHolder
                header={<SecondaryButton>Is Frontend for me?</SecondaryButton>}
              >
                <Row justify="center">
                  <Col xs={22} lg={16} xxl={14}>
                    <Text>
                      Do you like creating & composing things? Can you feel a
                      little bit of excitement when thinking about creating your
                      first website, an application, or even a small chunk of
                      code? If you're here, something tells me that you've
                      already decided.
                    </Text>
                  </Col>
                </Row>
              </PanelHolder>
            </CollapseHolder>
          </div>
        </Section>
      </Box>
    </Layout>
  );
};

export default StartHere;
