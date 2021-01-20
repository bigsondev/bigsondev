import React from 'react';
import { Space } from 'antd';
import moment from 'moment';

import { Title, Text, ShareIcons, Box } from '..';

export const PostTitle = ({ title, showSubtitle = false, date, readTime }) => (
  <>
    <Title>{title}</Title>
    <Space size="large">
      <Text type="secondary" size="small">
        {moment(date).format('MMM D, YYYY')}
      </Text>
      <Text type="secondary" size="small">
        {readTime} min read
      </Text>
    </Space>
    {showSubtitle && (
      <>
        <Box mt={2} mb={1}>
          <ShareIcons title={title} />
        </Box>
      </>
    )}
  </>
);
