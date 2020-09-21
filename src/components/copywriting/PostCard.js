import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import styled from 'styled-components';

import { Title, Text } from '..';

export const Holder = styled(Card)({
  margin: '3rem 0',
  boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
});

const Item = styled(Card)({
  padding: 16,
  borderRadius: 12,
  transition: 'background-color 0.3s',

  '& .ant-card-body': {
    padding: 0,
  },
});

const Number = styled(Avatar)({
  backgroundColor: '#CEF7F1',
  marginRight: 16,
  marginTop: -6,
  transition: 'background-color 0.1s',

  '& .ant-avatar-string': {
    color: '#000',
    fontWeight: 600,
    fontSize: '1.1428571428571428em',
    transition: 'color 0.1s',
  },
});

export const PostCard = ({ title, data }) => (
  <Holder>
    <Title level={3} align="center">
      {title}
    </Title>
    <Row justify="center" gutter={[0, 16]}>
      {data.map((item, index) => (
        <Col span={20} key={index}>
          <Item>
            <Number>{index + 1}</Number>
            {typeof item === 'string' ? (
              <Text size="preNormal">{item}.</Text>
            ) : (
              item
            )}
          </Item>
        </Col>
      ))}
    </Row>
  </Holder>
);
