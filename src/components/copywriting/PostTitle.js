import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import {
  TwitterOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  RedditOutlined,
} from '@ant-design/icons';

import { Title, Text, Link } from '..';

const IconHolder = styled(Link)({
  color: '#000 !important',
  '& a': {
    color: '#000 !important',
  },
  '& a:hover': {
    color: '#000 !important',
  },
  '& a:active': {
    color: '#000 !important',
  },
  '& a:visited': {
    color: '#000 !important',
  },
});

const shareOnReddit = () =>
  `http://www.reddit.com/submit?url=${encodeURIComponent(
    window.location.href
  )}`;

const shareOnTwitter = (title) =>
  `http://twitter.com/intent/tweet?url=${encodeURIComponent(
    window.location.href
  )}
    &text=${encodeURIComponent(title)}&via=bigsondev`;

const shareOnLinkedin = () =>
  `https://www.linkedin.com/shareArticle/?url=${encodeURIComponent(
    window.location.href
  )}`;

const shareOnFacebook = () =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    window.location.href
  )}`;

export const PostTitle = ({ title, showSubtitle = false, date, readTime }) => (
  <>
    {showSubtitle && (
      <Row align="middle" justify="space-between" gutter={[0, 16]}>
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
            <IconHolder href={shareOnReddit()}>
              <RedditOutlined style={{ fontSize: 20 }} />
            </IconHolder>
            <IconHolder href={shareOnTwitter(title)}>
              <TwitterOutlined style={{ fontSize: 20 }} />
            </IconHolder>
            <IconHolder href={shareOnLinkedin()}>
              <LinkedinOutlined style={{ fontSize: 20 }} />
            </IconHolder>
            <IconHolder href={shareOnFacebook()}>
              <FacebookOutlined style={{ fontSize: 20 }} />
            </IconHolder>
          </Space>
        </Col>
      </Row>
    )}
    <Title>{title}</Title>
  </>
);
