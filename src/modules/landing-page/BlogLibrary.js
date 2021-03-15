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
              <Link to="/projects/landing-page-project/">
                <Card>
                  <ProjectImage
                    fluid={firstProject}
                    alt="Landing Page Project"
                  />
                  <ProjectTitle
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                  >
                    Landing Page
                  </ProjectTitle>
                  <ProjectDescription
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                    size="small"
                  >
                    Build a real-world Landing Page just as you would for the
                    client
                  </ProjectDescription>
                  <ProjectLink to="/projects/landing-page-project/">
                    <Button type="ghost">View project</Button>
                  </ProjectLink>
                </Card>
              </Link>
            </Col>
            <Col xs={22} sm={16} md={13} lg={8}>
              <Link to="/projects/calculator-app-project/">
                <Card>
                  <ProjectImage
                    fluid={secondProject}
                    alt="Calculator App Project"
                  />
                  <ProjectTitle
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                  >
                    Calculator App
                  </ProjectTitle>
                  <ProjectDescription
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                    size="small"
                  >
                    Create your own calculator with the ability to switch themes
                  </ProjectDescription>
                  <ProjectLink to="/projects/calculator-app-project/">
                    <Button type="ghost">View project</Button>
                  </ProjectLink>
                </Card>
              </Link>
            </Col>
            <Col xs={22} sm={16} md={13} lg={8}>
              <Link to="/projects/notes-app-project/">
                <Card>
                  <ProjectImage fluid={thirdProject} alt="Notes App Project" />
                  <ProjectTitle
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                  >
                    Notes App
                  </ProjectTitle>
                  <ProjectDescription
                    color={colors.white}
                    fontWeight={fontWeight.stronger}
                    size="small"
                  >
                    Learn React by building your first serious project in it
                  </ProjectDescription>
                  <ProjectLink to="/projects/notes-app-project/">
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
