import React from 'react';
import { Space, Row, Col, Rate } from 'antd';
import moment from 'moment';
import styled from 'styled-components';

import { Title, Text, ShareIcons, Box, Icon, theme } from '..';

const { fontSize } = theme;

const RateHolder = styled(Rate)({
  '& .ant-rate-star-full path': {
    fill: '#F9B060',
  },
  '& .ant-rate-star-zero path': {
    fill: '#f0f0f0',
  },
});

export const PostTitle = ({
  title,
  showSubtitle = false,
  date,
  readTime,
  difficulty,
  tags,
}) => (
  <>
    <Row align="top" justify="start" gutter={64}>
      <Col xs={4} sm={2}>
        {/* Tags will be a single string for now, can be changed later
into an array of tags */}
        <Icon type={`${tags}Tag`} width={48} />
      </Col>
      <Col xs={18} sm={20}>
        <Title fontSize={fontSize.medium} marginBottom="0">
          {title}
        </Title>
        <Space size="large">
          {date && (
            <Text type="secondary" size="small">
              {moment(date).format('MMM D, YYYY')}
            </Text>
          )}
          {readTime && (
            <Text type="secondary" size="small">
              {readTime} min read
            </Text>
          )}
          {difficulty && (
            <RateHolder
              character={<Icon type="duck" width={16} />}
              value={difficulty}
              disabled
            />
          )}
        </Space>
      </Col>
    </Row>
    {showSubtitle && (
      <>
        <Box mt={2} mb={1}>
          <ShareIcons title={title} />
        </Box>
      </>
    )}
  </>
);
