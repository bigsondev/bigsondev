import React from 'react';
import { Row, Col, Space, Divider } from 'antd';

import { Title, Text, Box, Link, PostList, PromoButton } from '..';

export const NotStarted = ({ questionsCount, onStartClick }) => (
  <>
    <Title level={3}>Before you Start</Title>
    <PostList
      data={[
        <Text size="preNormal">
          There are <strong>{questionsCount} questions</strong> without time
          limit, maximum score is <strong>{questionsCount} points</strong>.
        </Text>,
        <Text size="preNormal">
          Each question has 4 possible answers,
          <strong> but only one is correct</strong>.
        </Text>,
        <Text size="preNormal">You can take the Quiz at anytime.</Text>,
      ]}
    />
    <Row>
      <Col span={24}>
        <Box mt={4}>
          <PromoButton size="small" onClick={onStartClick}>
            Start
          </PromoButton>
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
