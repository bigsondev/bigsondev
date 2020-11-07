import React from 'react';
import { Row, Collapse, Col } from 'antd';
import styled from 'styled-components';

import { Link, SecondaryButton, Title, Text } from '~components';

const Holder = styled.div({
  padding: '0 1rem 5rem 1rem',
  background: '#FAFAFA',
});

const CollapseHolder = styled(Collapse)({
  background: 'transparent !important',
  border: 'none !important',

  '& .ant-collapse-content': {
    border: 'none',
    background: '#FAFAFA',
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

export const FAQ = () => (
  <Holder>
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
                <Text strong>Yes</Text>. The time I've spent on learning, going
                through courses, tutorials, books won't back to me. When I
                landed my first JS job and had a dedicated Mentor, it was almost
                a shock of how quickly another person could speed up my learning
                curve. The progress I made during that time was on another level
                compared to all the available resources on the Web.
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
                Do you like creating & composing things? Can you feel a little
                bit of excitement when thinking about creating your first
                website, an application, or even a small chunk of code?{' '}
                <Text strong>
                  If you're here, something tells me that you've already decided
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
                I love coaching/mentoring others. It fills me with excitement
                when I can share my knowledge on any topic but especially in
                Frontend. Friends & family always says I have that{' '}
                <Text strong>
                  unique ability to motivate others and voluntary willingness to
                  help
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
                  Best if you prepare a stable internet connection and check
                  your microphone upfront
                </Text>
                . I'll screen share but won't record the meeting. Instead, I'll
                send detailed feedback after the call to your email (provided
                upon payment). Each session is unique and I'll treat you
                individually. You can tell me what should be our focus during
                the session, but I can come up with some ideas as well. Usually,
                these are practicing code challenges, learning theory, live
                coding, building things from the scratch, brainstorming
                together, doing code/project reviews, talking about
                design/architecture, tools, flows/processes in companies, good
                habits, best practices, learning methods and much more.
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
                If you need to improve your code, get detailed project reviews,
                learn good habits & best practices, work on your CV together,
                receive feedback, or even do some homework, it'll suit you the
                best. We'll start from small talk, get to know each other and
                I'll do my best to improve your Frontend skills, including
                aiming you in the right direction. I'll happily answer all the
                questions related to being a Team Leader, working on big,
                scaling projects, learning methods, newest trends, recommended
                tools & solutions in the Frontend.{' '}
                <Text strong>Homework, support & feedback included</Text>.
              </Text>
            </Col>
          </Row>
        </PanelHolder>
        <PanelHolder header={<SecondaryButton>Mock Interview</SecondaryButton>}>
          <Row justify="center">
            <Col xs={22} lg={16} xxl={14}>
              <Text>
                <Text strong>I've been a Technical Recruiter for 2 years</Text>.
                I interviewed many candidates and also was interviewed many
                times. Let's do a warm-up, pre-interview call where I'll
                simulate a real Technical Interview, with questions, code
                challenges adjusted to your skill level. After the call, you'll
                get robust feedback with proposed solutions and answers to the
                questions. I'll measure your experience in relation to the skill
                level and share some tips on how to improve even further. After
                all, you should have a fair understanding of where you are in
                the career, what are the next steps, and bottlenecks, including
                how to work them out.
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
                  Best for newcomers & career switchers with beginner or zero
                  Frontend knowledge.
                </Text>{' '}
                Unique, the individual development plan for any skill level.
                Includes a real-world project, building things from the scratch,
                optimized for you. Additionally, you can always write to me
                through an email, slack, ask questions, get some feedback,
                support when you are stuck. I'll be happy to share my expertise
                with you.
              </Text>
            </Col>
          </Row>
        </PanelHolder>
      </CollapseHolder>
    </div>
  </Holder>
);
