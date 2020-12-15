import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
} from '~utils';

import { Title, Text, Link, Icon } from '..';

const IconHolder = styled(Link)({
  color: '#595959 !important',
  '& a': {
    color: '#595959 !important',
  },
  '& a:hover': {
    color: '#595959 !important',
  },
  '& a:active': {
    color: '#595959 !important',
  },
  '& a:visited': {
    color: '#595959 !important',
  },
});

export const PostTitle = ({ title, showSubtitle = false, date, readTime }) => (
  <>
    {showSubtitle && (
      <Row align="middle" justify="space-between" gutter={[0, 16]}>
        <Col>
          <Space size="large">
            <Text type="secondary" size="small">
              {moment(date).format('MMM D, YYYY')}
            </Text>
            <Text type="secondary" size="small">
              {readTime} min read
            </Text>
          </Space>
        </Col>
        <Col>
          <Space size="small">
            <IconHolder href={shareOnReddit()}>
              <Icon type="reddit" />
            </IconHolder>
            <IconHolder href={shareOnTwitter(title)}>
              <Icon type="twitter" />
            </IconHolder>
            <IconHolder href={shareOnLinkedin()}>
              <Icon type="linkedin" />
            </IconHolder>
            <IconHolder href={shareOnFacebook()}>
              <Icon type="facebook" />
            </IconHolder>
          </Space>
        </Col>
      </Row>
    )}
    <Title>{title}</Title>
  </>
);
