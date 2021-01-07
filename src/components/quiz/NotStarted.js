import React from 'react';
import { Row, Col, Space, Divider } from 'antd';

import { Title, Text, Box, Link, PostList, Button, MainCard } from '..';

export const NotStarted = ({ questionsCount, onStartClick }) => (
  <MainCard>
    <Title level={3}>Before you Start</Title>
    <PostList
      data={[
        <Text>
          There are <strong>{questionsCount} questions</strong> without time
          limit, maximum score is <strong>{questionsCount} points</strong>.
        </Text>,
        <Text>
          Each question has 4 possible answers,
          <strong> but only one is correct</strong>.
        </Text>,
        <Text>You can take the Quiz at anytime.</Text>,
      ]}
    />
    <Row justify="center">
      <Col>
        <Box mt={4}>
          <Button type="promo" onClick={onStartClick}>
            Start
          </Button>
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
  </MainCard>
);
