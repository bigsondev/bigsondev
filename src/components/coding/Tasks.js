import React from 'react';
import { Space, Badge, Tooltip } from 'antd';
import styled from 'styled-components';

const TasksHolder = styled.div({
  padding: 16,
});

export const Tasks = ({ tasks, executedTests }) => (
  <TasksHolder>
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
  </TasksHolder>
);
