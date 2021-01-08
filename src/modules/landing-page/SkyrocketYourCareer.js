import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'gatsby';
import styled from 'styled-components';

import {
  theme,
  Title,
  Text,
  Illustration,
  MainCard,
  Box,
  Button,
} from '~components';

const { colors, fontSize, fontWeight, spacing, opacity } = theme;

const Holder = styled.div(({ theme }) => ({
  position: 'relative',
}));

export const PromoCard = styled(MainCard)(() => ({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
}));

export const SkyrocketYourCareer = () => {
  return (
    <Holder id="bigsondev-skyrocket-your-career">
      <Box padding={`${spacing.extraLarge} 0`}>
        <Title
          align="center"
          transform="none"
          marginBottom={spacing.large}
          color={colors.primary}
          fontSize={fontSize.superLarge}
          fontWeight={fontWeight.stronger}
        >
          Mentorship services
        </Title>
        <Row justify="center" gutter={[24, 24]}>
          <Col xs={22} sm={16} md={13} lg={8}>
            <Link to="/mentorship/">
              <PromoCard>
                <Row justify="center" gutter={[0, 25]}>
                  <Col span={17}>
                    <Illustration type="mentor" />
                  </Col>
                  <Col span={24}>
                    <Title
                      level={4}
                      transform="none"
                      align="center"
                      marginBottom="0"
                      fontSize={fontSize.large}
                      fontWeight={fontWeight.stronger}
                    >
                      Spot mentoring
                    </Title>
                  </Col>
                  <Col span={22}>
                    <Text
                      align="center"
                      display="block"
                      size="small"
                      textOpacity={opacity.title}
                    >
                      Code review, debugging, learning, and problem solving
                      together.
                    </Text>
                  </Col>
                </Row>
              </PromoCard>
            </Link>
          </Col>
          <Col xs={22} sm={16} md={13} lg={8}>
            <Link to="/mentorship/">
              <PromoCard>
                <Row justify="center" gutter={[0, 22]}>
                  <Col span={18}>
                    <Illustration type="buildProject" />
                  </Col>
                  <Col span={22}>
                    <Title
                      level={4}
                      transform="none"
                      align="center"
                      marginBottom="0"
                      fontSize={fontSize.large}
                      fontWeight={fontWeight.stronger}
                    >
                      Project mentoring
                    </Title>
                  </Col>
                  <Col span={24}>
                    <Text
                      align="center"
                      display="block"
                      size="small"
                      textOpacity={opacity.title}
                    >
                      Plan, design and build your own project with the help of a
                      mentor.
                    </Text>
                  </Col>
                </Row>
              </PromoCard>
            </Link>
          </Col>
          <Col xs={22} sm={16} md={13} lg={8}>
            <Link to="/mentorship/">
              <PromoCard>
                <Row justify="center" gutter={[0, 24]}>
                  <Col span={16}>
                    <Illustration type="developmentPlan" />
                  </Col>
                  <Col span={24}>
                    <Title
                      level={4}
                      transform="none"
                      align="center"
                      marginBottom="0"
                      fontSize={fontSize.large}
                      fontWeight={fontWeight.stronger}
                    >
                      Tailored mentoring
                    </Title>
                  </Col>
                  <Col span={22}>
                    <Text
                      align="center"
                      display="block"
                      size="small"
                      textOpacity={opacity.title}
                    >
                      Fully-packed support and collaboration to get the bests
                      results.
                    </Text>
                  </Col>
                </Row>
              </PromoCard>
            </Link>
          </Col>
        </Row>
        <Box margin={`${spacing.large} 0 0 0`}>
          <Row justify="center">
            <Link to="/mentorship/">
              <Button type="promo">Skyrocket your career</Button>
            </Link>
          </Row>
        </Box>
      </Box>
    </Holder>
  );
};
