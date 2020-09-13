import React from 'react';
import { Row, Col, Button, Space, Divider } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Section, Title, Text, Box, Link, QuickSummary } from '..';

const StartButton = styled(Button)({
  width: 150,
  textTransform: 'uppercase',
  borderRadius: 12,
});

const InfoIcon = styled(InfoCircleOutlined)({
  marginRight: 8,
});

export const NotStarted = ({ title, desc, questionsCount, onStartClick }) => (
  <>
    <Section>
      <Box mb={5}>
        <Title>{title}</Title>
      </Box>
      <QuickSummary desc={desc} />
      <Title level={3}>Before you Start</Title>
      <Space direction="vertical">
        <Text>
          <InfoIcon /> There are <strong>{questionsCount} questions</strong>{' '}
          without time limit, maximum score is{' '}
          <strong>{questionsCount} points</strong>
        </Text>
        <Text>
          <InfoIcon /> Each question has 4 possible answers,
          <strong> but only one is correct</strong>
        </Text>
        <Text>
          <InfoIcon /> You can take the Quiz at anytime
        </Text>
      </Space>
    </Section>
    <Row>
      <Col span={24}>
        <Box mt={4}>
          <StartButton type="primary" size="large" onClick={onStartClick}>
            Start
          </StartButton>
        </Box>
      </Col>
      {/* Add Learning Resources if there are any */}
      {false && (
        <Col span={24}>
          <Box mt={4}>
            <Divider />
            <Space direction="vertical">
              <Title level={4}>Learning Resources</Title>
              <Link size="small">Placeholder 1</Link>
              <Link size="small">Placeholder 2</Link>
              <Link size="small">Placeholder 3</Link>
              <Link size="small">Placeholder 4</Link>
            </Space>
          </Box>
        </Col>
      )}
    </Row>
  </>
);
