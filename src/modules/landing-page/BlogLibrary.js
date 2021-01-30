import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Zoom from 'react-reveal/Zoom';

import {
  VegeLandingProject,
  TodoAppProject,
  RealtimeChatProject,
} from '~assets';
import {
  theme,
  Title,
  Paragraph,
  Button,
  Box,
  SmallOnly,
  ExceptSmall,
  MainCard,
} from '~components';

const Holder = styled.div({
  position: 'relative',
});

const Card = styled(MainCard)(({ theme }) => ({
  cursor: 'pointer',
  padding: 0,
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    background: theme.colors.primary,
    '& > img': {
      opacity: 0,
    },
    '& > div, & > a, & > div > h1': {
      opacity: 1,
    },
  },
}));

const ProjectImage = styled.img(({ theme }) => ({
  width: '100%',
  borderRadius: theme.borders.radius,
  transition: 'all 0.2s ease-in-out',
}));

const ProjectTitle = styled(Title)(({ theme }) => ({
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  transition: 'all 0.2s ease-in-out',

  opacity: 0,
}));

const ProjectDescription = styled(Paragraph)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  textAlign: 'center',
  transition: 'all 0.2s ease-in-out',

  opacity: 0,
}));

const ProjectLink = styled(Link)({
  position: 'absolute',
  top: '75%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transition: 'all 0.1s ease-in',
  opacity: 0,
});

const { colors, fontSize, fontWeight, spacing } = theme;

export const BlogLibrary = () => {
  return (
    <Holder>
      <Box padding={`${spacing.extraLarge} 0`}>
        <Title
          transform="none"
          align="center"
          color={colors.primary}
          fontSize={fontSize.superLarge}
          fontWeight={fontWeight.stronger}
        >
          Boost your Frontend skills
        </Title>
        <Title
          level={3}
          transform="none"
          align="center"
          marginBottom={spacing.large}
          fontSize={fontSize.large}
          strong
        >
          Projects
        </Title>
        <Zoom right>
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={22} sm={16} md={13} lg={8}>
              <Card>
                <ProjectImage src={VegeLandingProject} />
                <ProjectTitle
                  color={colors.white}
                  fontWeight={fontWeight.stronger}
                >
                  Vege Landing
                </ProjectTitle>
                <ProjectDescription
                  color={colors.white}
                  fontWeight={fontWeight.stronger}
                  size="small"
                >
                  Create beautiful landing page with HTML and CSS
                </ProjectDescription>
                <ProjectLink to="/library/vege-landing-project/">
                  <Button type="ghost">View project</Button>
                </ProjectLink>
              </Card>
            </Col>
            <Col xs={22} sm={16} md={13} lg={8}>
              <Card>
                <ProjectImage src={TodoAppProject} />
                <ProjectTitle
                  color={colors.white}
                  fontWeight={fontWeight.stronger}
                >
                  Todo App
                </ProjectTitle>
                <ProjectDescription
                  color={colors.white}
                  fontWeight={fontWeight.stronger}
                  size="small"
                >
                  A classic, must-have project for all beginners in Frontend
                </ProjectDescription>
                <ProjectLink to="/library/todo-app-project/">
                  <Button type="ghost">View project</Button>
                </ProjectLink>
              </Card>
            </Col>
            <Col xs={22} sm={16} md={13} lg={8}>
              <Card>
                <ProjectImage src={RealtimeChatProject} />
                <ProjectTitle
                  color={colors.white}
                  fontWeight={fontWeight.stronger}
                >
                  Realtime Chat
                </ProjectTitle>
                <ProjectDescription
                  color={colors.white}
                  fontWeight={fontWeight.stronger}
                  size="small"
                >
                  Learn fullstack development with Next.js and Express
                </ProjectDescription>
                <ProjectLink to="/library/realtime-chat-project/">
                  <Button type="ghost">View project</Button>
                </ProjectLink>
              </Card>
            </Col>
          </Row>
        </Zoom>
        <Row justify="center" gutter={[24, 24]}>
          <Box margin={`${spacing.large} 0 0 0`}>
            <Title
              level={3}
              transform="none"
              align="center"
              fontSize={fontSize.large}
              strong
            >
              And even more learning
            </Title>
            <SmallOnly>
              <Col
                xs={22}
                sm={16}
                xl={7}
                xxl={6}
                style={{ textAlign: 'center', paddingRight: 0 }}
              >
                <Space size="large" direction="vertical">
                  <Link to="/blog/">
                    <Button type="primary">Read articles on Blog</Button>
                  </Link>
                  <Link to="/pills/">
                    <Button type="secondary">Eat knowledge pills</Button>
                  </Link>
                </Space>
              </Col>
            </SmallOnly>
            <ExceptSmall>
              <Col
                xs={22}
                sm={16}
                xl={7}
                xxl={6}
                style={{ textAlign: 'center' }}
              >
                <Space size="large">
                  <Link to="/blog/">
                    <Button type="primary">Read articles on Blog</Button>
                  </Link>
                  <Link to="/pills/">
                    <Button type="secondary">Eat knowledge pills</Button>
                  </Link>
                </Space>
              </Col>
            </ExceptSmall>
          </Box>
        </Row>
      </Box>
    </Holder>
  );
};
