import React from 'react';
import { Space } from 'antd';
import { CheckSquareOutlined, CloseSquareOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const TasksHolder = styled.div({
  padding: 16,
});

export const Tasks = ({ tasks, executedTests }) => (
  <TasksHolder>
    <Space direction="vertical" size="middle">
      {tasks.map((test, index) => (
        <div key={index}>
          <Space size="middle">
            {executedTests.length > 0 ? (
              executedTests[index] ? (
                <Fade>
                  <CheckSquareOutlined
                    style={{ color: '#52c41a', fontSize: 16 }}
                  />
                </Fade>
              ) : (
                <Fade>
                  <CloseSquareOutlined
                    style={{ color: '#f5222d', fontSize: 16 }}
                  />
                </Fade>
              )
            ) : null}
            {test}
          </Space>
        </div>
      ))}
    </Space>
  </TasksHolder>
);
