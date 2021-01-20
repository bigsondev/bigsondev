import React from 'react';
import { Divider } from 'antd';

import { Box } from '..';

import { PostTitle } from './PostTitle';
import { QuickSummary } from './QuickSummary';

export const Post = ({
  title,
  showSubtitle = false,
  desc,
  date,
  readTime,
  children,
}) => (
  <>
    {title && (
      <Box mb={5}>
        <PostTitle
          title={title}
          date={date}
          readTime={readTime}
          showSubtitle={showSubtitle}
        />
      </Box>
    )}
    {desc && (
      <Box mb={6}>
        <QuickSummary desc={desc} />
        <Divider />
      </Box>
    )}
    {children}
  </>
);
