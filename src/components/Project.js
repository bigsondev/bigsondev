import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Row, Col, Rate, Divider, List, Space } from 'antd';
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

const MainCardHolder = styled(MainCard)(({ theme }) => ({
  padding: `${theme.spacing.medium}`,
}));

const { fontSize } = theme;

const TAG_COLOR_MAPPER = {
  html: '#ffc069',
  css: '#91d5ff',
  js: '#ffec3d',
  react: '#73adf5',
  api: '#43853D',
  'socket.io': '#000',
};

const howToStartList = [
  <Text size="small">
    Be{' '}
    <Link size="small" href="https://www.atlassian.com/agile">
      Agile!
    </Link>{' '}
    Plan your work upfront either with{' '}
    <Link size="small" href="https://www.scrum.org/resources/what-is-scrum">
      Scrum
    </Link>{' '}
    or{' '}
    <Link
      size="small"
      href="https://kanbanize.com/kanban-resources/getting-started/what-is-kanban"
    >
      Kanban
    </Link>{' '}
    by creating e.g.{' '}
    <Link size="small" href="https://trello.com/">
      Trello
    </Link>{' '}
    board for this project.
  </Text>,
  <Text size="small">
    Open the design by clicking the button under the above image.
  </Text>,
  <Text size="small">
    Get familiar with design, it contains all the assets (except icons sometimes
    - use e.g. fontawesome), CSS properties you'll need to use.
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

export const Project = ({
  fluid,
  title,
  tags,
  icon,
  desc,
  designLink,
  bdsLink,
  difficulty,
  slug,
  isLegacy,
  features = [],
  additionalFeatures = [],
  coreConcepts = [],
  technologies = [],
}) => {
  return (
    <Row>
      <Col xs={24}>
        <MainCardHolder>
          <Row gutter={[100, 24]}>
            <Col xs={24} md={12}>
              <Image fluid={fluid} alt={title} style={{ margin: 0 }} />
              <Box margin="1rem 0 0 0" style={{ textAlign: 'center' }}>
                <Space size="large" direction="vertical">
                  <Text>
                    {isLegacy
                      ? 'A revamped version of this project is available in my new application.'
                      : 'This is a brand-new project only available in my application.'}
                  </Text>
                  <Link href={bdsLink}>
                    <Button type="promo">Try out on BigDevSoon</Button>
                  </Link>
                </Space>
              </Box>
              <Box margin="1.5rem 0 0 0">
                <span id="bigsondev-ad-holder" />
              </Box>
            </Col>
            <Col xs={24} md={12}>
              <TitleHolder>
                <IconHolder type={`${icon}Tag`} width={48} />
                <Title
                  marginBottom="0.25rem"
                  fontSize={fontSize.medium}
                  transform="capitalize"
                >
                  {title}
                </Title>
                <Row gutter={[16, 8]}>
                  {tags.split(',').map((tag) => (
                    <Col key={tag}>
                      <Text
                        transform="uppercase"
                        strong
                        size="small"
                        color={TAG_COLOR_MAPPER[tag.trim()]}
                      >
                        {tag}
                      </Text>
                    </Col>
                  ))}
                </Row>
              </TitleHolder>
              <Box margin="1.5rem 0 0 0">
                <Paragraph size="preNormal" marginBottom="0">
                  {desc}
                </Paragraph>
              </Box>
              <Box margin="2.5rem 0 0 0">
                <Row justify="space-between" gutter={[0, 24]}>
                  <Col xs={24} md={12}>
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
              {isLegacy && (
                <Box margin="2rem 0 0rem 0">
                  <Link href={designLink}>
                    <Button>View Adobe XD design (legacy)</Button>
                  </Link>
                  <Box pt={2}>
                    <Paragraph size="preNormal">
                      Adobe XD design is free. You can use this design for your
                      portfolio/website without any limitations. Additionally,
                      you can share the completed project wherever you want.
                    </Paragraph>
                    <Paragraph size="preNormal">
                      <Text strong>Note</Text>: All new designs will be coming
                      through BigDevSoon with Figma. This one is considered a
                      legacy design but will always be here.
                    </Paragraph>
                  </Box>
                </Box>
              )}
            </Col>
            <Col xs={24}>
              <Divider />
            </Col>
            {isLegacy && (
              <>
                <Col xs={24} md={12}>
                  <Title level={4} transform="none">
                    Read me first
                  </Title>
                  <Paragraph size="preNormal">
                    The goal of this project is to build a {title} similar to
                    the design above.
                  </Paragraph>
                  <Paragraph size="preNormal">
                    Technologies & tools will be proposed down below but feel
                    free to use different ones if you're more familiar with
                    them. Have fun along the way.
                  </Paragraph>
                  <Paragraph size="preNormal" strong>
                    Project requirements
                  </Paragraph>
                  <PostList data={features} />
                  <Paragraph size="preNormal" strong>
                    Additional requirements
                  </Paragraph>
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
                    <Link
                      size="preNormal"
                      href="https://code.visualstudio.com/"
                    >
                      VSCode
                    </Link>{' '}
                    for example, and create e.g. a{' '}
                    <Link size="preNormal" href="https://github.com/">
                      GitHub
                    </Link>{' '}
                    repository with custom deployment. More about it in the
                    "Build & Deploy" section.
                  </Paragraph>
                  <Paragraph size="preNormal" strong>
                    First steps
                  </Paragraph>
                  <PostList data={howToStartList} />
                </Col>
                <Col xs={24}>
                  <Divider />
                </Col>
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
                <Col xs={24}>
                  <Divider />
                </Col>
                <Col xs={24} md={12}>
                  <Title level={4} transform="none">
                    Stuck, can't progress?
                  </Title>
                  <Paragraph size="preNormal">
                    Take a break, think about all the pieces you need to build
                    for this project.
                  </Paragraph>
                  <Paragraph size="preNormal">
                    You can try out the{' '}
                    <Link size="preNormal" href="https://bigdevsoon.me/">
                      BigDevSoon
                    </Link>{' '}
                    platform to maximize your learning effectiveness.
                  </Paragraph>
                </Col>
                <Col xs={24} md={12}>
                  <Title level={4} transform="none">
                    Build & Deploy
                  </Title>
                  <Paragraph size="preNormal">
                    If you decided on CodeSandbox, there should be a "Share"
                    button that you can use as a link for your completed
                    project.{' '}
                  </Paragraph>
                  <Paragraph size="preNormal">
                    Otherwise, for simple, static projects (HTML, CSS,
                    JavaScript) you can try{' '}
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
                    should be good. If the project has a little bit of Backend,
                    try{' '}
                    <Link size="preNormal" href="https://heroku.com/">
                      Heroku
                    </Link>{' '}
                    for it.
                  </Paragraph>
                </Col>
                <Col xs={24}>
                  <Divider />
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
                    with the link to the completed project and/or GitHub repo.
                    All the mentees would love to see what you've built (and me
                    too).
                  </Paragraph>
                </Col>
              </>
            )}
          </Row>
        </MainCardHolder>
      </Col>
    </Row>
  );
};
