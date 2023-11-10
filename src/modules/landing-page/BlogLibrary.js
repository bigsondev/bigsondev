import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Zoom from 'react-reveal/Zoom';

import {
  theme,
  Title,
  Paragraph,
  Button,
  Box,
  SmallOnly,
  ExceptSmall,
  MainCard,
  Image,
} from '~components';

const Holder = styled.div({
  position: 'relative',
});

const Card = styled(MainCard)(({ theme }) => ({
  cursor: 'pointer',
  padding: 0,
  transition: 'all 0.3s ease-in-out',
  '& > figure': {
    margin: 0,
  },

  '&:hover': {
    background: theme.colors.primary,
    '& > figure': {
      opacity: 0,
    },
    '& > div, & > a, & > div > h1': {
      opacity: 1,
    },
  },
}));

const ProjectImage = styled(Image)(({ theme }) => ({
  width: '100%',
  transition: 'all 0.3s ease-in-out',
}));

const ProjectTitle = styled(Title)(({ theme }) => ({
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',

  opacity: 0,
}));

const ProjectDescription = styled(Paragraph)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',

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

export const BlogLibrary = ({ firstProject, secondProject, thirdProject }) => {
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
          Projects to practice
        </Title>
        <Zoom right>
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={22} sm={16} md={13} lg={8}>
              <Link to="/projects/quiz-app-project/">
                <Card>
                  <ProjectImage fluid={firstProject} alt="Quiz App Project" />
                  <ProjectTitle
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                  >
                    Quiz App
                  </ProjectTitle>
                  <ProjectDescription
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                    size="small"
                  >
                    Interactive web quiz with 10 new questions in each
                    playthrough.
                  </ProjectDescription>
                  <ProjectLink to="/projects/quiz-app-project/">
                    <Button type="ghost">View project</Button>
                  </ProjectLink>
                </Card>
              </Link>
            </Col>
            <Col xs={22} sm={16} md={13} lg={8}>
              <Link to="/projects/music-player-project/">
                <Card>
                  <ProjectImage
                    fluid={secondProject}
                    alt="Music Player Project"
                  />
                  <ProjectTitle
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                  >
                    Music Player
                  </ProjectTitle>
                  <ProjectDescription
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                    size="small"
                  >
                    Application for seamless song playback with fundamental
                    controls.
                  </ProjectDescription>
                  <ProjectLink to="/projects/music-player-project/">
                    <Button type="ghost">View project</Button>
                  </ProjectLink>
                </Card>
              </Link>
            </Col>
            <Col xs={22} sm={16} md={13} lg={8}>
              <Link to="/projects/level-editor-project/">
                <Card>
                  <ProjectImage
                    fluid={thirdProject}
                    alt="Level Editor Project"
                  />
                  <ProjectTitle
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                  >
                    Level Editor
                  </ProjectTitle>
                  <ProjectDescription
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                    size="small"
                  >
                    Web-based editor designed for creating game levels with
                    ease.
                  </ProjectDescription>
                  <ProjectLink to="/projects/level-editor-project/">
                    <Button type="ghost">View project</Button>
                  </ProjectLink>
                </Card>
              </Link>
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
                    <Button type="secondary">Take knowledge pills</Button>
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
                    <Button type="secondary">Take knowledge pills</Button>
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
