import React from 'react';

import { Row, Col } from 'antd';

import {
  theme,
  Title,
  Paragraph,
  Illustration,
  MainCard,
  ShareIcons,
  Box,
} from '.';

export const KnowledgePill = ({
  title,
  type = 'boy',
  desc,
  code,
  explanation,
  interactiveExample,
}) => (
  <Row gutter={[0, 24]}>
    <Col span={24}>
      <MainCard>
        <Row justify="center">
          <Col span={24}>
            <Title
              level={3}
              transform="capitalize"
              align="center"
              marginBottom="0"
              fontSize={theme.fontSize.superLarge}
              fontWeight={theme.fontWeight.stronger}
            >
              <Row justify="center" align="center" gutter={[16, 16]}>
                <Col>{title}</Col>
                <Col>
                  <Illustration
                    type={type === 'girl' ? 'girlPill' : 'boyPill'}
                    width={48}
                    style={{ marginTop: -6 }}
                  />
                </Col>
              </Row>
            </Title>
          </Col>
          <Col span={24} sm={22}>
            <Paragraph align="center">{desc}</Paragraph>
          </Col>
          <Col>
            <Box mb={1}>
              <ShareIcons title={title} />
            </Box>
          </Col>
        </Row>
      </MainCard>
    </Col>
    <Col span={24}>
      <MainCard>
        <Row justify="center">
          <Col span={24}>
            <Title
              level={3}
              transform="none"
              align="center"
              fontSize={theme.fontSize.superLarge}
              fontWeight={theme.fontWeight.stronger}
            >
              Code
            </Title>
          </Col>
          <Col span={24}>{code}</Col>
          <Col span={24}>
            <Box mt={3}>
              <Title level={4} transform="none" align="center">
                Explanation
              </Title>
            </Box>
          </Col>
          <Col xs={24} sm={22}>
            <Paragraph align="center" size="preNormal" fontStyle="italic">
              {explanation}
            </Paragraph>
          </Col>
        </Row>
      </MainCard>
    </Col>
    <Col span={24}>
      <MainCard>
        <Row justify="center">
          <Col span={24}>
            <Title
              level={3}
              transform="none"
              align="center"
              fontSize={theme.fontSize.superLarge}
              fontWeight={theme.fontWeight.stronger}
            >
              Interactive example
            </Title>
          </Col>
          <Col span={24}>{interactiveExample}</Col>
        </Row>
      </MainCard>
    </Col>
  </Row>
);
