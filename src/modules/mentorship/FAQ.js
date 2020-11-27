import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { theme, Link, Title, Paragraph, Box } from '~components';

const { colors, fontSize, fontWeight, spacing, opacity } = theme;

const Holder = styled.div({
  position: 'relative',
});

export const FAQ = () => (
  <Holder>
    <Box padding={`${spacing.extraLarge} 0`}>
      <Title
        transform="none"
        align="center"
        marginBottom={spacing.large}
        color={colors.primary}
        fontSize={fontSize.superLarge}
        fontWeight={fontWeight.stronger}
      >
        Frequently asked questions
      </Title>
      <Row justify="center" gutter={[40, 24]}>
        <Col xs={22} lg={12}>
          <Title
            level={4}
            transform="none"
            align="center"
            fontSize={fontSize.large}
            fontWeight={fontWeight.stronger}
          >
            What is the benefit of having a mentor?
          </Title>
          <Paragraph size="small" textOpacity={opacity.title} align="center">
            When I landed my first Frontend job and had a dedicated Mentor, it
            was almost a shock of how quickly another person could speed up my
            learning curve. The progress I made during that time was on another
            level compared to all the available resources on the Web.
          </Paragraph>
        </Col>
        <Col xs={22} lg={12}>
          <Title
            level={4}
            transform="none"
            align="center"
            fontSize={fontSize.large}
            fontWeight={fontWeight.stronger}
          >
            Is Frontend for me?
          </Title>
          <Paragraph size="small" textOpacity={opacity.title} align="center">
            Do you like creating & composing things? Can you feel a little bit
            of excitement when thinking about creating your first website, an
            application, or even a small chunk of code? If you're here,
            something tells me you've already decided.
          </Paragraph>
        </Col>
        <Col xs={22} lg={12}>
          <Title
            level={4}
            transform="none"
            align="center"
            fontSize={fontSize.large}
            fontWeight={fontWeight.stronger}
          >
            Why you as a mentor?
          </Title>
          <Paragraph size="small" textOpacity={opacity.title} align="center">
            I love teaching. It fills me with excitement when I can share my
            knowledge on any topic but especially in Frontend. Friends & family
            always say I have a unique ability to motivate others and a
            voluntary willingness to help.
          </Paragraph>
        </Col>
        <Col xs={22} lg={12}>
          <Title
            level={4}
            transform="none"
            align="center"
            fontSize={fontSize.large}
            fontWeight={fontWeight.stronger}
          >
            How to prepare for the session?
          </Title>
          <Paragraph size="small" textOpacity={opacity.title} align="center">
            We'll meet on{' '}
            <Link href="https://zoom.us/" size="small">
              Zoom
            </Link>
            . Best if you prepare a stable internet connection and check your
            microphone upfront. I'll send detailed feedback after the call to
            your email or through Slack chat.
          </Paragraph>
        </Col>
      </Row>
    </Box>
  </Holder>
);
