import React from 'react';
import { Space, Badge, Tooltip } from 'antd';
import styled from 'styled-components';

import { Text, Box } from '~components';

const TasksHolder = styled.div({
  padding: 16,
});

export const Tasks = ({ tasks, executedTests }) => (
  <TasksHolder>
    <Text strong color="#FFF" display="block" size="small">
      Tests
    </Text>
    <Box pl={0.25}>
      <Space size="small">
        {tasks.map((test, index) => (
          <div key={index}>
            {executedTests.length > 0 ? (
              executedTests[index] ? (
                <Tooltip title={test}>
                  <Badge status="success" />
                </Tooltip>
              ) : (
                <Tooltip title={test}>
                  <Badge status="error" />
                </Tooltip>
              )
            ) : (
              <Tooltip title={test} placement="bottom">
                <Badge status="default" />
              </Tooltip>
            )}
          </div>
        ))}
      </Space>
    </Box>
  </TasksHolder>
);
