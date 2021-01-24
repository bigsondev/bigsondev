import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Row, Col, Space } from 'antd';

import {
  VegeLandingProject,
  BookCoverProject,
  TodoAppProject,
  RealtimeChatProject,
} from '~assets';

import {
  theme,
  Title,
  Text,
  Link,
  Paragraph,
  MainCard,
  PostList,
  ShareIcons,
  Box,
  Image,
} from '.';

const PROJECTS_MAPPER = {
  'vege-landing': VegeLandingProject,
  'book-cover': BookCoverProject,
  'todo-app': TodoAppProject,
  'realtime-chat': RealtimeChatProject,
};

export const Project = ({
  title,
  image,
  desc,
  buttons,
  requirements,
  fundamentals,
  additionals,
  stuckText,
  buildText,
}) => (
  <Row gutter={[0, 24]}>
    <Col xs={24}>
      <MainCard>
        <Title
          align="center"
          transform="none"
          marginBottom="0"
          color={theme.colors.primary}
          fontSize={theme.fontSize.large}
          fontWeight={theme.fontWeight.stronger}
        >
          {title}
        </Title>
        <Row justify="center">
          {image && (
            <Col span={22}>
              <Image src={PROJECTS_MAPPER[image]} alt={desc} />
            </Col>
          )}
          <Col xs={22}>
            <Paragraph align="center">
              <Text strong>Assignment:</Text> {desc}
            </Paragraph>
          </Col>
          <Col style={{ marginRight: '2rem' }}>{buttons}</Col>
        </Row>
        <Box mt={3}>
          <Paragraph align="center">
            <ShareIcons title={title} />
          </Paragraph>
        </Box>
      </MainCard>
    </Col>
    <Col xs={24}>
      <MainCard>
        <Title level={3}>Project Requirements</Title>
        <PostList data={requirements} />
      </MainCard>
    </Col>
    <Col xs={24}>
      <MainCard>
        <Title level={3}>Fundamental Features</Title>
        <PostList data={fundamentals} />
      </MainCard>
    </Col>
    <Col xs={24}>
      <MainCard>
        <Title level={3}>Additional Features</Title>
        <PostList data={additionals} />
      </MainCard>
    </Col>
    <Col xs={24}>
      <MainCard>
        <Title level={3}>Stuck, can't progress?</Title>
        <Paragraph>{stuckText}</Paragraph>
        <Paragraph>
          I'll be happy to assist you with this project, you can try out my{' '}
          <GatsbyLink to="/mentorship/">Mentorship</GatsbyLink> or connect
          through <GatsbyLink to="/#bigsondev-slack">Slack</GatsbyLink> where
          I'll answer all of the related questions. You can also join there the
          study group along with other mentees.
        </Paragraph>
        <Paragraph>Team is the power. 🙇‍♂️</Paragraph>
      </MainCard>
    </Col>
    <Col>
      <MainCard>
        <Title level={3}>Building & Deploying</Title>
        <Paragraph>{buildText}</Paragraph>
      </MainCard>
    </Col>
    <Col>
      <MainCard>
        <Title level={3}>Share your solution</Title>
        <Paragraph>
          You can tweet{' '}
          <Link href="https://twitter.com/BigsonDev">@BigsonDev</Link> and
          mention @BigsonDev with the link to the repo and deployed application.
          I'd love to see what you've built.
        </Paragraph>
        <Paragraph>
          Join the <GatsbyLink to="/#bigsondev-slack">Slack</GatsbyLink> group
          and add a link to your solution in the <Text strong>#review</Text>{' '}
          channel. I'll pick it up and come back to you with robust feedback.{' '}
        </Paragraph>
        <Paragraph>Make a difference. Sharing is caring. ❤️</Paragraph>
      </MainCard>
    </Col>
  </Row>
);
