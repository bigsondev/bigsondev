import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { theme, Title, Text, Illustration, MainCard, Box } from '~components';

const { colors, fontSize, fontWeight, spacing, opacity } = theme;

const Holder = styled.div({
  width: '100vw',
  position: 'relative',
  background: '#F5F5F5',
});

export const SkyrocketYourCareer = () => {
  return (
    <Holder id="bigsondev-skyrocket-your-career">
      <Box padding={`${spacing.extraLarge} ${spacing.medium}`}>
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
          <Col xs={22} sm={16} xl={7} xxl={6}>
            <MainCard>
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
            </MainCard>
          </Col>
          <Col xs={22} sm={16} xl={7} xxl={6}>
            <MainCard>
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
                    Plan, design and build a real-world project with the help of
                    a mentor.
                  </Text>
                </Col>
              </Row>
            </MainCard>
          </Col>
          <Col xs={22} sm={16} xl={7} xxl={6}>
            <MainCard>
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
                    Long-term mentoring
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
            </MainCard>
          </Col>
        </Row>
      </Box>
    </Holder>
  );
};
