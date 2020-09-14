import React from 'react';
import { Row, Col, Space } from 'antd';
import moment from 'moment';
import {
  TwitterOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

import { Title, Text } from '..';

export const PostTitle = ({ title, showSubtitle = false, date, readTime }) => (
  <>
    <Title>{title}</Title>
    {showSubtitle && (
      <Row align="middle" justify="space-between">
        <Col>
          <Space size="large">
            <Text type="secondary" size="small">
              {moment(date).format('MMMM D, YYYY')}
            </Text>
            <Text type="secondary" size="small">
              {readTime} min read
            </Text>
          </Space>
        </Col>
        <Col>
          <Space size="middle">
            <TwitterOutlined style={{ fontSize: 24 }} />
            <LinkedinOutlined style={{ fontSize: 24 }} />
            <FacebookOutlined style={{ fontSize: 24 }} />
          </Space>
        </Col>
      </Row>
    )}
  </>
);
