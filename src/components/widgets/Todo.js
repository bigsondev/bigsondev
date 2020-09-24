import React from 'react';
import { Popover, Row, Col, Statistic } from 'antd';
import { BorderOutlined, DatabaseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Title, Text, Link } from '..';

// item -> {title: 'Todo item1', : done: false}
// post-title-todo -> [item, item]

const TodoHolder = styled.div({
  width: 300,
});

const TodoItemHolder = styled(Row)({
  cursor: 'pointer',
  transition: 'color 0.3s, opacity 0.3s',

  '&: hover': {
    color: '#52c41a',
    opacity: 0.5,
  },
});

const FixedHolder = styled.div({
  position: 'fixed',
  top: '17%',
  left: '85%',
  transform: 'translate(-50%, -17%)',
});

const TodoItem = () => {
  return (
    <TodoItemHolder align="middle" justify="center" gutter={40}>
      <Col>
        <Text size="preNormal">Read this article</Text>
      </Col>
      <Col>
        <BorderOutlined style={{ fontSize: 20 }} />
      </Col>
    </TodoItemHolder>
  );
};

export const Todo = ({ desc }) => {
  const content = (
    <TodoHolder>
      <Title level={4} align="center">
        Todo List
      </Title>
      <Row gutter={[0, 8]} justify="center">
        <Col span={20}>
          <TodoItem />
        </Col>
        <Col span={20}>
          <TodoItem />
        </Col>
      </Row>
    </TodoHolder>
  );
  return (
    <Popover content={content} placement="bottom">
      <FixedHolder>
        <Statistic
          value={0}
          title="TODO LIST"
          prefix={<DatabaseOutlined />}
          suffix="/ 10"
        />
      </FixedHolder>
    </Popover>
  );
};
