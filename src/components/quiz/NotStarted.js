import React from 'react';
import { Row, Col, Button, Space } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Section, Title, Text, Box, Link } from '..';

const StartButton = styled(Button)({
  width: 150,
  textTransform: 'uppercase',
  borderRadius: 12,
});

export const NotStarted = ({ desc, questionsCount, onStartClick }) => (
  <>
    <Section>
      <Row gutter={[0, 8]}>
        <Col span={24}>
          <Title level={4}>{desc}</Title>
        </Col>
        <Col span={24}>
          <Text>
            <InfoCircleOutlined /> There are{' '}
            <strong>{questionsCount} questions</strong> without time limit,
            maximum score is <strong>{questionsCount} points</strong>
          </Text>
        </Col>
        <Col span={24}>
          <Text>
            <InfoCircleOutlined /> Each question has 4 possible answers,
            <strong> but only one is correct</strong>
          </Text>
        </Col>
        <Col span={24}>
          <Text>
            <InfoCircleOutlined /> You can take the Quiz at anytime
          </Text>
        </Col>
        <Col span={24}>
          <Text>
            <InfoCircleOutlined /> If you want to prepare before starting, check
            out below links
          </Text>
        </Col>
      </Row>
    </Section>
    <Row>
      <Col span={24}>
        <Box mt={2}>
          <StartButton type="primary" size="large" onClick={onStartClick}>
            Start
          </StartButton>
        </Box>
      </Col>
      <Col span={24}>
        <Box mt={5}>
          <Space direction="vertical">
            <Title level={4}>Learning Resources</Title>
            <Link size="small">Placeholder 1</Link>
            <Link size="small">Placeholder 2</Link>
            <Link size="small">Placeholder 3</Link>
            <Link size="small">Placeholder 4</Link>
          </Space>
        </Box>
      </Col>
    </Row>
  </>
);
