import React from 'react';
import { Divider } from 'antd';

import { Box, Illustration } from '..';

import { PostTitle } from './PostTitle';
import { QuickSummary } from './QuickSummary';

export const Post = ({
  title,
  showSubtitle = false,
  desc,
  date,
  readTime,
  illustration,
  children,
}) => (
  <>
    {illustration && (
      <Box mb={3}>
        <Illustration type={illustration} />
      </Box>
    )}
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
