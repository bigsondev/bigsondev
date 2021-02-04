import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Row, Col, Space, Rate, Divider, List } from 'antd';
import styled from 'styled-components';

import {
  theme,
  Title,
  Text,
  Link,
  Paragraph,
  MainCard,
  PostList,
  Box,
  Button,
  Icon,
  Image,
} from '.';

const RateHolder = styled(Rate)({
  '& .ant-rate-star-full path': {
    fill: '#F9B060',
  },
  '& .ant-rate-star-zero path': {
    fill: '#f0f0f0',
  },
});

const TitleHolder = styled.div({
  position: 'relative',
  paddingLeft: '4.5rem',
});

const IconHolder = styled(Icon)({
  position: 'absolute',
  left: 0,
});

const { colors } = theme;

const TAG_COLOR_MAPPER = {
  html: '#ffc069',
  css: '#91d5ff',
  js: '#ffec3d',
  react: '#73adf5',
  express: '#43853D',
  'socket.io': '#000',
};

const howToStartList = [
  <Text size="small">
    Open the design by clicking the button under the above image.
  </Text>,
  <Text size="small">
    Get familiar with design, it contains all the assets (except icons sometimes
    - use e.g. fontawesome listed below), CSS properties you'll need to use.
  </Text>,
  <Text size="small">
    After deciding on either CodeSandbox or GitHub repo, set your project with
    initial files, directory structure (your own preference).
  </Text>,
  <Text size="small">
    Nothing will stop you now. Don't forget to share a link once you completed
    the project!
  </Text>,
];

const wallOfFameRequirements = [
  <Text size="small">
    Link to the completed project (CodeSandbox link or completed project link
    with GitHub repo link).
  </Text>,
  <Text size="small">Your nickname. (brand name, something spicy 🔥)</Text>,
  <Text size="small">
    Portfolio/Website/GitHub link you would like to share with the world.
  </Text>,
];

export const Project = ({
  fluid,
  title,
  tags,
  icon,
  desc,
  designLink,
  difficulty,
  slug,
  features = [],
  additionalFeatures = [],
  coreConcepts = [],
  technologies = [],
  solutions = [],
  scrollTip = true,
}) => (
  <Row>
    <Col xs={24}>
      <MainCard>
        <Row gutter={[100, 24]}>
          <Col xs={24} md={12}>
            <Image fluid={fluid} alt={title} style={{ margin: 0 }} />
            <Box margin="1rem 0 0 0" style={{ textAlign: 'center' }}>
              <Link href={designLink}>
                <Button type="promo">View Adobe XD design</Button>
              </Link>
            </Box>
            {scrollTip && (
              <Box margin="1rem 0 0 0">
                <Paragraph size="preNormal" align="center">
                  <Text strong>Note: </Text> Zoom out the design to see its all
                  parts.
                </Paragraph>
              </Box>
            )}
          </Col>
          <Col xs={24} md={12}>
            <TitleHolder>
              <IconHolder type={`${icon}Tag`} width={48} />
              <Title level={4} marginBottom="0" transform="capitalize">
                {title}
              </Title>
              <Space size="middle">
                {tags.split(',').map((tag) => (
                  <Text
                    key={tag}
                    transform="uppercase"
                    strong
                    size="small"
                    color={TAG_COLOR_MAPPER[tag.trim()]}
                  >
                    {tag}
                  </Text>
                ))}
              </Space>
            </TitleHolder>
            <Box margin="1.5rem 0 0 0">
              <Paragraph size="preNormal" marginBottom="0">
                {desc}
              </Paragraph>
            </Box>
            <Box margin="2.5rem 0 0 0">
              <Row justify="space-between" gutter={[0, 24]}>
                <Col>
                  <Title level={5} marginBottom="0" transform="none">
                    Designed by
                  </Title>
                  <Link
                    size="preNormal"
                    href="https://www.behance.net/milenaulman"
                    strong
                  >
                    Milena Ulman
                  </Link>
                </Col>
                <Col>
                  <Title level={5} marginBottom="0" transform="none">
                    Difficulty
                  </Title>
                  <RateHolder
                    character={<Icon type="duck" width={24} />}
                    value={difficulty}
                    disabled
                  />
                </Col>
              </Row>
            </Box>
            <Box margin="2rem 0 0 0">
              <Paragraph size="preNormal" strong>
                It's free and always will. You can use this design for your
                portfolio/website without any limitations.
              </Paragraph>
            </Box>
          </Col>
          <Divider />
          <Col xs={24} md={12}>
            <Title level={4} transform="none">
              Read me first
            </Title>
            <Paragraph size="preNormal">
              The goal of this project is to build a {title} similar to the
              design above.
            </Paragraph>
            <Paragraph size="preNormal">
              Technologies & tools will be proposed down below but feel free to
              use different ones if you're more familiar with them. Have fun
              along the way.
            </Paragraph>
            <Paragraph size="preNormal">Project requirements:</Paragraph>
            <PostList data={features} />
            <Paragraph size="preNormal">Additional requirements:</Paragraph>
            <PostList data={additionalFeatures} />
          </Col>
          <Col xs={24} md={12}>
            <Title level={4} transform="none">
              How to start
            </Title>
            <Paragraph size="preNormal">
              In most cases,{' '}
              <Link size="preNormal" href="https://codesandbox.io/">
                CodeSandbox
              </Link>{' '}
              will be the best place for starting out rapidly.
            </Paragraph>
            <Paragraph size="preNormal">
              You could also use an IDE,{' '}
              <Link size="preNormal" href="https://code.visualstudio.com/">
                VSCode
              </Link>{' '}
              for example, and create e.g. a{' '}
              <Link size="preNormal" href="https://github.com/">
                GitHub
              </Link>{' '}
              repository with custom deployment. More about it in the "Build &
              Deploy" section.
            </Paragraph>
            <Paragraph size="preNormal">First steps:</Paragraph>
            <PostList data={howToStartList} />
          </Col>
          <Divider />
          <Col xs={24} md={12}>
            <Title level={4} transform="none">
              Technologies & Tools
            </Title>
            <PostList data={technologies} />
          </Col>
          <Col xs={24} md={12}>
            <Title level={4} transform="none">
              Core concepts
            </Title>
            <PostList data={coreConcepts} />
          </Col>
          <Divider />
          <Col xs={24} md={12}>
            <Title level={4} transform="none">
              Stuck, can't progress?
            </Title>
            <Paragraph size="preNormal">
              Take a break, think about all the pieces you need to build for
              this project.
            </Paragraph>
            <Paragraph size="preNormal">
              I'll be happy to assist you with this project, you can try out my{' '}
              <GatsbyLink to="/mentorship/">Mentorship</GatsbyLink> or/and
              connect to a study group on{' '}
              <GatsbyLink to={`${slug}#bigsondev-slack`}>Slack</GatsbyLink>{' '}
              where I and mentees will be able to answer your questions.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Title level={4} transform="none">
              Build & Deploy
            </Title>
            <Paragraph size="preNormal">
              If you decided on CodeSandbox, there should be a "Share" button
              that you can use as a link for your completed project.{' '}
            </Paragraph>
            <Paragraph size="preNormal">
              Otherwise, for simple, static projects (HTML, CSS, JavaScript) you
              can try{' '}
              <Link size="preNormal" href="https://pages.github.com/">
                GitHub Pages
              </Link>
              . For more complex deployments (React, etc.),{' '}
              <Link size="preNormal" href="https://www.netlify.com/">
                Netlify
              </Link>{' '}
              or{' '}
              <Link size="preNormal" href="https://vercel.com/">
                Vercel
              </Link>{' '}
              should be good. If the project has a little bit of Backend, try{' '}
              <Link size="preNormal" href="https://heroku.com/">
                Heroku
              </Link>{' '}
              for it.
            </Paragraph>
          </Col>
          <Divider />
          <Col xs={24} md={12}>
            <Title level={4} transform="none">
              Review & Feedback
            </Title>
            <Paragraph size="preNormal">
              Before you share the completed project, feel free to post it on{' '}
              <GatsbyLink to={`${slug}#bigsondev-slack`}>Slack</GatsbyLink> for
              review, someone might pick it up and give honest feedback, maybe
              even propose better code. After all, we all want to improve as
              Developers.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Title level={4} transform="none">
              Share your solution
            </Title>
            <Paragraph size="preNormal">
              It would be amazing if you can tweet{' '}
              <Link size="preNormal" href="https://twitter.com/BigsonDev">
                @BigsonDev
              </Link>{' '}
              with the link to the completed project and/or GitHub repo. All the
              mentees would love to see what you've built (and me too).
            </Paragraph>
          </Col>
          <Divider />
          <Col xs={24}>
            <Title level={4} transform="none">
              Wall of Fame
            </Title>
            <List
              itemLayout="vertical"
              split={false}
              dataSource={solutions}
              locale={{
                emptyText: 'Be the first one to land on the Wall of Fame.',
              }}
              renderItem={(item) => <div />}
            />
            <Box margin="2rem 0 0 0">
              <Paragraph size="preNormal">
                To get in the Wall of Fame, I'll need a couple of things.
              </Paragraph>
              <PostList data={wallOfFameRequirements} />
              <Paragraph size="preNormal">
                If I missed your solution, please, contact me via the{' '}
                <GatsbyLink to="/reach-out/">Reach Out form</GatsbyLink>.{' '}
              </Paragraph>
              <Paragraph size="preNormal" strong>
                I can't promise every solution will land on the Wall of Fame, it
                needs to be neat and crispy.
              </Paragraph>
            </Box>
          </Col>
        </Row>
      </MainCard>
    </Col>
  </Row>
);
