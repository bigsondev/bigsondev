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
  SecondaryButton,
  Box,
  Link,
  SlackBanner,
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
          <Title level={2} align="center" id="bigsondev-faq">
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
                      <Text strong>Yes</Text>. The time I've spent on learning,
                      going through courses, tutorials, books won't back to me.
                      When I landed my first JS job and had a dedicated Mentor,
                      it was almost a shock of how quickly another person could
                      speed up my learning curve. The progress I made during
                      that time was on another level compared to all the
                      available resources on the Web.
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
                      code?{' '}
                      <Text strong>
                        If you're here, something tells me that you've already
                        decided
                      </Text>
                      .
                    </Text>
                  </Col>
                </Row>
              </PanelHolder>
              <PanelHolder header={<SecondaryButton>Why you?</SecondaryButton>}>
                <Row justify="center">
                  <Col xs={22} lg={16} xxl={14}>
                    <Text>
                      I love coaching/mentoring others. It fills me with
                      excitement when I can share my knowledge on any topic but
                      especially in Frontend. Friends & family always says I
                      have that{' '}
                      <Text strong>
                        unique ability to motivate others and voluntary
                        willingness to help
                      </Text>
                      . It just lives inside of me.
                    </Text>
                  </Col>
                </Row>
              </PanelHolder>
              <PanelHolder
                header={<SecondaryButton>How do you mentor?</SecondaryButton>}
              >
                <Row justify="center">
                  <Col xs={22} lg={16} xxl={14}>
                    <Text>
                      We'll meet on <Link href="https://zoom.us/">Zoom</Link>.{' '}
                      <Text strong>
                        Best if you prepare a stable internet connection and
                        check your microphone upfront
                      </Text>
                      . I'll screen share but won't record the meeting. Instead,
                      I'll send detailed feedback after the call to your email
                      (provided upon payment). Each session is unique and I'll
                      treat you individually. You can tell me what should be our
                      focus during the session, but I can come up with some
                      ideas as well. Usually, these are practicing code
                      challenges, learning theory, live coding, building things
                      from the scratch, brainstorming together, doing
                      code/project reviews, talking about design/architecture,
                      tools, flows/processes in companies, good habits, best
                      practices, learning methods and much more.
                    </Text>
                  </Col>
                </Row>
              </PanelHolder>
              <PanelHolder
                header={<SecondaryButton>Frontend Mentoring</SecondaryButton>}
              >
                <Row justify="center">
                  <Col xs={22} lg={16} xxl={14}>
                    <Text>
                      If you need to improve your code, get detailed project
                      reviews, learn good habits & best practices, work on your
                      CV together, receive feedback, or even do some homework,
                      it'll suit you the best. We'll start from small talk, get
                      to know each other and I'll do my best to improve your
                      Frontend skills, including aiming you in the right
                      direction. I'll happily answer all the questions related
                      to being a Team Leader, working on big, scaling projects,
                      learning methods, newest trends, recommended tools &
                      solutions in the Frontend.{' '}
                      <Text strong>Homework, support & feedback included</Text>.
                    </Text>
                  </Col>
                </Row>
              </PanelHolder>
              <PanelHolder
                header={<SecondaryButton>Mock Interview</SecondaryButton>}
              >
                <Row justify="center">
                  <Col xs={22} lg={16} xxl={14}>
                    <Text>
                      <Text strong>
                        I've been a Technical Recruiter for 2 years
                      </Text>
                      . I interviewed many candidates and also was reviewed many
                      times. Let's do a warm-up, pre-interview call where I'll
                      simulate a real Technical Interview, with questions, code
                      challenges adjusted to your skill level. After the call,
                      you'll get robust feedback with proposed solutions and
                      answers to the questions. I'll measure your experience in
                      relation to the skill level and share some tips on how to
                      improve even further. After all, you should have a fair
                      understanding of where you are in the career, what are the
                      next steps, and bottlenecks, including how to work them
                      out.
                    </Text>
                  </Col>
                </Row>
              </PanelHolder>
              <PanelHolder
                header={<SecondaryButton>Development Plan</SecondaryButton>}
              >
                <Row justify="center">
                  <Col xs={22} lg={16} xxl={14}>
                    <Text>
                      <Text strong>
                        Best for newcomers & career switchers with beginner or
                        zero Frontend knowledge.
                      </Text>{' '}
                      Unique, the individual development plan for any skill
                      level. Includes real-world projects, building things from
                      the scratch, daily plan on how to practice code with the
                      best resources, optimized for you. 100+ days covered.
                      Additionally, you can always write to me through an email,
                      slack, ask questions, get some feedback, support when you
                      are stuck. I'll be happy to share my expertise with you.
                    </Text>
                  </Col>
                </Row>
              </PanelHolder>
            </CollapseHolder>
            <Box margin="5rem 0 0 0">
              <Row justify="center">
                <Col xs={22} sm={12}>
                  <Title level={2} align="center" id="bigsondev-faq">
                    Warm Welcome ❤️
                  </Title>
                  <Paragraph align="center">
                    I'm really happy you are here, let's build a better Frontend
                    together. <br />
                    Earn, share, care.
                  </Paragraph>
                </Col>
              </Row>
            </Box>
            <Row justify="center">
              <Col xs={22} sm={20}>
                <Box mt={5} mb={10}>
                  <SlackBanner id="bigsondev-slack" />
                </Box>
              </Col>
            </Row>
          </div>
        </Section>
      </Box>
    </Layout>
  );
};

export default StartHere;
